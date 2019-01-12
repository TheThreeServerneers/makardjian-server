const fs = require('fs');
const faker = require('faker');
const path = require('path');
const dataHelpers = require('./george_dataHelpers.js');

const csvWriter = fs.createWriteStream(path.join(__dirname, '/data.csv'), { flags: 'w' });
let i = 1;
const total = 10;
let arr = ['id', 'product_title', 'vendor_name', 'review_average', 'review_count', 'answered_questions', 'list_price', 'price', 'prime'];
arr = arr.join('\t') + '\n';
csvWriter.write(arr);
const generateProducts = () => {
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
    obj.description = '"' + dataHelpers.descriptionGenerator() + '"';
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
  generateProducts();
});
generateProducts();

const secondWriter = fs.createWriteStream(path.join(__dirname, '/photos.csv'), { flags: 'w' });
let ii = 1;
let count = 0;
let thirdArr = ['id', 'main_photo', 'main_url', 'zoom_url', 'product_id'];
thirdArr = thirdArr.join('\t') + '\n';
secondWriter.write(thirdArr);
const generatePhotos = () => {
  while (ii < total - 1) {
    const product = dataHelpers.products[Math.floor(Math.random() * dataHelpers.products.length)];
    for (let j = 0; j < product.length; j++) {
      const photo = {};
      photo.photo_id = count + 1;
      photo.main_photo = j === 0;
      photo.main_url = product[j][0];
      photo.zoom_url = product[j][1];
      photo.product_id = ii;
      let fourthArr = [];
      for (var key in photo) {
        fourthArr.push(photo[key]);
      }
      fourthArr = fourthArr.join('\t');
      fourthArr += '\n';
      if (!secondWriter.write(fourthArr)) {
        return;
      }
      count++;
    }
    if (ii % 10000 === 0) {
      console.log(ii);
    }
    ii++;
  }
  secondWriter.end();
  console.log(count + ' products placed in photos file!');
};
secondWriter.on('drain', () => {
  generatePhotos();
});
generatePhotos();
