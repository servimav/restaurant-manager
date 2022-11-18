<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/**
 * -----------------------------------------
 *	Users
 * -----------------------------------------
 */
Route::post('users/login', [UserController::class, 'login']);
Route::apiResource('users', UserController::class);

/**
 * -----------------------------------------
 *	Clients
 * -----------------------------------------
 */
Route::apiResource('clients', ClientController::class)->except('update');

/**
 * -----------------------------------------
 *	Products
 * -----------------------------------------
 */
Route::get('products/onsale', [ProductController::class, 'onsale']);
Route::apiResource('products', ProductController::class);

/**
 * -----------------------------------------
 *	Product categories
 * -----------------------------------------
 */
Route::apiResource('product-categories', ProductCategoryController::class);

/**
 * -----------------------------------------
 *	Orders
 * -----------------------------------------
 */
Route::get('orders/filter', [OrderController::class, 'filter']);
Route::get('orders/count', [OrderController::class, 'count']);
Route::apiResource('orders', OrderController::class);
