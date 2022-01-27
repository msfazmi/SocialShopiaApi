
const mongoose = require('mongoose');
const Schema = new mongoose.Schema;

const productSchema = new Schema({

});


module.exports = new mongoose.model('Product', productSchema, 'products');