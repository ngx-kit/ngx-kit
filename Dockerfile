FROM node:latest

MAINTAINER Sasha Novik <alex@nvx.me>

ARG env

RUN npm install pm2 -g

RUN mkdir -p /var/app

WORKDIR /var/app

COPY ./package.json package.json

RUN npm install --production

COPY ./dist/ dist/
COPY ./dist-server/ dist-server/
COPY ./server.js server.js

EXPOSE 8000

CMD ["pm2-docker", "server.js", "--name='uni'"]
