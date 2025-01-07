plugins {
    id("org.danilopianini.gradle-pre-commit-git-hooks") version "2.0.6"
}

rootProject.name = "WebInsights"

include("web-insights-server")
include("web-insights-docker")

gitHooks {
    commitMsg { conventionalCommits() }
    createHooks()
}