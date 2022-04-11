FROM nginx:1.15.2-alpine
COPY ./build /var/www
COPY nginx.conf /config/default.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]