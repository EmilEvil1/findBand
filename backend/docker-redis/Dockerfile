FROM redis
COPY ./redis.conf /usr/local/etc/redis/redis.conf
CMD [ "redis-server", "--port", "6379", "--bind", "redis", "--protected-mode", "no" ]