FROM node:latest

MAINTAINER Sasha Novik <alex@nvx.me>

ARG env

RUN npm install pm2 -g

RUN mkdir -p /var/app

WORKDIR /var/app

COPY ./package.json package.json
COPY ./node_modules/ node_modules/
COPY ./dist/ dist/
COPY ./dist-server/ dist-server/
COPY ./website/server.js ./website/server.js

EXPOSE 8000

CMD ["pm2-docker", "./website/server.js", "--name='uni'"]
