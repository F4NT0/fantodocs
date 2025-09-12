---
title: Surefire - Melhoria dos testes
description: Verificando os testes em pipelines
---

## O que é Surefire?

- `maven-surefire-plugin` é um dos plugins mais importantes do Maven quando se trata de executar testes automatizados no Java.
- Ele é responsável por rodar os testes unitários durante a fase de testes do ciclo de vida do Maven.
- Passos do Surefire:
    - Executa testes escritos com Junit, TestNG ou outra bibliotecas de teste.
    - Gera relatórios de teste em formato .txt e .xml.
    - Permite configurar quais testes devem ser executados, ignorados ou filtrados.
    - Suporta execução paralela de testes.
    - Pode ser integrado com ferramentas de CI/CD como Jenkins, Github Actions, etc.

## Melhoria do Surefire

- Adicione o seguinte plugin na parte de plugins no `pom.xml`

```xml

<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-surefire-plugin</artifactId>
	<version>3.5.3</version>
	<dependencies>
		<dependency>
			<groupId>me.fabriciorby</groupId>
			<artifactId>maven-surefire-junit5-tree-reporter</artifactId>
			<version>1.4.0</version>
		</dependency>
	</dependencies>
	<configuration>
		<reportFormat>plain</reportFormat>
		<consoleOutputReporter>
			<disable>true</disable>
		</consoleOutputReporter>
		<statelessTestsetInfoReporter
			implementation="org.apache.maven.plugin.surefire.extensions.junit5.JUnit5StatelessTestsetInfoTreeReporter">
			<theme>UNICODE</theme>
		</statelessTestsetInfoReporter>
	</configuration>
</plugin>

```

Com essa configuração podemos ver no nosso pipeline o status dos testes para termos um overview de quais não passaram.

<table align="center"><tr><td align="center" width="9999">
    <img src="https://github.com/F4NT0/fantodocs/blob/main/public/java/surefire/surefire-running.png?raw=true" alt="Surefire running into pipeline"/> 
</td></tr></table>


