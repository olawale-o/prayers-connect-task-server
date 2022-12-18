const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const handleError = require('../common/error-handler');

const corsOption = {
  origin: 'http://localhost:3000',
  credential: true
};

const app = express();
const swaggerOptions = require('../swagger-options');

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOption));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

app.use('/api/v1/task', require('../task/route'));

app.use(async (err, req, res, next) => {
  await handleError(err, res);
})

module.exports = app;
