name := "angular-play-demo"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  javaJpa,
  javaWs,
  cache
)

routesGenerator := InjectedRoutesGenerator
