import mongoose from "mongoose";
const foodSchema = new mongoose.Schema({
  name: { type: String},
  description: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String },
  category: { type: String, required: true },
});
//to avoid double creation of model
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
export  {foodModel , foodSchema};
