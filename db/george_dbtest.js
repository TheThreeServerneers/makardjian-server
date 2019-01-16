const db = require('./george_mongo_dbHelpers.js');

db.getProducts(2);
const product = {
  product_title: 'Headphones',
  vendor_name: 'Beats',
  review_average: 2.0,
  review_count: 1342,
  answered_questions: 123,
  list_price: '12.24',
  price: '10.22',
  prime: true,
  description: 'worthless headphones that kinda suck',
};
db.addProduct(product);
db.deleteProduct(2);
db.updateProduct(product, 3);
