const debug = require('debug')('app:controllers:index');
const IndexService = require('../services/index');

const IndexController = {

  index: async (req, res) => {
    debug('executing index action');

    const example = await IndexService.example();
    res.status(200).send(example);
  },

};

module.exports = IndexController;
