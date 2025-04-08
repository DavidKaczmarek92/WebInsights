plugins {
    id("com.avast.gradle.docker-compose") version "0.17.4"
}

dockerCompose {
    removeContainers = false
    removeVolumes = false

    useComposeFiles = if (project.hasProperty("bdd")) {
        listOf("docker-compose.yml", "docker-compose.selenium.yml")
    } else {
        listOf("docker-compose.yml")
    }
}