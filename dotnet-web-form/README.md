# Aplicación DotNet

## Aplicación Dotnet sobre AWS Beanstalk

* Generamos la estructura de una aplicación `dotnet`
* Probamos localmente la aplicación
* Generamos el contenido a publicar
* Empaquetamos el contenido del directorio `publish`
* Subimos el .zip a Beanstalk

```sh
dotnet new webapp -n $nombre_app
```

```sh
dotnet run --urls "http://localhost:$port"
```

```sh
dotnet publish -c Release -o publish
```

## Aplicación Dotnet corriendo en Docker en AWS Beanstalk

AWS Beanstalk soporta la creación de un Environment usando `Docker`. Para esto debemos de empaquetar el zip con el contenido de la aplicación y el Dockerfile para generar la imagen.

```
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
COPY . .
RUN dotnet publish -c Release -o /publish

# Use .NET runtime image to run the application
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /publish .
EXPOSE 8080
ENTRYPOINT ["dotnet", "dotnet-web-form.dll"]
```