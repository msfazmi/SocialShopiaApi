const { string } = require("@hapi/joi");
const Joi = require("@hapi/joi");
Joi.objectId = require('joi-objectid')(Joi);

class StateValidation {

    createState = Joi.object({
        name: Joi.string().min(3).max(20).required(),
        countryId: Joi.objectId().required()
    });

}

module.exports = new StateValidation();