# Trabajando con una app en SpringBoot

## Despliegue en Amazon EC2 con Linux

### Aplicación SpringBoot con Base de Datos

* Desplegar `EC2 Instance` con la AMI `Amazon Linux 2023`
* Desplegar la instancia de Base de Datos `AWS RDS`
* Instalar el paquete `java-17-amazon-corretto` y el paquete `mariadb105-server-utils.x86_64`
* Crear estructura del Proyecto con `SpringBoot Initializr`
* Compilar la aplicación con `Gradle|Maven`
* Ejecutar aplicación invocando al archivo JAR o WAR

```sh
sudo yum install java-17-amazon-corretto mariadb105-server-utils.x86_64
```

### Configuración de la base de Datos

Crear el archivo `applications.properties` en el directorio `src/main/resources` con el siguiente contenido:

```text
spring.application.name=webapp
# Database connection settings
spring.datasource.url=jdbc:mysql://{RDS-Endpoint}:3306/{database-name}
spring.datasource.username={db-user}
spring.datasource.password={db-password}
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA settings (optional but recommended)
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

```sh
./gradlew build
```

4 directories, 8 files

```sh
java -jar webapp-0.0.1-SNAPSHOT.jar
```