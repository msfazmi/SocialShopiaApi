const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attributeSchema = new Schema({

    name: {
        type: String,
        minlength: 2,
        maxlength: 30,
        required: true,
        unique: true
    }

});

module.exports = new mongoose.model('Attribute', attributeSchema, 'attributes');