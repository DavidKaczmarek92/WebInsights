plugins {
    id("com.avast.gradle.docker-compose") version "0.17.4"
}

dockerCompose {
    removeContainers = false
    removeVolumes = false
}