# Project Name

> SDC Amazon Project

## Related Projects

  - https://github.com/ChampsOfTheSun/reviews-service
  - https://github.com/ChampsOfTheSun/vrtobar-service
  - https://github.com/ChampsOfTheSun/jhods16-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## SetUp Instructions

> Navigate to db/db.js to configure the mySql username and password to match your local machine
> From the root of the directory run the following commands:
  > 'npm run start' (starts a nodemon server on port 3004)
  > 'npm run schema' 
    >Enter your own mySql password when prompted
  > 'npm run seed-products' (seeds the products table)
  > 'npm run seed-photos' (seeds the photos table)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### CRUD API's
Create: 
> app.post(/photos/:productId)

> app.post(/products/:productId)

> --> Sample

> const addProduct = (obj) => {
>   return new Promise((resolve, reject) => {
>     const queryString = `INSERT INTO products (product_title, vendor_name, review_average, review_count, answered_questions, list_price, price, prime, description) VALUES ('${obj.product_title}', '${obj.vendor_name}', ${obj.review_average}, ${obj.review_count}, ${obj.answered_questions}, '${obj.list_price}', '${obj.price}', ${obj.prime}, '${obj.description}')`;
>     db.query(queryString, (err, res) => {
>       if (err) {
>         console.log(queryString);
>         console.log(err);
>         reject(err);
>       } else {
>         resolve(res);
>       }
>     });
>   });
> };

Read: 
 > app.get(/photos/:productId)
 > app.get(/products/:productId)

Update: 
 > app.put(/photos/:productId)
 > app.put(/products/:productId)

Delete:
 > app.delete(/photos/:productId)
 > app.delete(/products/:productId)
