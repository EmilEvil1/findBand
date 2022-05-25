# Stage 1 - build process
FROM node:16.14.2 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - deploy on environment
FROM --platform=linux/arm64/v8 nginx:1.15.2-alpine
COPY --from=build-deps /usr/src/app/build /var/www
COPY config/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
ENTRYPOINT ["nginx","-g","daemon off;"]