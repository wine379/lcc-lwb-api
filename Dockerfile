FROM node:12

RUN mkdir -p /app
WORKDIR /app

COPY package.json .

COPY . .

EXPOSE 4001

CMD ["npm", "start"]
