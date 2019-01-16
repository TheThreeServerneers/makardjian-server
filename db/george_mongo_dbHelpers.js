const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product_overview');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('CONNECTED');
});

const productsSchema = mongoose.Schema({
  id: Number,
  product_title: String,
  vendor_name: String,
  review_average: Number,
  review_count: Number,
  answered_questions: Number,
  list_price: String,
  price: String,
  prime: Boolean,
  description: String,
  photo1: String,
  photo1_zoom: String,
  photo2: String,
  photo2_zoom: String,
  photo3: String,
  photo3_zoom: String,
  photo4: String,
  photo4_zoom: String,
  photo5: String,
  photo5_zoom: String,
});

const Products = mongoose.model('products', productsSchema);
const findProduct = (req, res) => {
  Products.find({ id: req.params.productId })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch(() => res.status(500));
};

module.exports = {
  findProduct,
};
