const app = require('./server/server');
const config = require('./server/server-config.json');

const port = (config && config.server && config.server.port) || 4000;


app.listen(port, () => {
  console.log('Listening');
});
