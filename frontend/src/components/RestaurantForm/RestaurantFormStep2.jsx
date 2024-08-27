// import React, { useState } from 'react';
// import './RestaurantFormStep2.css'; // Import updated CSS

// const categories = [
//   'Chinese',
//   'Italian',
//   'Indian',
//   'Desserts',
//   'Juices'
// ];

// const RestaurantFormStep2 = ({ formData, setFormData, nextStep, previousStep }) => {
//   const [foodItems, setFoodItems] = useState(formData.menu || []);

//   // Handle changes in food item fields
//   const handleFoodItemChange = (index, field, value) => {
//     const updatedFoodItems = [...foodItems];
//     updatedFoodItems[index] = { ...updatedFoodItems[index], [field]: value };
//     setFoodItems(updatedFoodItems);
//     setFormData({ ...formData, menu: updatedFoodItems });
//   };

//   // Handle image file changes
//   const handleImageChange = (index, file) => {
//     const updatedFoodItems = [...foodItems];
//     updatedFoodItems[index] = { ...updatedFoodItems[index], image: file };
//     setFoodItems(updatedFoodItems);
//     setFormData({ ...formData, menu: updatedFoodItems });
//   };

//   // Add a new food item to the list
//   const addFoodItem = () => {
//     setFoodItems([...foodItems, { item: '', description: '', category: '', price: '', image: '' }]);
//   };

//   // Remove a food item from the list
//   const removeFoodItem = (index) => {
//     const updatedFoodItems = foodItems.filter((_, i) => i !== index);
//     setFoodItems(updatedFoodItems);
//     setFormData({ ...formData, menu: updatedFoodItems });
//   };

//   return (
//     <div className="restaurant-form-step2">
//       <h2>Add Food Items</h2>
//       {foodItems.map((foodItem, index) => (
//         <div key={index} className="food-item">
//           <input
//             type="text"
//             placeholder="Food Item Name"
//             value={foodItem.item}
//             onChange={(e) => handleFoodItemChange(index, 'item', e.target.value)}
//             required
//           />
//           <textarea
//             placeholder="Food Description"
//             value={foodItem.description}
//             onChange={(e) => handleFoodItemChange(index, 'description', e.target.value)}
//             required
//           />
//           <select
//             value={foodItem.category}
//             onChange={(e) => handleFoodItemChange(index, 'category', e.target.value)}
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map((category, i) => (
//               <option key={i} value={category}>{category}</option>
//             ))}
//           </select>
//           <input
//             type="number"
//             placeholder="Price"
//             value={foodItem.price}
//             onChange={(e) => handleFoodItemChange(index, 'price', e.target.value)}
//             required
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => handleImageChange(index, e.target.files[0])}
//           />
//           {foodItem.image && <img src={URL.createObjectURL(foodItem.image)} alt={`Food Item ${index}`} className="food-item-preview" />}
//           <button type="button" onClick={() => removeFoodItem(index)}>Remove Item</button>
//         </div>
//       ))}
//       <button type="button" onClick={addFoodItem}>Add Another Food Item</button>
//       <div className="navigation-buttons">
//         <button type="button" onClick={previousStep}>Previous</button>
//         <button type="button" onClick={nextStep}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default RestaurantFormStep2;

import React, { useState, useEffect,useContext } from 'react';
import './RestaurantFormStep2.css'; // Import updated CSS
import axios from 'axios';
import { StoreContext } from '../StoreContext/StoreContext';

const categories = [
  'Chinese',
  'Italian',
  'Indian',
  'Desserts',
  'Juices'
];



const RestaurantFormStep2 = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [restaurantId, setRestaurantId] = useState(null);

  const { url, token } = useContext(StoreContext); // Access context values

  useEffect(() => {
    // Fetch restaurant data on component mount
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get(`${url}/api/restaurant/view-restaurant`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRestaurantId(response.data.restaurant._id); // Set the restaurant ID
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };
  
    fetchRestaurant();
  }, [url, token]);
  // Extract userId from token using jwt-decode
  console.log('Token:', token);
  // Handle changes in food item fields
  const handleFoodItemChange = (index, field, value) => {
    const updatedFoodItems = [...foodItems];
    updatedFoodItems[index] = { ...updatedFoodItems[index], [field]: value };
    setFoodItems(updatedFoodItems);
  };

  // Handle image file changes
  const handleImageChange = (index, file) => {
    const updatedFoodItems = [...foodItems];
    updatedFoodItems[index] = { ...updatedFoodItems[index], image: file };
    setFoodItems(updatedFoodItems);
  };

  // Add a new food item to the list
  const addFoodItem = () => {
    setFoodItems([...foodItems, { item: '', description: '', category: '', price: '', image: '' }]);
  };

  // Remove a food item from the list
  const removeFoodItem = (index) => {
    const updatedFoodItems = foodItems.filter((_, i) => i !== index);
    setFoodItems(updatedFoodItems);
  };

  // Handle form submission
  // const handleSubmit = async () => {
  //   try {
  //     // Create a FormData object to handle file uploads
  //     const formData = new FormData();

  //     // Append food items to FormData
  //     foodItems.forEach((foodItem, index) => {
  //       formData.append(`foodItems[${index}][item]`, foodItem.item);
  //       formData.append(`foodItems[${index}][description]`, foodItem.description);
  //       formData.append(`foodItems[${index}][category]`, foodItem.category);
  //       formData.append(`foodItems[${index}][price]`, foodItem.price);
  //       if (foodItem.image) {
  //         formData.append(`foodItems[${index}][image]`, foodItem.image);
  //       }
  //     });

  //     // Make POST request to backend API
  //     await axios.post(`${url}/api/food-items/add`, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         Authorization: `Bearer ${token}`
  //       }
  //     });

  //     // Handle success (e.g., show a message or redirect)
  //     console.log('Food items submitted successfully');
  //   } catch (error) {
  //     console.error('Error submitting food items:', error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create an array to hold individual FormData objects for each food item
    const requests = foodItems.map(async (foodItem) => {
      const formData = new FormData();
      
      // Append restaurantId to formData if needed
      if (restaurantId) {
        formData.append('restaurantId', restaurantId);
      }
      
      // Append food item details
      formData.append('item', foodItem.item);
      formData.append('description', foodItem.description);
      formData.append('category', foodItem.category);
      formData.append('price', foodItem.price);
      if (foodItem.image) {
        formData.append('image', foodItem.image);
      }
      
      // Send each FormData object as a separate POST request
      return axios.post(`${url}/api/food-items/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
    });
  
    try {
      // Wait for all requests to complete
      const responses = await Promise.all(requests);
  
      alert('Food items submitted successfully!');
      // Handle success (e.g., show a message or redirect)
      responses.forEach(response => console.log('Food item submitted successfully:', response.data));
    } catch (error) {
      console.error('Error submitting food items:', error.response ? error.response.data : error.message);
      // Handle error
    }
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
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => handleImageChange(index, e.target.files[0])}
          />
          {foodItem.image && <img src={URL.createObjectURL(foodItem.image)} alt={`Food Item ${index}`} className="food-item-preview" />}
          <button type="button" onClick={() => removeFoodItem(index)}>Remove Item</button>
        </div>
      ))}
      <button type="button" onClick={addFoodItem}>Add Another Food Item</button>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default RestaurantFormStep2;
