@extends('layouts.pdf')

@section('title')
{{ $title }}
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
            <th>Mesa</th>
            <th>Camarero</th>
            <th>Estado</th>
            <th>Total $</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($orders as $order)
        <tr>
            <th scope="row">{{ $order['id'] }}</th>
            <td>Mesa No. {{ $order['table_number'] }} </td>
            <td>{{ $order['camarero'] }}</td>
            <td>{{ $order['status'] }}</td>
            <td align="right">{{ $order['price'] }}</td>
        </tr>
        @endforeach
    </tbody>

    <tfoot>
        <tr>
            <td colspan="3"></td>
            <td align="right">Total $</td>
            <td align="right" class="gray">$ {{ $total_price }}</td>
        </tr>
    </tfoot>
</table>
@endsection
