<?php

namespace App\Http\Middleware;

use Closure;

class EnsureUserHasRole
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
    public function handle($request, Closure $next, $role)
    {
        return response()->json($role);
        if ($request->user()->role !== $role) {
            return response()->json('No tiene permisos suficientes', 401, [], JSON_NUMERIC_CHECK);
        }
        return $next($request);
    }
}
