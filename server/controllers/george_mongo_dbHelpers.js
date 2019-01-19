const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product_overview', { poolSize: 10, useNewUrlParser: true });

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
  console.log('here');
  Products.find({ id: req.params.productId })
    .then((data) => {
      res.json(data);
    })
    .catch(() => res.status(500));
};

const postProduct = (req, res) => {
  Products.find().sort({ id: -1 }).limit(1)
    .then((data) => {
      const product = req.body;
      product.id = data[0].id + 1;
      Products.create(product)
        .then(() => {
          res.status(201).send();
        })
        .catch(() => res.send(500));
    })
    .catch(() => res.send(500));
};

const deleteProduct = (req, res) => {
  Products.deleteOne({ id: req.params.productId })
    .then(() => {
      res.sendStatus(202);
    })
    .catch(() => res.sendStatus(500));
};

const updateProduct = (req, res) => {
  const product = req.body;
  for (let i = 0; i < product.photos.length; i++) {
    product[`photo${i + 1}`] = product.photos[i][0];
    product[`photo${i + 1}_zoom`] = product.photos[i][1];
  }
  Products.update({ id: req.params.productId }, product)
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(500));
};

module.exports = {
  findProduct,
  postProduct,
  deleteProduct,
  updateProduct,
};
