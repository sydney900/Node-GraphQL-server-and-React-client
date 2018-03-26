const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

if (!process.env.MONGODB_URL) {
  throw new Error('You must provide a MongoLab URI');
}

let url = process.env.MONGODB_URL;
mongoose.Promise = global.Promise;
mongoose.connect(url, { useMongoClient: true });
mongoose.connection
  .once('openUri', () => console.log('Connected to MongoDB instance.'))
  .on('error', error => {
    console.log('Error connecting to MongoDB:', error);
    setTimeout(() => {
      mongoose.connect(url, { useMongoClient: true });
    }, 1000);
  });

app.use(bodyParser.json());
//support CORS
app.use("/graphql", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

module.exports = app;
