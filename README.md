# ptz-user-repository

[![Build Status](https://travis-ci.org/polutz/ptz-user-repository.svg)](https://travis-ci.org/polutz/ptz-user-repository)
[![NPM](https://img.shields.io/npm/v/ptz-user-repository.svg)](https://www.npmjs.com/package/ptz-user-repository)
[![codecov.io](http://codecov.io/github/polutz/ptz-user-repository/coverage.svg)](http://codecov.io/github/polutz/ptz-user-repository)
[![Dependency Status](https://gemnasium.com/polutz/ptz-user-repository.svg)](https://gemnasium.com/polutz/ptz-user-repository)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/polutz/ptz-user-repository)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

[pt-br](https://github.com/polutz/ptz-user-repository/blob/master/README.pt-br.md)
[en-us](https://github.com/polutz/ptz-user-repository/blob/master/README.md)

Este é o repositório dos Usuários usando mongoDB no Polutz, conjunto de móludos baseados em DDD (Domain Driven Design) 
e TDD (Test Driven Development).
Sinta-se livre para usar em seus projetos, e contribuir!

Nessa camada de repositório (Repository), a ideia é deixar somente o código
necessário para acesso ao banco de dados, como queries, insert, update and delete.
Deve-se evitar ao máximo colocar qualquer tipo de regra de negocio nessa camada.

Regras de negocio devem ir para a camada de Domain ou App, 
o ídeal é deixar só na Domain, e na App só chamar o repositório 
passando pra Domain o que for necessário.

## Prerequisites

- Node.
- Docker (for tests).

## NPM Global packages
```
    npm install -g ts-node
```

## Setup
```
    npm install   
```

## Test
We use docker to run the tests against a real MongoDB database
1) Run this command in order to create a docker container. Copy the output container name.
```
    sudo docker-compose up -d
```
2) Update CONTAINER_NAME with the container name and run the tests.
```
    sudo docker exec CONTAINER_NAME npm test
```