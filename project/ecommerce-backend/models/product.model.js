const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    productId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 2000
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
});
// some comment
module.exports = mongoose.model('product', ProductSchema);