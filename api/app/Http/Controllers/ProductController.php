<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'role:admin'])->except('onsale');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProductResource::collection(Product::query()->orderByDesc('id')->paginate(15));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function onsale(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'category_id' => ['nullable', 'integer'],
        ]);
        if ($validator->fails()) {
            return $this->errorResponse('Verifique los datos enviados');
        }
        $validator = $validator->validate();
        if (isset($validator['category_id'])) {
            return ProductResource::collection(Product::query()->where([
                ['onsale', true], ['category_id', $validator['category_id']]
            ])->orderBy('category_id')->get());
        }
        return ProductResource::collection(Product::query()->where('onsale', true)->orderBy('category_id')->get());
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
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'sell_price' => ['required', 'numeric'],
            'production_price' => ['nullable', 'numeric'],
            'top_price' => ['nullable', 'numeric'],
            'onsale' => ['nullable', 'boolean'],
            'category_id' => ['required', 'integer'],
        ]);
        if ($validator->fails()) {
            return $this->errorResponse('Verifique los datos enviados');
        }
        $validator = $validator->validate();
        // TODO Handle image
        $validator['image'] = '';
        // Check Category
        if (!ProductCategory::query()->find($validator['category_id']))
            return $this->errorResponse('categoria no existe');
        $model = new Product($validator);
        return $model->save()
            ? new ProductResource($model)
            : $this->errorResponse('No se pudo guardar el producto');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Product::find($id) ?
            new ProductResource(Product::find($id))
            : $this->errorResponse('El producto no existe');
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
            'title' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'sell_price' => ['nullable', 'numeric'],
            'production_price' => ['nullable', 'numeric'],
            'top_price' => ['nullable', 'numeric'],
            'onsale' => ['nullable', 'boolean'],
            'category_id' => ['nullable', 'integer'],
        ]);
        if ($validator->fails()) {
            return $this->errorResponse('Verifique los datos enviados');
        }
        $validator = $validator->validate();
        if (isset($validator['category_id']) && !ProductCategory::query()->find($validator['category_id']))
            return $this->errorResponse('categoria no existe');
        // TODO Handle image
        $validator['image'] = '';

        $model = Product::find($id);
        return $model && $model->update($validator)
            ? new ProductResource($model)
            : $this->errorResponse('No se pudo guardar el producto');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $model = Product::find($id);
        return $model && $model->delete()
            ? response()->json()
            : $this->errorResponse('Producto no encontrado');
    }
}
