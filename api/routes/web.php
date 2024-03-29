<?php

use App\Http\Controllers\ReportController;
use Illuminate\Support\Facades\Route;
use Barryvdh\DomPDF\Facade\Pdf;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect(env('APP_URL') . '/ui');
});


Route::prefix('reports')->group(function () {
    Route::get('cart', [ReportController::class, 'cart']);
    Route::get('orders', [ReportController::class, 'orders']);
    Route::get('products', [ReportController::class, 'products']);
});
