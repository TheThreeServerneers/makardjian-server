const { Pool, Client } = require('pg');

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  database: 'product_overview',
});

module.exports = db;
