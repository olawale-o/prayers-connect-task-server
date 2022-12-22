const { MongoClient } = require('mongodb');

module.exports = function (uri) {
  return new MongoClient(uri);
};
