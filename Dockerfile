FROM node:latest
COPY . .
RUN npm i
ENV NODE_ENV=docker
CMD ["node","app.js"]