# ptz-user-repository

[![Build Status](https://travis-ci.org/polutz/ptz-user-repository.svg)](https://travis-ci.org/polutz/ptz-user-repository)
[![codecov.io](http://codecov.io/github/polutz/ptz-user-repository/coverage.svg)](http://codecov.io/github/polutz/ptz-user-repository)
[![Dependency Status](https://gemnasium.com/polutz/ptz-user-repository.svg)](https://gemnasium.com/polutz/ptz-user-repository)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/polutz/ptz-user-repository)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Este é o repositório dos Usuários usando mongoDB no Polutz, conjunto de móludos baseados em DDD (Domain Driven Design) 
e TDD (Test Driven Development).
Sinta-se livre para usar em seus projetos, e contribuir!

Nessa camada de repositório (Repository), a ideia é deixar somente o código
necessário para acesso ao banco de dados, como queries, insert, update and delete.
Deve-se evitar ao máximo colocar qualquer tipo de regra de negocio nessa camada.

Regras de negocio devem ir para a camada de Domain ou App, 
o ídeal é deixar só na Domain, e na App só chamar o repositório 
passando pra Domain o que for necessário.

Core Domain: https://github.com/polutz/ptz-core-domain

User Domain: https://github.com/polutz/ptz-user-domain

User Repository: https://github.com/polutz/ptz-user-repository

Projeto que utiliza os modulos acima: https://github.com/angeloocana/freecomclub

Tarefas: https://trello.com/b/w9BqiPdz/frecom-club

Stack: react, redux, relay, graphql, nodejs e mongodb.

Metodologias: TDD (Test Driven Development), DDD (Domain Driven Design).

Tools: Docker, Typescript, babel, webpack, mocha, gulp.

## Prerequisites

1. Latest version of Node to be installed.

## NPM Global packages
```
    npm install ts-node -g
    npm install typescript-node -g
    npm install babel-cli -g
```

## Typings Global Packages 
```
    typings install dt~mocha --global --save
```

## Setup
```
    npm install   
```

## Test
```
    sudo docker build -t pur . 
    sudo docker run -d --name cpur pur
    sudo docker exec cpur npm test
```