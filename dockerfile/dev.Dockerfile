FROM node:18-alpine AS build

WORKDIR /app

RUN apk --no-cache add openssh g++ make python3 git

COPY package.json /app/
COPY package-lock.json /app/

RUN npm ci && npm cache clean --force

ADD . /app

RUN npm run build

FROM node:18-alpine 

WORKDIR /app

COPY --from=build /app/.output /app

ENV HOST 0.0.0.0
EXPOSE 8001

ENTRYPOINT [ "node","server/index.mjs" ]