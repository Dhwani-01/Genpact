import mongoose from 'mongoose';

const foodItemSchema = new mongoose.Schema({
  item: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },  // Path to the image file
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true }
}, {
  timestamps: true
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

export default FoodItem;
