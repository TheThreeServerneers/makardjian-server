const { Pool, Client } = require('pg');
const Promise = require('bluebird');
const db = require('./db_config.js');

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
    db.query(queryString, (err, res) => {
      if (err) {
        console.log(queryString);
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const addPhoto = (photo) => {
  return new Promise((resolve, reject) => {
    const queryString = `INSERT INTO photos (main_url, zoom_url, product_id, main_photo) VALUES ('${photo.main_url}', '${photo.zoom_url}', ${photo.product_id}, ${photo.main_photo})`;
    db.query(queryString, (err, res) => {
      if (err) {
        console.log(queryString);
        console.log(err);
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const getProducts = (productID) => {
  return new Promise((resolve, reject) => {
    const queryString = `SELECT * FROM products WHERE productID = ${productID}`;
    const params = [productID];
    db.query(queryString, params, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const deleteProducts = (productID) => {
  return new Promise((resolve, reject) => {
    db.query(`DELETE FROM products WHERE productID = ${productID}`, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const updateProduct = (product, productID) => {
  return new Promise((resolve, reject) => {
    db.query(`UPDATE products SET product_title=${product.product_title}, vendor_name=${product.vendor_name}, review_average=${product.review_average}, review_count = ${product.review_count}, answered_questions = ${product.answered_questions}, list_price = ${product.list_price}, price = ${product.price}, description = ${product.description} WHERE productID=${productID}`, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};


module.exports = {
  addProduct,
  getProducts,
  addPhoto,
  deleteProducts,
  updateProduct,
};
