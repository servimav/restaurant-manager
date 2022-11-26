<!doctype html>
<html lang="es">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title>@yield('title')</title>

    <style type="text/css">
        * {
            font-family: Verdana, Arial, sans-serif;
        }

        table {
            font-size: x-small;
        }

        tfoot tr td {
            font-weight: bold;
            font-size: x-small;
        }

        .gray {
            background-color: lightgray
        }

        .page-break {
            page-break-after: always;
        }
    </style>

</head>

<body>

    <table width="100%">
        <tr>
            <td valign="top"><img src="{{public_path('/images/default.jpg')}}" alt="" width="150" /></td>
            <td align="right">
                <h3>Restaurant Buena Vibra</h3>
                <pre>
                Company representative name
                Company address
                Tax ID
                phone
                fax
            </pre>
            </td>
        </tr>

    </table>

    <br />
    @yield('content')

</body>

</html>
