# OpenJDK image as a base
FROM openjdk:17-jdk-slim

WORKDIR /app
COPY build/libs/webapp-0.0.1-SNAPSHOT.jar webapp.jar
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "webapp.jar"]