FROM node:23

WORKDIR /app

COPY back/package*.json ./

RUN npm install -g yarn --force

RUN yarn install

COPY back/ .
COPY back/.env ./

RUN npx prisma generate

EXPOSE 4000

CMD ["yarn", "run", "start"]
