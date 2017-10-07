FROM nginx:latest

MAINTAINER Sasha Novik <alex@nvx.me>

COPY ./etc/nginx.conf /etc/nginx/nginx.conf

ADD ./dist/ /var/app/
