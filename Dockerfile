FROM node:18.16.0-alpine

WORKDIR /srv/app

COPY ./package.json ./
COPY ./yarn.lock ./

ENV NODE_ENV production
RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
