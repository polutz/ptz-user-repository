FROM angeloocana/alpine-nodejs-mongodb:0.3

#create app directory
ADD . /code
WORKDIR /code

#install app dependencies
RUN npm install -g ts-node && \
        npm install

# if you are using npm link use --no-bin-links to test, but do NOT commit it, travis falls on error
# npm install --no-bin-links


EXPOSE 3000

ENTRYPOINT ["mongod"]
