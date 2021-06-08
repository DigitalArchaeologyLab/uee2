FROM python:3.9-buster

WORKDIR /app/backend/

RUN pip install --upgrade pip
RUN pip install pipenv
COPY ./Pipfile /app/backend/
COPY ./Pipfile.lock /app/backend/
RUN pipenv install
RUN pipenv install gunicorn

COPY ./docker /app/docker
COPY ./backend /app/backend

RUN chmod +x /app/docker/backend/wsgi-entrypoint.sh

ENTRYPOINT /app/docker/backend/wsgi-entrypoint.sh
