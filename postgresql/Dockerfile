  
FROM postgres:12.3-alpine

COPY *.pgsql /docker-entrypoint-initdb.d/

RUN chmod a+r /docker-entrypoint-initdb.d/