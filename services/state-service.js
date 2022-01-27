const ModelState = require('../models/state-model');

class StateService {

    createState = async data => await ModelState.create(data);

    findStates = async filter => await ModelState.find(filter);

};

module.exports = new StateService();