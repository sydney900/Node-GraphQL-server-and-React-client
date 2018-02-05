const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const config = require('./server-config.json');

const app = express();

if (!config || !config.mongodb || !config.mongodb.url) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.url, { useMongoClient: true });
mongoose.connection
    .once('openUri', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => {
      console.log('Error connecting to MongoLab:', error);
      setTimeout(() => {
        mongoose.connect(config.mongodb.url, { useMongoClient: true });
      }, 1000);
    });

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
