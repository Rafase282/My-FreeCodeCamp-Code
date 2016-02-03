'use strict';

module.exports = function(app) {
  app.route('/')
    .get(function(req, res) {
      res.render('index', {
        err: "Error: You need to add a proper action, see examples bellow."
      });
    });
};