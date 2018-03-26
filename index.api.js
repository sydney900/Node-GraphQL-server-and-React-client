const app = require('./server/server.api.docker');

app.listen(process.env.WEB_PORT || 80, () => {
  console.log('Listening');
});
