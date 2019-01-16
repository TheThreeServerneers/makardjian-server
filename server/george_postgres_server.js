const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../db/george_postgres_dbHelpers.js');

const app = express();
const PORT = 4001;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join((__dirname, '/../client/dist'))));
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get('/products/:productId', db.getProducts);
