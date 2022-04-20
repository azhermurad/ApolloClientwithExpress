const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
var cors = require("cors");

const app = express();

// Replace with your mongoLab URI
const MONGO_URI = "mongodb://localhost:27017/reactWithGrahql";
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.connect(MONGO_URI).then(()=>{
 console.log("database is connected")
}).catch(()=>{
  console.log("database is not connected")
})

app.use(bodyParser.json());
app.use(cors());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

// const webpackMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('../webpack.config.js');
// app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
