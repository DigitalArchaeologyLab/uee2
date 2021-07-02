FROM python:3.9-buster

WORKDIR /backend/

RUN pip install --upgrade pip
RUN pip install pipenv --no-cache-dir
COPY ./backend/Pipfile .
COPY ./backend/Pipfile.lock .
RUN pipenv install

CMD ["pipenv", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
