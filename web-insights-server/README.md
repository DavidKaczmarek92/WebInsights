# WebInsights Server
In here we have all backend code for the WebInsights project.

Run spring boot:
```sh
./gradlew bootRun
```

To run spring boot with hot swapping you need to use this commands in the separate terminal window:

```sh
gradle -t classes
```

```sh
./gradlew bootRun
```

Run unit tests: 
```sh
./gradlew test
```

Run unit tests(continuous build):
```sh
./gradlew -t test
```
