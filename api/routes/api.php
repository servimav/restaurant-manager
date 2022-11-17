<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/**
 * -----------------------------------------
 *	Users
 * -----------------------------------------
 */
Route::prefix('users')->group(function () {
    /**
     * Auth login
     */
    Route::post('login', [UserController::class, 'login']);
    /**
     * Users CRUD
     */
    Route::apiResource('', UserController::class);
});

/**
 * -----------------------------------------
 *	Clients
 * -----------------------------------------
 */
Route::apiResource('clients', ClientController::class);

/**
 * -----------------------------------------
 *	Products
 * -----------------------------------------
 */
Route::apiResource('products', ClientController::class);
