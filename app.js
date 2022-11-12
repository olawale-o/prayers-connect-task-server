const { PORT, LOCAL_MONGODB_SINGLESET } = require('./config');
const http = require('http');

const client = require('./database')(LOCAL_MONGODB_SINGLESET);
const dbConnection = require('./database/connection');
const app = require('./config/server');

const server = http.createServer(app);

dbConnection(client)
  .then((result) => {
      console.log(result);
      server.listen(parseInt(PORT, 10), () => {
      console.log(`Server started on port ${PORT}`);
    })
  })
 .catch(console.log)
 .finally(() => client.close());

module.exports = server;
