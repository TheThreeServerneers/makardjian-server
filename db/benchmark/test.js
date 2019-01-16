const axios = require('axios');

const iterations = 100;

// Helper to get random number from 1-10M
const get1To10M = () => Math.floor(Math.random() * 9900000);

// Logs the Read average time for querying the server with a certain # of requests.
const ReadDB = async (dbName, port) => {
  let sum = 0;
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

ReadDB('Mongo', 4000);
ReadDB('Postgres', 4001);


// Logs a Post (insertion) average time for sample restaurants.
// const getPostAverage = async (dbName, port) => {
//   let sum = 0;
    
//   for (let i = 0; i < iterations; i += 1) {
//     let now = Date.now();
//     await axios.post(`http://localhost:${port}/restaurants/`, {
//       accuracy: 85,
//       address: 'TEST ADDRESS',
//       delivery: 92,
//       name: 'TEST NAME',
//       number: 'TEST NUMBER 555-555',
//       picture: 'http://TEST.TEST.TEST',
//       quality: 36,
//       stars: 3,
//     });
//     let later = Date.now();
//     sum += later - now;
//   }

//   console.log(`${dbName} ${iterations} POSTs avg: `, sum / iterations, 'ms');
// };

// // Log POST averages for both dbs and log the results
// getPostAverage('PostgreSQL', 3001);
// getPostAverage('Cassandra', 4000);