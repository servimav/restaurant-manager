<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error de Acceso</title>
    <style>
        .container {
            padding: 0.1rem;
        }

        ul {
            padding: 0;
        }

        li {
            text-decoration: none;
            list-style: none;
            padding: 0.3rem;
            margin: 0.3rem 0 0.3rem 0;
            border: solid 1px rgba(0, 0, 0, 0.2);
        }

        li:hover {
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
            cursor: pointer;
            padding: 0.35rem;

        }
    </style>
</head>

<body>
    <div class="container">
        <ul>
            <li>APP_NAME: {{ $APP_NAME }}</li>
            <li>APP_URL: {{ $APP_URL }}</li>
            <li>DB_CONNECTION: {{ $DB_CONNECTION }}</li>
            <li>HOST_NAME: {{ $HOST_NAME }}</li>
            <li>SERVER_NAME: {{ $SERVER_NAME }}</li>
        </ul>
    </div>
</body>

</html>
