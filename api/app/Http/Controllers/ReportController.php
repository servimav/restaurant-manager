<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\ProductCategory;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReportController extends Controller
{
    /**
     * Menu
     * @return Pdf
     */
    public function cart(Request $request)
    {
        $categories = ProductCategory::all();

        $data = ['title' => 'Carta', 'categories' => []];

        foreach ($categories as $cat) {
            $products = $cat->products()->where('onsale', true)->get();
            array_push($data['categories'], [
                'id' => $cat->id,
                'title' => $cat->title,
                'products' => $products
            ]);
        }

        // return view('pdf.cart', $data);

        $pdf = Pdf::loadView('pdf.cart', $data);

        return $pdf->download('Carta.pdf');
    }

    /**
     * orders
     * @param Request request
     * @return Pdf
     */
    public function orders(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'from' => ['required', 'string'],
            'to' => ['required', 'string'],
            'status' => ['required', 'in:' . implode(',', Order::$STATUS)]
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors()->toArray(), 400, [], JSON_NUMERIC_CHECK);
        }
        $validator = $validator->validate();
        $qry = Order::query()
            ->where('status', $validator['status'])
            ->whereDate('created_at', '>=', new Carbon($validator['from']))
            ->whereDate('created_at', '<=', new Carbon($validator['to']));
        $data = [
            'total_price' => 0,
            'orders' => [],
            'dates' => [
                'from' => $validator['from'],
                'to' => $validator['to'],
            ],
            'title' => $validator['status'] === 'completed' ? 'Reporte de Ventas' : 'Reporte de Cancelaciones'
        ];
        foreach ($qry->get() as $order) {
            array_push($data['orders'], [
                'id' => $order->id,
                'created_at' => $order->created_at,
                'table_number' => $order->table_number,
                'camarero' => $order->user->name,
                'price' => $order->total_price,
                'status' => $order->status
            ]);
            $data['total_price'] += $order->total_price;
        }

        $pdf = Pdf::loadView('pdf.sales', $data);

        return $pdf->download('ordenes_' . $validator['status'] . '.pdf');
    }

    /**
     * productsEarn
     * @param Request request
     * @return Pdf
     */
    public function products(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'from' => ['nullable', 'string'],
            'to' => ['nullable', 'string'],
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors()->toArray(), 400, [], JSON_NUMERIC_CHECK);
        }
        $validator = $validator->validate();
        $orderQry = Order::query()
            ->where('status', 'completed');
        if (isset($validator['from']))
            $orderQry = $orderQry->whereDate('created_at', '>=', new Carbon($validator['from']));

        if (isset($validator['to']))
            $orderQry = $orderQry->whereDate('created_at', '<=', new Carbon($validator['to']));


        $data = [
            'title' => 'Datos por Producto',
            'products' => [],
            'dates' => [
                'from' => isset($validator['from']) ? $validator['from'] : null,
                'to' => isset($validator['to']) ? $validator['to'] : null,
            ],
        ];

        foreach (Product::all() as $product) {
            $counter = 0;
            $inversion = 0;
            $earn = 0;
            foreach ($product->order_products as $op) {
                $counter += $op->qty;
                $inversion += $product->production_price * $op->qty;
                $earn += $product->sell_price * $op->qty;
            }
            array_push($data['products'], [
                'id' => $product->id,
                'title' => $product->title,
                'sell_price' => $product->sell_price,
                'production_price' => $product->production_price,
                'sales' => $counter,
                'inversion' => $inversion,
                'earn' => $earn,
            ]);
        }

        // return view('pdf.products', $data);

        $pdf = Pdf::loadView('pdf.products', $data);

        return $pdf->download('products_stats.pdf');
    }
}
