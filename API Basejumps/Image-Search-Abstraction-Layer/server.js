'use strict';

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var routes = require('./app/routes/index.js');
var api = require('./app/api/img-sal.js');
require('dotenv').config({
  silent: true
});
var app = express();

var historySchema = new Schema({
  term: String,
  when: String
});

var History = mongoose.model('History', historySchema);
var mongouri = process.env.MONGOLAB_URI || "mongodb://" + process.env.IP + ":27017/img-sal";
mongoose.connect(mongouri);
//mongo.MongoClient.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/img-sal', function(err, db) {

 // The format follows as, alias to use for real path, also allows permission to such path.

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  routes(app);
  api(app, History);

  var port = process.env.PORT || 8080;
  app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
  });