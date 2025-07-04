//creating a product model
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    special_price: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    remarks: { type: String, default: '' },
    brand: { type: String, required: true },
    shop: { type: String, required: true },
    shop_name: { type: String, required: true },
    product_code: { type: String, required: true, unique: true },
    stock: { type: Number, required: true, default: 0 },
    rating: { type: Number, default: 0 }

}, {
  timestamps: true  // Automatically manage createdAt and updatedAt fields
});
const Product = mongoose.model('products', productSchema);
module.exports = Product;