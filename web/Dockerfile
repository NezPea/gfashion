# base image
FROM node:10.16.3-alpine

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV NODE_ENV production

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

# copy codes and build
COPY . /usr/src/app/
RUN npm run build

# start app
CMD ["npm", "run", "serve"]
EXPOSE 5000
