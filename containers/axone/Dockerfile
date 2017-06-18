FROM ubuntu:14.04

RUN apt-get update; apt-get install -y apt-transport-https; echo deb https://deb.nodesource.com/node_4.x trusty main >> /etc/apt/sources.list
RUN apt-get update; apt-get install -y --force-yes nodejs git ssh-client python make g++ libkrb5-dev git wget

RUN npm cache clean -f; npm install -g n; n stable

RUN mkdir -p /root/app/server

COPY ./root/app/server/package.json /root/app/server
RUN cd /root/app/server; npm update;

RUN cd /root/app;

COPY . /

RUN chmod +x /run_app.sh

ENV HOSTNAME=app
ENV PROJECT=ecoluiton
EXPOSE 8100

CMD /run_app.sh
