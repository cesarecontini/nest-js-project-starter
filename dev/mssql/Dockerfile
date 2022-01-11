FROM mcr.microsoft.com/mssql/server:2019-latest
ENV TZ=Europe/Zurich
USER root
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
USER mssql
COPY setup.sql setup.sql
COPY setup_database.sh setup_database.sh
COPY entrypoint.sh entrypoint.sh
USER root
RUN chmod a+x ./setup_database.sh && chmod a+x ./entrypoint.sh && chmod a+x ./setup.sql

CMD /bin/bash ./entrypoint.sh