const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    }
});

module.exports = mongoose.model('User', userSchema);
