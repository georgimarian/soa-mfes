FROM node:alpine
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 5002
CMD ["yarn", "start"]