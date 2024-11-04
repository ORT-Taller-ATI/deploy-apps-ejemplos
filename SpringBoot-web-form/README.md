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

### Configurar System Daemon

Para que la aplicación pueda seguir corriendo en background o inicializar junto con el sistema, se debe configurar SystemD para esto. 

```sh
sudo vim /etc/systemd/system/webapp.service
```

```sh
[Unit]
Description=Spring Boot Application
After=network.target

[Service]
User=ec2-user
ExecStart=/usr/bin/java -jar /path/to/your/app.jar
WorkingDirectory=/path/to/your/app/directory
Restart=always
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=webapp

[Install]
WantedBy=multi-user.target
```

```sh
sudo systemctl daemon-reload
sudo systemctl start webapp
```