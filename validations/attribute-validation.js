const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

class AttributeValidation {

    createAttribute = Joi.object({
        name: Joi.string().min(2).max(30).required()
    });


    updateAttribute = Joi.object({
        id: Joi.objectId().required(),
        name: Joi.string().min(2).max(30),
    });

    deleteAttribute = Joi.object({
        id: Joi.objectId().required(),
    });


}

module.exports = new AttributeValidation();