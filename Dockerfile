FROM node

LABEL MAINTAINER="omoogunolawale@gmail.com"

WORKDIR /usr/dockerize/prayers-connect

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
