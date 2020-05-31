# base image
FROM node:10.16.3-alpine as build

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV NODE_ENV production

# install and cache app dependencies
COPY package.json package.json
RUN npm install

# copy codes and build
COPY . .
RUN npm run build

# start app
# CMD ["npm", "run", "serve"]
# EXPOSE 5000

# coyp build to the web server.
FROM nginx:stable-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
