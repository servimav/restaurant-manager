@extends('layouts.pdf')

@section('title')
Productos
@endsection

@section('content')

<h2 style="text-align: center;">{{ $title }}</h2>

<table width="100%" style="margin-top: 2rem;">
    <tr>
        <td><strong>Desde: </strong> {{ $dates['from'] }}</td>
        <td><strong>Hasta: </strong> {{ $dates['to'] }}</td>
    </tr>

</table>

<table width="100%">
    <thead style="background-color: lightgray;">
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Ventas</th>
            <th>Costo Produccion</th>
            <th>Precio Venta</th>
            <th>Inversion total</th>
            <th>Venta total</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($products as $p)
        <tr>
            <th scope="row">{{ $p['id'] }}</th>
            <td>{{ $p['title'] }}</td>
            <td align="right">{{ $p['sales'] }}</td>
            <td align="right">${{ $p['production_price'] }}</td>
            <td align="right">${{ $p['sell_price'] }}</td>
            <td align="right">${{ $p['inversion'] }}</td>
            <td align="right">${{ $p['earn'] }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
