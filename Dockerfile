
FROM mhart/alpine-node:14.15.3 

WORKDIR /src
COPY . . 
RUN rm -rf node_modules && npm install

EXPOSE 3000 9229
