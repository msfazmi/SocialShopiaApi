const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    otp: {
        type: Number,
        required: true,
    },
    type: {
        type: Number,
        default: 1,
    }
}, {
    timestamps: true
});

module.exports = new mongoose.model('Otp', otpSchema, 'otps');