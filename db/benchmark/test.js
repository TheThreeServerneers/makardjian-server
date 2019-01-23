const axios = require('axios');


// Logs the Read average time for querying the server with a certain # of requests.
const ReadDB = async (dbName, port) => {
  let sum = 0;
  const get1To10M = () => Math.floor(Math.random() * 9900000);
  for (let i = 0; i < iterations; i++) {
    const now = Date.now();
    const location = `http://localhost:${port}/products/${get1To10M()}`;
    await axios.get(location);
    const later = Date.now();
    sum += later - now;
  }
  console.log(`${dbName} ${iterations} READs avg: `, sum / iterations, 'ms');
};

// // Log READ averages for both dbs and log the results

// ReadDB('Mongo', 4000);
// ReadDB('Postgres', 4001);

const iterations = 10;
// Logs a Post (insertion) average time for sample restaurants.
const postDB = async (dbName, port) => {
  let sum = 0;
  for (let i = 0; i < iterations; i += 1) {
    const now = Date.now();
    if (dbName === 'Mongo') {
      await axios.post(`http://localhost:${port}/products/`, {
        product_title: `Kevins Shoes`,
        vendor_name: `Kevin and Company`,
        review_average: 2,
        review_count: 2342,
        answered_questions: 123132,
        list_price: '12.23',
        price: '10.23',
        prime: true,
        description: "Yes they are new",
        photo1: 'https://images-na.ssl-images-amazon.com/images/I/81408zrlEZL._UX625_.jpg',
        photo1_zoom: 'https://images-na.ssl-images-amazon.com/images/I/81408zrlEZL._UX1000_.jpg',
        photo2: 'https://images-na.ssl-images-amazon.com/images/I/81e77hshBkL._UY500_.jpg',
        photo2_zoom: 'https://images-na.ssl-images-amazon.com/images/I/81e77hshBkL._UY825_.jpg',
        photo3: 'https://images-na.ssl-images-amazon.com/images/I/71Zb7tk4PgL._UY535_.jpg',
        photo3_zoom: 'https://images-na.ssl-images-amazon.com/images/I/71Zb7tk4PgL._UY825_.jpg',
        photo4: 'https://images-na.ssl-images-amazon.com/images/I/71LC-ThHZ4L._UX395_.jpg',
        photo4_zoom: 'https://images-na.ssl-images-amazon.com/images/I/71LC-ThHZ4L._UX625_.jpg',
        photo5: 'https://images-na.ssl-images-amazon.com/images/I/816y2bcAJWL._UX395_.jpg',
        photo5_zoom: 'https://images-na.ssl-images-amazon.com/images/I/816y2bcAJWL._UX625_.jpg',
      });
    } else {
      await axios.post(`http://localhost:${port}/products/`, {
        product_title: `Kevins Shoes`,
        vendor_name: `Kevin and Company`,
        review_average: 2,
        review_count: 2342,
        answered_questions: 123132,
        list_price: '12.23',
        price: '10.23',
        prime: true,
        description: "Yes they are new",
        photos: [['https://images-na.ssl-images-amazon.com/images/I/81408zrlEZL._UX625_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81408zrlEZL._UX1000_.jpg'],
        ['https://images-na.ssl-images-amazon.com/images/I/81e77hshBkL._UY500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81e77hshBkL._UY825_.jpg'],
        ['https://images-na.ssl-images-amazon.com/images/I/71Zb7tk4PgL._UY535_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71Zb7tk4PgL._UY825_.jpg'],
        ['https://images-na.ssl-images-amazon.com/images/I/71LC-ThHZ4L._UX395_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71LC-ThHZ4L._UX625_.jpg'],
        ['https://images-na.ssl-images-amazon.com/images/I/816y2bcAJWL._UX395_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/816y2bcAJWL._UX625_.jpg']]
      });
    }
    const later = Date.now();
    sum += later - now;
  }
  console.log(`${dbName} ${iterations} POSTs avg: `, sum / iterations, 'ms');
};

// Log POST averages for both dbs and log the results
// postDB('Postgres', 4001);
postDB('Mongo', 4000);

const deleteDB = async (dbName, port) => {
  let sum = 0;
  const get1To10M = () => Math.floor(Math.random() * 9900000);
  for (let i = 0; i < iterations; i++) {
    const now = Date.now();
    const location = `http://localhost:${port}/products/${get1To10M()}`;
    await axios.delete(location);
    const later = Date.now();
    sum += later - now;
  }
  console.log(`${dbName} ${iterations} DELETEs avg: `, sum / iterations, 'ms');
};

// deleteDB('Postgres', 4001);
// deleteDB('Mongo', 4000);


const updateDB = async (dbName, port) => {
  let sum = 0;
  const get1To10M = () => Math.floor(Math.random() * 9900000);
  for (let i = 0; i < iterations; i += 1) {
    const now = Date.now();
    await axios.patch(`http://localhost:${port}/products/${get1To10M()}`, {
      product_title: `Lukes Shoes`,
      vendor_name: `Luke and Company`,
      review_average: 5,
      review_count: 212,
      answered_questions: 132,
      list_price: '124123.23',
      price: '112133.23',
      prime: true,
      description: "Even more dope shoes!!!",
      photos: [['https://images-na.ssl-images-amazon.com/images/I/81408zrlEZL._UX625_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81408zrlEZL._UX1000_.jpg'],
      ['https://images-na.ssl-images-amazon.com/images/I/81e77hshBkL._UY500_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81e77hshBkL._UY825_.jpg'],
      ['https://images-na.ssl-images-amazon.com/images/I/71Zb7tk4PgL._UY535_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71Zb7tk4PgL._UY825_.jpg'],
      ['https://images-na.ssl-images-amazon.com/images/I/71LC-ThHZ4L._UX395_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/71LC-ThHZ4L._UX625_.jpg'],
      ['https://images-na.ssl-images-amazon.com/images/I/816y2bcAJWL._UX395_.jpg', 'https://images-na.ssl-images-amazon.com/images/I/816y2bcAJWL._UX625_.jpg']]
    });
    const later = Date.now();
    sum += later - now;
  }
  console.log(`${dbName} ${iterations} UPDATEs avg: `, sum / iterations, 'ms');
};

// updateDB('Postgres', 4001);
// updateDB('Mongo', 4000);
