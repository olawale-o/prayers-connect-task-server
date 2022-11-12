const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOption = {
  origin: 'http://localhost:3000',
  credential: true
};

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOption));


app.use('/api/v1/task', require('../task/route'));

module.exports = app;
