const { PORT, LOCAL_MONGODB_SINGLESET } = require('./config');
const http = require('http');
const { MongoClient } = require('mongodb');

const client = require('./database/connection')(LOCAL_MONGODB_SINGLESET);
const dbConnection = require('./database/runDbConnection');
const app = require('./config/server');

const server = http.createServer(app);

dbConnection(MongoClient)
  .then((result) => {
  console.log(result);
    server.listen(parseInt(PORT, 10), () => {
    console.log(`Server started on port ${PORT}`);
  })
}).catch(console.log)
.finally(() => client.close);

module.exports = server;
