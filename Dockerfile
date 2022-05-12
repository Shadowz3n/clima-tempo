FROM node:current-alpine3.14 AS development

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@8.10.0
RUN npm install glob rimraf
RUN npm install
COPY . .
RUN npm run build