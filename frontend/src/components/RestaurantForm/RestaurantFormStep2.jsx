import React, { useState } from 'react';
import './RestaurantFormStep2.css'; // Import updated CSS

const categories = [
  'Chinese',
  'Italian',
  'Indian',
  'Desserts',
  'Juices'
];

const RestaurantFormStep2 = ({ formData, setFormData, nextStep, previousStep }) => {
  const [foodItems, setFoodItems] = useState(formData.menu || []);

  const handleFoodItemChange = (index, field, value) => {
    const updatedFoodItems = [...foodItems];
    updatedFoodItems[index] = { ...updatedFoodItems[index], [field]: value };
    setFoodItems(updatedFoodItems);
    setFormData({ ...formData, menu: updatedFoodItems });
  };

  const addFoodItem = () => {
    setFoodItems([...foodItems, { item: '', description: '', category: '', price: '' }]);
  };

  const removeFoodItem = (index) => {
    const updatedFoodItems = foodItems.filter((_, i) => i !== index);
    setFoodItems(updatedFoodItems);
    setFormData({ ...formData, menu: updatedFoodItems });
  };

  return (
    <div className="restaurant-form-step2">
      <h2>Add Food Items</h2>
      {foodItems.map((foodItem, index) => (
        <div key={index} className="food-item">
          <input
            type="text"
            placeholder="Food Item Name"
            value={foodItem.item}
            onChange={(e) => handleFoodItemChange(index, 'item', e.target.value)}
            required
          />
          <textarea
            placeholder="Food Description"
            value={foodItem.description}
            onChange={(e) => handleFoodItemChange(index, 'description', e.target.value)}
            required
          />
          <select
            value={foodItem.category}
            onChange={(e) => handleFoodItemChange(index, 'category', e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map((category, i) => (
              <option key={i} value={category}>{category}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Price"
            value={foodItem.price}
            onChange={(e) => handleFoodItemChange(index, 'price', e.target.value)}
            required
          />
          <button type="button" onClick={() => removeFoodItem(index)}>Remove Item</button>
        </div>
      ))}
      <button type="button" onClick={addFoodItem}>Add Another Food Item</button>
      <div className="navigation-buttons">
        <button type="button" onClick={previousStep}>Previous</button>
        <button type="button" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default RestaurantFormStep2;
