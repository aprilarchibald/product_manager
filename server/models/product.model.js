const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required!"],
        minlength: [6, "{PATH} must be at least 6 characters long"]},
    price: {
        type: Number,
        required: [true, "Price is required!"], },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [10, "{PATH} must be at least 10 characters long"]}
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);

