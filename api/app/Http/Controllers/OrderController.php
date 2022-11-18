<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Models\Client;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('store');
        $this->middleware('role:manager')->only(['update']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OrderResource::collection(Order::query()->paginate(15));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'table_number' => ['required', 'integer'],
            'client' => ['required', 'array'],
            'client.name' => ['required', 'string'],
            'client.ci' => ['required', 'string'],
            'client.contact' => ['required', 'string'],
            'order_products' => ['required', 'array'],
            'order_products.*.product_id' => ['required', 'integer'],
            'order_products.*.qty' => ['required', 'integer'],
        ]);
        if ($validator->fails()) {
            return $this->errorResponse('Verifique los datos enviados');
        }
        $validator = $validator->validate();
        // Check Client
        $client = Client::query()->where('ci', $validator['client']['ci'])->first();
        if (!$client) {
            $client = new Client($validator['client']);
            if (!$client->save())
                return $this->errorResponse('No se pudo crear el cliente');
        }
        // complete required data
        $validator['status'] = 'created';
        $validator['total_price'] = 0;
        $validator['client_id'] = $client->id;
        // Handle OrderProducts
        // TODO Validate stock
        $orderProducts = [];
        foreach ($validator['order_products'] as $reqOrderProduct) {
            $product = Product::find($reqOrderProduct['product_id']);
            if (!$product) return $this->errorResponse('No existe el producto');
            $validator['total_price'] += $product->sell_price * $reqOrderProduct['qty'];
            array_push($orderProducts, $reqOrderProduct);
        }
        $model = new Order($validator);
        return $model->save() && $model->order_products()->createMany($orderProducts)
            ? new OrderResource($model)
            : $this->errorResponse('No se pudo guardar la orden');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $model = Order::find($id);
        return $model
            ? new OrderResource(Order::find($id))
            : $this->errorResponse('No se pudo encontrar el Pedido');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'status' => ['required', 'in:' . implode(',', Order::$STATUS)]
        ]);
        if ($validator->fails()) {
            return $this->errorResponse('Verifique los datos enviados');
        }
        $validator = $validator->validate();
        $model = Order::find($id);
        if (!$model) return $this->errorResponse('No encontramos el pedido');
        $model->status = $validator['status'];
        return $model->save() ? new OrderResource($model)
            : $this->errorResponse('No se pudo guardar el pedido');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $model = Order::find($id);
        return $model && $model->delete()
            ? response()->json()
            : $this->errorResponse('No se pudo eliminar el Pedido');
    }

    /**
     * Filter
     * @param Request request
     * @return Illuminate\Http\JsonResponse
     */
    public function filter(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'status' => ['nullable', 'in:' . implode(',', Order::$STATUS)]
        ]);
        if ($validator->fails()) {
            return $this->errorResponse('Verifique los datos enviados');
        }
        $validator = $validator->validate();
        $qry = Order::query();
        if (isset($validator['status']))
            $qry = $qry->where('status', $validator['status']);

        return OrderResource::collection($qry->paginate(15));
    }
    /**
     *
     */
    public function count(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'status' => ['nullable', 'in:' . implode(',', Order::$STATUS)]
        ]);
        if ($validator->fails()) {
            return $this->errorResponse('Verifique los datos enviados');
        }
        $validator = $validator->validate();
        $count = ['created' => 0, 'accepted' => 0, 'c-canceled' => 0, 'r-canceled' => 0, 'completed' => 0];

        if (isset($validator['status'])) {
            $count[$validator['status']] = Order::query()->where('status', $validator['status'])->count();
            return response()->json([$validator['status'] => $count], 200, [], JSON_NUMERIC_CHECK);
        }

        $count['created'] = Order::query()->where('status', 'created')->count();
        $count['accepted'] = Order::query()->where('status', 'accepted')->count();
        // $count['c-canceled'] = Order::query()->where('status', 'c-canceled')->count();
        // $count['r-canceled'] = Order::query()->where('status', 'r-canceled')->count();
        // $count['completed'] = Order::query()->where('status', 'completed')->count();
        return response()->json($count, 200, [], JSON_NUMERIC_CHECK);
    }
}
