<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    /**
     * errorResponse
     */
    public function errorResponse($error = 'Ha ocurrido un error', $staus = 400)
    {
        return response()->json($error, $staus, [], JSON_NUMERIC_CHECK);
    }
}
