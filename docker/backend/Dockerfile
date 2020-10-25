FROM node:10-alpine

RUN mkdir -p /home/backend-theos
RUN chown -R node:node /home/backend-theos

WORKDIR /home/backend-theos

COPY ./backend/package.json .
COPY ./backend/package-lock.json .
COPY ./backend/src .

USER node

RUN npm install

EXPOSE 8000

CMD npm start
