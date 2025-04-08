plugins {
    id("org.danilopianini.gradle-pre-commit-git-hooks") version "2.0.6"
}

rootProject.name = "WebInsights"

include("web-insights-docker")
include("web-insights-server")
include("web-insights-tests")

gitHooks {
    commitMsg { conventionalCommits() }
    createHooks()
}