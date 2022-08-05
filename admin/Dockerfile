FROM node:16-alpine as build-step

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install --force

COPY . /app
EXPOSE 3000

<<<<<<< HEAD
CMD ["npm", "start"]
=======
CMD ["npm", "start"]
>>>>>>> 9ae91c0555a6dbd048875dfe2b216e517969de48
