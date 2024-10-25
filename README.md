# MangementBackend

## Getting Started

Run `npm start` to get the server started locally. Once that is running, you can access the backend at [http://localhost:5200](http://localhost:5200) locally in your browser.

## DevContainer

If you don't already have node installed on your computer, consider using the [VS Code Dev Container](https://code.visualstudio.com/docs/devcontainers/containers).

## Environment

The program uses [dotenv](https://github.com/motdotla/dotenv) to load secrets.

## MongoDB

Check out [MongoDB Compass](https://www.mongodb.com/try/download/compass) for a GUI browser to view the database.

### Sample Data

To insert sample data into the database, run `npm run sample count` (`count` parameter is optional, default value is `10`). This will insert `count` entries into the database using [fakerjs](https://fakerjs.dev/guide/).
