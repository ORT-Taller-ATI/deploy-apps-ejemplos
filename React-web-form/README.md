# Despliegue App React en S3

Generar la estructura del proyecto en React. Esta aplicación usa `tailwindcss`

```sh
npx create-react-app $nombre_app
```

```sh
npm install -D tailwindcss && npx tailwindcss init
```

```sh
# Probar la aplicación localmente
npm start
```

### Configuración del bucket

1. Activar la opción "Web Hosting" en properties del Bucket
2. Configurar la policy para permitir el acceso al contenido.

```JSON
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

Para subir el contenido al bucket de S3, debemos de construír el sitio. El resultado es un directorio `build` que debemos de comprimir con `zip` y subirlo al bucket. 

```sh
npm run build
```