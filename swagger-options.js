const swaggerDefinition = require('./swagger-definition');

module.exports = {
  swaggerDefinition,
  apis: [
    './task/route.js',
  ],
};
