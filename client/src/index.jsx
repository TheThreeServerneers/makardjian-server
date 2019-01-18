import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx'
require('newrelic');

var root1 = document.getElementById('product-overview');

ReactDOM.render(<App/>, root1)
