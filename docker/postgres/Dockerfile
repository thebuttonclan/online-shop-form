FROM postgres:11.6-alpine

COPY . /

RUN set -eux; \
    addgroup -g 1001 -S rootadmin; \
    adduser -u 1001 -D -S -G rootadmin rootadmin;

USER rootadmin

CMD [ "bash", "-c", "./setup.sh" ]
