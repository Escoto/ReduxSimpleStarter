FROM node:latest

RUN npm install webpack -g

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
CMD ["npm", "start"]
EXPOSE 8080

#"start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
