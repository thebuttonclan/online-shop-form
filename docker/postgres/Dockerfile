FROM postgres:11.6-alpine

COPY . /

RUN set -eux; \
    addgroup -g 1001 -S osf; \
    adduser -u 1001 -D -S -G osf osf;

USER osf

CMD [ "bash", "-c", "./setup.sh" ]
