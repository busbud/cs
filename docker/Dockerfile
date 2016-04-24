FROM debian:jessie

RUN apt-get update
RUN apt-get -y install lib32gcc1 curl

RUN adduser --disabled-password steam
USER steam
WORKDIR /home/steam

ENV PATH /home/steam/bin:/usr/bin:/bin
