FROM node:20-alpine3.19

WORKDIR /athena

COPY ./package.json ./package.json

RUN apk add --no-cache --virtual .build-deps \
        build-base \
	g++ \
	cairo-dev \
	jpeg-dev \
	pango-dev \
	giflib-dev \
    && apk add --no-cache --virtual .runtime-deps \
        cairo \
	jpeg \
	pango \
	giflib

RUN yarn install && yarn cache clean

COPY . .

RUN yarn build && yarn cache clean

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]