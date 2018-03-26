const app = require('./server.web.docker.js');

app.listen(process.env.WEB_PORT || 80, () => {
  console.log('Listening');
});
