# Documentacion de la API

## Users

Iniciar sesion
```http
POST /api/users/login HTTP/1.1
Host: {{ host }}

{
  "phone": string,
  "password": string
}

## Response
{
	profile: IUser,
	api_token: string
}
```