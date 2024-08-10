import mongoose from "mongoose";
// import { foodSchema } from './foodModel.js'; 

const restaurantSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  pincode: String,
  // menu: [foodSchema],
  openingTime: String,
  closingTime: String,
  deliveryAreas: [String],
  logo: String,
  image_res: String, // Updated to image_res
  website: String,
  paymentMethods: String,
  specialInstructions: String,
  averagePrice: Number,
  rating: Number,
  capacity: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const restaurantModel = mongoose.models.restaurant || mongoose.model('restaurant', restaurantSchema);

export default restaurantModel;
