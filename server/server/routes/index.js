const clucksController = require('../controllers').clucks;
const Cluck = require('../models')

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Cluckr!',
  }));

  app.post('/api/clucks', clucksController.create);
};