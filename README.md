# Lireddit Server

## How to run this stuff
```shell
# First start up your database, I'm doing this with docker 🐳
docker run --name postgresql -p 5432:5432 -e POSTGRES_PASSWORD=default-1234 -e POSTGRES_DB=lireddit  -d postgres

# Second compile our RS code
yarn watch

# Then start nodemon for dev flow
yarn dev
````
