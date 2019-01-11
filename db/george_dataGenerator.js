const fs = require('fs');
const faker = require('faker');
const path = require('path');
const dataHelpers = require('./george_dataHelpers.js');
const dbHelpers = require('./george_dbHelpers.js');


const csvWriter = fs.createWriteStream(path.join(__dirname, '/data.csv'), { flags: 'w' });
let i = 1;
const total = 10000000;

const generateProducts = () => {
  while (i < total) {
    const obj = {};
    obj.product_title = `${faker.commerce.productName()}, ${faker.lorem.sentence()}`.slice(0, -1);
    obj.vendor_name = faker.company.companyName();
    obj.review_average = dataHelpers.reviewAverageGenerator();
    obj.review_count = Math.round((Math.random() * 3000));
    obj.answered_questions = Math.round((Math.random() * 49) + 1);
    obj.list_price = faker.commerce.price(15.00, 5000, 2, '$');
    obj.price = dataHelpers.discountGenerator(obj.list_price).toString();
    obj.prime = Math.round(Math.random()) === 0;
    obj.description = dataHelpers.descriptionGenerator();
    let arr = [];
    for (var key in obj) {
      arr.push(obj[key]);
    }
    arr = arr.join('~');
    arr += '\n';
    if (!csvWriter.write(arr)) {
      return;
    }
    i++;
    if (i % 10000 === 0) {
      console.log(i);
    }
  }
  console.log(total + ' products placed in products file!');
};

csvWriter.on('drain', () => {
  generateProducts();
});
generateProducts();

const secondWriter = fs.createWriteStream(path.join(__dirname, '/photos.csv'), { flags: 'w' });
let ii = 1;
let count = 0;
const generatePhotos = () => {
  while (ii < total) {
    const product = dataHelpers.products[Math.floor(Math.random() * dataHelpers.products.length)];
    for (let j = 0; j < product.length; j++) {
      const photo = { main_photo: false };
      if (j === 0) {
        photo.main_photo = true;
      }
      photo.main_url = product[j][0];
      photo.zoom_url = product[j][1];
      photo.product_id = ii;
      let arr = [];
      for (var key in photo) {
        arr.push(photo[key]);
      }
      arr = arr.join('~');
      arr += '\n';
      if (!secondWriter.write(arr)) {
        return;
      }
      count++;
    }
    if (ii % 10000 === 0) {
      console.log(ii);
    }
    ii++;
  }
  console.log(count + ' products placed in photos file!');
};
secondWriter.on('drain', () => {
  generatePhotos();
});
generatePhotos();
