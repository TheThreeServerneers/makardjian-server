const mongoose = require('mongoose');
const redisClient = require('redis').createClient;

const redis = redisClient(6379, 'localhost');
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
  redis.get(req.params.productId, (err, reply) => {
    if (err) res.status(500);
    else if (reply) {
      res.json(reply);
    } else {
      Products.find({ id: req.params.productId })
        .then((data) => {
          redis.set(req.params.productId, JSON.stringify(data), () => {
            res.json(data);
          });
        })
        .catch(() => res.status(500));
    }
  });
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
