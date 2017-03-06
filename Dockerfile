FROM angeloocana/alpine-nodejs-mongodb:0.3

#create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#install app dependencies
COPY package.json /usr/src/app/
RUN npm install -g ts-node typescript-node babel-cli && \
    npm install 
#    && \
#    typings install dt~mocha --global

COPY . /usr/src/app

EXPOSE 3000

ENTRYPOINT ["mongod"]
