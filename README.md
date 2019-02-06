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

```sh
npm run build-csv
```
Runs the seeding script to create and populate a 10MM data point csv file in 'db/data.csv'.

```sh
npm run populate-mongo-products
```
Imports the data.csv file into a Mongo collection titled 'Products'

```sh
npm run seed-mongo
```
Runs the two previous scripts (build-csv and populate-mongo-products) to create a csv file and populate to Mongo database

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

