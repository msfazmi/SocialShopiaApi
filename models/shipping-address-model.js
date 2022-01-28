const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shippingAddressSchema = new Schema({

});


module.exports = new mongoose.model('ShippingAddress', shippingAddressSchema, 'shipping_addresses');