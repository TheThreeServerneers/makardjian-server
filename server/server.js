const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const newrelic = require('newrelic');
const db = require('./controllers/george_mongo_dbHelpers.js');

const app = express();
const PORT = 4000;

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/:productId', express.static(path.join(__dirname, './../client/dist/')));
app.use(express.static(path.join(__dirname, './../client/dist/')));
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get('/products/:productId', db.findProduct);
app.post('/products/', db.postProduct);
app.delete('/products/:productId', db.deleteProduct);
app.patch('/products/:productId', db.updateProduct);
