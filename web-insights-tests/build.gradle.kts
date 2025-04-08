plugins {
    id("java")
    id("application")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.seleniumhq.selenium:selenium-java:4.1.0")
}

application {
    mainClass.set("io.web_insights.SeleniumGridTest")
}

tasks.register<JavaExec>("runSeleniumGridTest") {
    group = "verification"
    description = "Run the Selenium Grid Test"
    classpath = sourceSets["test"].runtimeClasspath
    mainClass.set("io.web_insights.SeleniumGridTest")
}