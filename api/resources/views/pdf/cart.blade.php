@extends('layouts.pdf')

@section('title') Carta @endsection

@section('content')

<h2 style="text-align: center;">{{ $title }}</h2>

@foreach ($categories as $cat)

<h4 style="text-align: center; margin: 1rem;">{{ $cat['title'] }}</h4>
<table width="100%" class="page-break">
    <thead style="background-color: lightgray;">
        <tr>
            <th>#</th>
            <th>Producto</th>
            <th></th>
            <th>Descripcion</th>
            <th>Precio</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($cat['products'] as $p)
        <tr>
            <th scope="row">{{ $p->id }}</th>
            <td>{{ $p->title }}</td>
            <td>
                <img src="{{public_path($p->image)}}" width="100">
            </td>
            <td>{{ $p->description }}</td>
            <td align="right">${{ $p->sell_price }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
@endforeach
@endsection
