const Joi = require('@hapi/joi');

class CountryValidation {

    createCountry = Joi.object({
        code: Joi.string().min(2).max(3).uppercase().required(),
        name: Joi.string().min(3).max(20).required(),
    });

}

module.exports = new CountryValidation();