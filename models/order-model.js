const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    shippingId: {
        type: Schema.Types.ObjectId,
        ref: 'ShippingAddress',
        required: true,
    },
    paymentType: {

    }

});


module.exports = new mongoose.model('Order', orderSchema, 'orders');