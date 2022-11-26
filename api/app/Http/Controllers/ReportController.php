<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ReportController extends Controller
{
    /**
     * orders
     * @param Request request
     * @return Illuminate\Http\JsonResponse
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
}
