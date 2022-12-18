const config = require('././config');
const http = require('http');
const client = require('./database')(config.get('db.host'));
const dbConnection = require('./database/connection');
const app = require('./config/server');

const server = http.createServer(app);

dbConnection(client)
  .then((result) => {
      console.log(result);
      server.listen(parseInt(config.get('port'), 10), () => {
      console.log(`Server started on port ${config.get('port')}`);
    })
  })
 .catch(console.log)
 .finally(() => client.close());

module.exports = server;
