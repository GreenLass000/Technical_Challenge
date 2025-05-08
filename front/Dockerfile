FROM node:23

WORKDIR /app

COPY front/package*.json ./

RUN npm install

COPY front/ .

EXPOSE 3000

RUN npm run build

RUN npm install -g serve --force

CMD ["serve", "-s", "dist", "-p", "3000"]
