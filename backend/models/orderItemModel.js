// models/OrderModel.js

import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem', required: true },
    foodName: { type: String, required: true },
    foodPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
    payment: { type: String, required: true },
    dateOfOrdering: { type: Date, default: Date.now },
    // Additional fields from the form
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: String, required: true }
});

const OrderModel = mongoose.model('OrderItem', orderItemSchema);

export default OrderModel;
