const debug = require('debug')('app:controllers:healthyCheck');

const HealthyCheckController = {

  index: (req, res) => {
    debug('executing index action');

    res.status(200).send('Application is running');
  },

};

module.exports = HealthyCheckController;
