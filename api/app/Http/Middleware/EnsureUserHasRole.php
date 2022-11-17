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
        switch ($role) {
            case 'admin':
                if ($request->user()->role === 'admin')
                    return $next($request);
                break;
            case 'manager':
                if ($request->user()->role === 'admin' || $request->user()->role === 'manager')
                    return $next($request);
                break;
            case 'supervisor':
                if (
                    $request->user()->role === 'admin' || $request->user()->role === 'manager'
                    || $request->user()->role === 'supervisor'
                )
                    return $next($request);
                break;
            default:
                return response()->json('No tiene permisos suficientes', 401, [], JSON_NUMERIC_CHECK);
        }
        return response()->json('No tiene permisos suficientes', 401, [], JSON_NUMERIC_CHECK);
    }
}
