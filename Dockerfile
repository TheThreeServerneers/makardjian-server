FROM node:11.6-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 2000

CMD [ "npm", "run", "docker-start" ]