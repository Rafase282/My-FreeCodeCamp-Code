'use strict';

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var routes = require('./app/routes/index.js');
var api = require('./app/api/file-meta.js');
var log = require('npmlog');
require('dotenv').config({
  silent: true
});

var app = express();

var fileSchema = new Schema({
  name: String,
  size: Number,
  date: String
});

var File = mongoose.model('File', fileSchema);
var mongouri = process.env.MONGOLAB_URI || "mongodb://" + process.env.IP + ":27017/file-meta";
mongoose.connect(mongouri);

 // The format follows as, alias to use for real path, also allows permission to such path.

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  routes(app);
  api(app, File);

  var port = process.env.PORT || 8080;
  app.listen(port, function() {
    log.info('Express', 'Listening on port %s', port);
  });