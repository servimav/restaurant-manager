<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'role:admin']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ClientResource::collection(Client::query()->paginate(15));
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
            'ci' => ['required', 'numeric', 'unique:clients'],
            'name' => ['required', 'string'],
            'contact' => ['required', 'string'],
        ]);
        if ($validator->fails()) {
            return $this->errorResponse('Verifique los datos enviados');
        }
        $validator = $validator->validate();

        $model = new Client($validator);

        return $model->save()
            ? new ClientResource($model)
            : $this->errorResponse('No se pudo guardar el Cliente');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ClientResource(Client::find($id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $model = Client::find($id);
        return $model && $model->delete()
            ? response()->json()
            : $this->errorResponse('No se pudo eliminar el Cliente');
    }
}
