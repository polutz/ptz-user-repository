FROM angeloocana/alpine-nodejs-mongodb:0.3

#create app directory
ADD . /code
WORKDIR /code

#install app dependencies
RUN npm install -g ts-node ts-node babel-cli && \
    npm install --no-bin-links
#    && \
#    typings install dt~mocha --global

EXPOSE 3000

ENTRYPOINT ["mongod"]
