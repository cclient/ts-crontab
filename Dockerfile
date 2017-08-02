FROM node:8.2-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install && npm cache verify
COPY . /usr/src/app
RUN npm run build
CMD ["npm","run","start"]