const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userId: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 200
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});
// some comment
module.exports = mongoose.model('user', UserSchema);