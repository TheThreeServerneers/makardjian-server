# Project Name

> Infinite Marketplace - Show Module

## Related Projects

  - https://github.com/Triforce-Engineering/esey-checkout-service
  - https://github.com/Triforce-Engineering/Reviews-Service

## Table of Contents

1. [SetUp Instructions](#Usage)
2. [Available Scripts](#requirements)
3. [Development](#development)

## SetUp Instructions

> Navigate to db/db.js to configure the mySql username and password to match your local machine
> From the root of the directory run the following commands:
  > 'npm run start' (starts a nodemon server on port 4000)
  > 'npm run seed-mongo' (creates a data.csv file with 10MM data points. Imports data into Mongo database)

## Available Scripts

```sh
npm start
```

Runs the app in the development mode.
Open http://localhost:4000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.


```sh
npm run build-csv
```
Runs the seeding script to create and populate a 10MM data point csv file in 'db/data.csv'.



The page will reload if you make edits.
You will also see any lint errors in the console.


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

