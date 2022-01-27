const Joi = require("@hapi/joi");
Joi.objectId = require('joi-objectid')(Joi);

class CityValidation {
    createCity = Joi.object({
        name: Joi.string().min(3).max(20).required(),
        stateId: Joi.objectId().required(),
        cost: Joi.number().min(1).max(5000).optional()
    });
}

module.exports = new CityValidation();