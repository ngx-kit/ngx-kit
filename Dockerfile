FROM node:latest

MAINTAINER Sasha Novik <alex@nvx.me>

ARG env

RUN npm install pm2 -g

RUN mkdir -p /var/app

WORKDIR /var/app

COPY ./dist/ dist/

EXPOSE 8000

CMD ["pm2-docker", "./dist/server.js", "--name='uni'"]
