const fs = require('fs');
const faker = require('faker');
const path = require('path');
const dataHelpers = require('./george_dataHelpers.js');
const dbHelpers = require('../server/controllers/george_mongo_dbHelpers');
const axios = require('axios');

const csvWriter = fs.createWriteStream(path.join(__dirname, '/data.csv'), { flags: 'w' });
let i = 1;
const total = 100;
let arr = ['id', 'product_title', 'vendor_name', 'review_average', 'review_count', 'answered_questions', 'list_price', 'price', 'prime', 'description', 'photo1', 'photo1_zoom', 'photo2', 'photo2_zoom', 'photo3', 'photo3_zoom', 'photo4', 'photo4_zoom', 'photo5', 'photo5_zoom'];
arr = arr.join('\t') + '\n';
csvWriter.write(arr);
const generateProducts = async () => {
  while (i < total) {
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
    obj.description = obj.description.join('~');
    const product = dataHelpers.products[Math.floor(Math.random() * dataHelpers.products.length)];
    for (let j = 0; j < product.length; j++) {
      obj[`photo${j}`] = product[j][0];
      obj[`photo${j}_zoom`] = product[j][1];
    }

    let newArr = [];
    for (var key in obj) {
      newArr.push(obj[key]);
    }
    newArr = newArr.join('\t');
    newArr += '\n';
    if (!csvWriter.write(newArr)) {
      return;
    }
    i++;
    if (i % 10000 === 0) {
      console.log(i);
    }
  }
  csvWriter.end();
  console.log(total + ' products placed in products file!');
};

csvWriter.on('drain', () => {
  i++;
  generateProducts();
});
generateProducts();
