const Promise = require('bluebird');
const db = require('../../db/george_db_config.js');

db.connect((err) => {
  if (err) {
    console.error(err.stack);
  } else {
    console.log('connected');
  }
});

const addPhoto = (photo, id, main) => {
  return new Promise((resolve, reject) => {
    const queryString = `INSERT INTO photos (main_url, zoom_url, product_id, main_photo) VALUES ('${photo[0]}', '${photo[1]}', ${id}, ${main})`;
    db.query(queryString, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const postProduct = (req, res) => {
  const product = req.body;
  return new Promise((resolve, reject) => {
    const queryString = `INSERT INTO products (product_title, vendor_name, review_average, review_count, answered_questions, list_price, price, prime, description) VALUES ('${product.product_title}', '${product.vendor_name}', ${product.review_average}, ${product.review_count}, ${product.answered_questions}, '${product.list_price}', '${product.price}', ${product.prime}, '${product.description}')  RETURNING id`;
    db.query(queryString, (err, data) => {
      if (err) {
        reject(res.send(500));
      } else {
        const promises = [];
        for (let i = 0; i < product.photos.length; i++) {
          promises.push(addPhoto(product.photos[i], data.rows[0].id, i === 0));
        }
        Promise.all(promises)
          .then(() => res.status(201).send())
          .catch(() => res.send(500));
      }
    });
  });
};

const findProduct = (req, res) => {
  const productID = req.params.productId;
  return new Promise((resolve, reject) => {
    const queryString = `SELECT * FROM products INNER JOIN photos ON products.id = photos.product_id WHERE id = ${productID}`;
    db.query(queryString, (err, data) => {
      if (err) {
        reject(res.send(500));
      } else {
        resolve(res.send(data));
      }
    });
  });
};

const deleteProduct = (req, res) => {
  const productID = req.params.productId;
  return new Promise((resolve, reject) => {
    const queryString = `DELETE FROM products WHERE id = ${productID}`;
    db.query(queryString, (err, data) => {
      if (err) {
        console.log(queryString);
        reject(res.sendStatus(500));
      } else {
        resolve(res.sendStatus(202));
      }
    });
  });
};

const updateProduct = (req, res) => {
  const product = req.body;
  return new Promise((resolve, reject) => {
    const queryString = `UPDATE products SET product_title = '${product.product_title}', vendor_name = '${product.vendor_name}', review_average = ${product.review_average}, review_count = ${product.review_count}, answered_questions = ${product.answered_questions}, list_price = '${product.list_price}', price = '${product.price}', description = '${product.description}' WHERE id=${req.params.productId}`;
    db.query(queryString, (err, data) => {
      if (err) {
        console.log(queryString);
        reject(res.sendStatus(500));
      } else {
        resolve(res.sendStatus(202));
      }
    });
  });
};


module.exports = {
  postProduct,
  findProduct,
  deleteProduct,
  updateProduct,
};
