<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ServimavMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $lKey = gethostname() . ';' . $request->server('SERVER_NAME') . ';' . env('APP_KEY');
        $lKeyHash = base64_encode($lKey);

        if ($lKeyHash === env('APP_LICENCE'))
            return $next($request);

        $data = [
            'APP_NAME' => env('APP_NAME'),
            'APP_URL' => env('APP_URL'),
            'APP_KEY' => env('APP_KEY'),
            'DB_CONNECTION' => env('DB_CONNECTION'),
            'HOST_NAME' => gethostname(),
            'SERVER_NAME' => $request->server('SERVER_NAME'),
            'HASH' => $lKeyHash,
        ];

        return response()->view('error', $data, 401);
    }
}
