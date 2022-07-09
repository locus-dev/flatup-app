FROM node:16-alpine as build-step

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install --force

COPY . /app
EXPOSE 3000

CMD ["npm", "start"]