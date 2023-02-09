FROM node:16
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
EXPOSE 7100
CMD ["yarn", "prod"]