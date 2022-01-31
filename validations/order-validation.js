const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

class OrderValidation {

    createOrder = Joi.object({
        addressId: Joi.objectId().required(),
        paymentMethodId: Joi.objectId().required(),
        note: Joi.string().max(1000),
        type: Joi.string().valid('size', 'color').required(),
    });


    updateOrder = Joi.object({
        id: Joi.objectId().required(),
        name: Joi.string().min(2).max(30),
        type: Joi.string().valid('size', 'color')
    });

}

module.exports = new OrderValidation();