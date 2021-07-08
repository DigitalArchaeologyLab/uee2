#!/bin/bash

until pipenv run python manage.py migrate; do
    echo "Waiting for db to be ready..."
    sleep 2
done

pipenv run gunicorn uee.wsgi --bind 0.0.0.0:8000 --workers 4 --threads 4