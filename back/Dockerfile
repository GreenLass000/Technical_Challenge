FROM node:23

WORKDIR /app

COPY back/package*.json ./

RUN yarn install

COPY back/ .

RUN yarn prisma migrate deploy

EXPOSE 4000

CMD ["yarn", "start"]
