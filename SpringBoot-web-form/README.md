# Trabajando con una app en SpringBoot

## Despliegue en Amazon EC2 con Linux

### Aplicación SpringBoot sin BD

* Desplegar `EC2 Instance` con la AMI `Amazon Linux 2023`
* Instalar el paquete `java-17-amazon-corretto`
* Crear estructura del Proyecto con `SpringBoot Initializr`
* Compilar la aplicación con `Gradle|Maven`
* Ejecutar aplicación invocando al archivo JAR o WAR

```sh
sudo yum install java-17-amazon-corretto
```

```sh
./gradlew build
```

4 directories, 8 files

```sh
java -jar webapp-0.0.1-SNAPSHOT.jar
```