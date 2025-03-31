FROM maven:3.8.5-openjdk-17 AS build

# Diretório de trabalho
WORKDIR /app


COPY pom.xml .
COPY src ./src


RUN mvn install -e -X

# Segundo estágio: imagem final
FROM openjdk:17-jdk-slim

# Copia o jar da construção anterior
COPY --from=build /app/target/technical-challenge-0.0.1-SNAPSHOT.jar /app/app.jar


WORKDIR /app


EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["java", "-jar", "app.jar"]
