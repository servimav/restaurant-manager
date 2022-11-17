<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'role:admin'])->except('login');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UserResource::collection(User::query()->paginate(15));
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
            'name' => ['required', 'string'],
            'phone' => ['required', 'numeric', 'unique:users'],
            'password' => ['required', 'string', 'confirmed'],
            'role' => ['required', 'string', 'in:' . implode(',', User::$ROLES)],
        ]);
        if ($validator->fails()) {
            return $this->errorResponse('Verifique los datos enviados');
        }
        $validator = $validator->validate();
        $validator['password'] = Hash::make($validator['password']);
        $user = new User($validator);

        return $user->save()
            ? new UserResource($user)
            : $this->errorResponse('No se pudo guardar el usuario');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::find($id) ? new UserResource(User::find($id)) : $this->errorResponse('No existe el usuario');
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
            'name' => ['nullable', 'string'],
            'password' => ['nullable', 'string', 'confirmed'],
            'role' => ['nullable', 'string', 'in:' . implode(',', User::$ROLES)],
        ]);
        if ($validator->fails()) {
            return $this->errorResponse('Verifique los datos enviados');
        }
        $validator = $validator->validate();
        $user = User::find($id);
        if (!$user) return $this->errorResponse('No existe el usuario');
        if (isset($validator['password'])) $validator['password'] = Hash::make($validator['password']);
        return $user->update($validator)
            ? new UserResource(User::find($id))
            : $this->errorResponse('No se pudo actualizar el usuario');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        return $user && $user->delete()
            ? response()->json()
            : $this->errorResponse('No se pudo eliminar el usuario');
    }
    /**
     * login
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => ['required', 'numeric'],
            'password' => ['required', 'string'],
        ]);
        if ($validator->fails()) {
            return $this->errorResponse('Verifique los datos enviados');
        }
        $validator = $validator->validate();
        // try auth
        if (!Auth::attempt(['phone' => $validator['phone'], 'password' => $validator['password']]))
            return response()->json(null, 401);
        $user = User::find(auth()->id());
        $user->tokens()->where('name', 'restaurant-token')->delete();
        $token = $user->createToken('restaurant-token')->plainTextToken;
        return (new UserResource($user))->additional(['api_token' => $token]);
    }
}
