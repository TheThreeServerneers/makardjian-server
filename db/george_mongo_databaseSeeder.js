const faker = require('faker');
const path = require('path');
const dataHelpers = require('./george_dataHelpers.js');
const dbHelpers = require('../server/controllers/george_mongo_dbHelpers');

const generateProducts = async () => {
  let i = 2531301;
  const total = 1001;
  let count = 1;
  for (let g = 0; g < 8000; g++) {
    const products = [];
    while (count < total) {
      const obj = {};
      obj.id = i;
      obj.product_title = `${faker.commerce.productName()}, ${faker.lorem.sentence()}`.slice(0, -1);
      obj.vendor_name = faker.company.companyName();
      obj.review_average = dataHelpers.reviewAverageGenerator();
      obj.review_count = Math.round((Math.random() * 3000));
      obj.answered_questions = Math.round((Math.random() * 49) + 1);
      obj.list_price = faker.commerce.price(15.00, 5000, 2, '$').slice(1);
      obj.price = dataHelpers.discountGenerator(obj.list_price).slice(1);
      obj.prime = Math.round(Math.random()) === 0;
      obj.description = [];
      const numDescriptions = Math.ceil(Math.random() * 5);
      for (let p = 0; p < numDescriptions; p++) {
        obj.description.push('"' + dataHelpers.descriptionGenerator() + '"');
      }
      const product = dataHelpers.products[Math.floor(Math.random() * dataHelpers.products.length)];
      for (let j = 0; j < product.length; j++) {
        obj[`photo${j}`] = product[j][0];
        obj[`photo${j}_zoom`] = product[j][1];
      }
      products.push(obj);

      i++;
      count++;
      if (i % 10000 === 0) {
        console.log(i);
      }
    }
    await dbHelpers.Products.insertMany(products);
    count = 1;
  }
};

generateProducts();
