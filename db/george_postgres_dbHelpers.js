const Promise = require('bluebird');
const db = require('./george_db_config.js');

db.connect((err) => {
  if (err) {
    console.error(err.stack);
  } else {
    console.log('connected');
  }
});

const addProduct = (product) => {
  return new Promise((resolve, reject) => {
    const queryString = `INSERT INTO products (product_title, vendor_name, review_average, review_count, answered_questions, list_price, price, prime, description) VALUES ('${product.product_title}', '${product.vendor_name}', ${product.review_average}, ${product.review_count}, ${product.answered_questions}, '${product.list_price}', '${product.price}', ${product.prime}, '${product.description}')`;
    db.query(queryString, (err, data) => {
      if (err) {
        console.log(queryString);
        reject(err);
      } else {
        console.log(data);
        resolve(data);
      }
    });
  });
};

const addPhoto = (photo) => {
  return new Promise((resolve, reject) => {
    const queryString = `INSERT INTO photos (main_url, zoom_url, product_id, main_photo) VALUES ('${photo.main_url}', '${photo.zoom_url}', ${photo.product_id}, ${photo.main_photo})`;
    db.query(queryString, (err, res) => {
      if (err) {
        console.log(err);
        reject(res.statusCode(500).send());
      } else {
        resolve(res.statusCode(201).send());
      }
    });
  });
};

const getProducts = (req, res) => {
  const productID = req.params.productId;
  return new Promise((resolve, reject) => {
    const queryString = `SELECT * FROM products INNER JOIN photos ON products.id = photos.product_id WHERE id = ${productID}`;
    db.query(queryString, (err, data) => {
      if (err) {
        console.log(queryString);
        reject(res.send(500));
      } else {
        console.log(data.rows);
        resolve(res.send(data));
      }
    });
  });
};

const deleteProduct = (productID) => {
  return new Promise((resolve, reject) => {
    const queryString = `DELETE FROM products WHERE id = ${productID}`;
    db.query(queryString, (err, data) => {
      if (err) {
        console.log(queryString);
        reject(err);
      } else {
        console.log(data);
        resolve(data);
      }
    });
  });
};

const updateProduct = (product, productID) => {
  return new Promise((resolve, reject) => {
    const queryString = `UPDATE products SET product_title = '${product.product_title}', vendor_name = '${product.vendor_name}', review_average = ${product.review_average}, review_count = ${product.review_count}, answered_questions = ${product.answered_questions}, list_price = '${product.list_price}', price = '${product.price}', description = '${product.description}' WHERE id=${productID}`;
    db.query(queryString, (err, data) => {
      if (err) {
        console.log(queryString);
        reject(err);
      } else {
        console.log(data.rows);
        resolve(data);
      }
    });
  });
};


module.exports = {
  addProduct,
  getProducts,
  addPhoto,
  deleteProduct,
  updateProduct,
};
