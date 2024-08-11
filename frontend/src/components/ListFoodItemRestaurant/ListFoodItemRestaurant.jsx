import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../StoreContext/StoreContext';
import './ListFoodItemRestaurant.css';

const ListFoodItem = ({ restaurantId }) => {
  const [foodItems, setFoodItems] = useState([]);
  const { url, token } = useContext(StoreContext);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get(`${url}/api/food-items/${restaurantId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setFoodItems(response.data.foodItems);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };

    fetchFoodItems();
  }, [url, token, restaurantId]);

  const imageUrl = (filename) => `${url}/api/food-items/uploads_food/${filename}`;

  return (
    <div className="list-food-item-container">
      <h1>Food Items</h1>
      <div className="food-item-list">
        {foodItems.length > 0 ? (
          foodItems.map((item) => (
            <div className="food-item-card" key={item._id}>
              {item.image && <img src={imageUrl(item.filename)} alt={item.name} className="food-item-image" />}
              <h2>{item.item}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))
        ) : (
          <p>No food items available.</p>
        )}
      </div>
    </div>
  );
};

export default ListFoodItem;
