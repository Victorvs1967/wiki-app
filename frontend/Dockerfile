# docker/frontend/Dockerfile

FROM node:carbon

WORKDIR /app
COPY ./docker/frontend/package*.json ./
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH

ADD . /app/src
WORKDIR /app/src
RUN npm run build
CMD npm run start
