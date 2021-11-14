FROM maven:3.8.1-openjdk-11
WORKDIR /findband
COPY . .
RUN mvn clean install -DskipTests
ENTRYPOINT ["java", "-jar", "/findband/target/backend-0.0.1-SNAPSHOT.jar"]