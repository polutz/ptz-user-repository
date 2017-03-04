# ptz-user-repository

[![Build Status](https://travis-ci.org/polutz/ptz-user-repository.svg)](https://travis-ci.org/polutz/ptz-user-repository)
[![codecov.io](http://codecov.io/github/polutz/ptz-user-repository/coverage.svg)](http://codecov.io/github/polutz/ptz-user-repository)
[![Dependency Status](https://gemnasium.com/polutz/ptz-user-repository.svg)](https://gemnasium.com/polutz/ptz-user-repository)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/polutz/ptz-user-repository)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

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
    sudo docker build -t ptz-user-repository . 
    sudo docker run -d ptz-user-repository
    sudo docker exec YOUR_CONTAINER_NAME npm test
```