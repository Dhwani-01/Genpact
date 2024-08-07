import mongoose from "mongoose";
import {foodSchema} from './foodModel.js'; 

const restaurantSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  pincode: String,
  cuisine: String,
  menu: [foodSchema],
  openingTime: String,
  closingTime: String,
  deliveryAreas: [String],
  deliveryTime: String,
  logo: String,
  images: [String],
  website: String,
  paymentMethods: String,
  specialInstructions: String,
  averagePrice: Number,
  rating: Number,
  capacity: Number,
});

const restaurantModel = mongoose.models.restaurant ||mongoose.model('restaurant', restaurantSchema);

export default restaurantModel;