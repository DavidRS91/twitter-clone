'use strict';

var clucksController = require('../controllers').clucks;

module.exports = function (app) {
  app.get('/api', function (req, res) {
    return res.status(200).send({
      message: 'Welcome to Cluckr!'
    });
  });

  app.post('/api/clucks', clucksController.create);
};