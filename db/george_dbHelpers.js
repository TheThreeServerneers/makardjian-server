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

const addProduct = (obj) => {
  return new Promise((resolve, reject) => {
    const queryString = `INSERT INTO products (product_title, vendor_name, review_average, review_count, answered_questions, list_price, price, prime, description) VALUES ('${obj.product_title}', '${obj.vendor_name}', ${obj.review_average}, ${obj.review_count}, ${obj.answered_questions}, '${obj.list_price}', '${obj.price}', ${obj.prime}, '${obj.description}')`;
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
    const queryString = 'SELECT * FROM products WHERE productID = ?';
    const params = [productID];
    db.client.query(queryString, params, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const deleteReservation = (partySize, dateToReserve, timeToReserve) => {
	return new Prmise((resolve, reject) => {
		client.query(`DELETE FROM reservations WHERE reservation.partySize = ${partySize} AND reservation.dateToReserve = ${dateToReserve} AND reservation.timeToReserve = ${timeToReserve}`, (err, res) => {
			if (err) {
				reject(err);
			} else {
				resolve(res);
			}
		})
	})
}

const updateReservation = (reservationID, dateToReserve, timeToReserve, partySize) => {
	return new Promise((resolve, reject) => {
		client.query(`UPDATE reservations SET dateToReserve=${dateToReserve}, timeToReserve=${timeToReserve}, partySize=${partySize} WHERE id=${reservationID}`, (err, res) => {
			if (err) {
				reject(err);
			} else {
				resolve(res);
			}
		})
	})
}


module.exports = {
	addProduct,
  getProducts,
  addPhoto,
}