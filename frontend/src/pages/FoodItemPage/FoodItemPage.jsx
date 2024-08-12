import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import { StoreContext } from '../../components/StoreContext/StoreContext';
import './FoodItemPage.css'; // Import the CSS file for styling

const FoodItemsPage = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [error, setError] = useState(null);
    const { restaurantId } = useParams(); // Get restaurantId from URL
    const { url, token } = useContext(StoreContext);
    const navigate=useNavigate();

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
                setError('Error fetching food items');
                console.error('Error fetching food items:', error);
            }
        };

        fetchFoodItems();
    }, [restaurantId, url, token]);

    const imageUrl = (filename) => `${url}/api/food-items/uploads_food/${filename}`;

    const handleOrder = (foodItem) => {
        // Handle ordering logic here
        navigate(`/restaurant/${restaurantId}/order/${foodItem._id}`) 
        console.log('Order placed for:', foodItem.item);
    };

    if (error) return <div className="error-message">{error}</div>;
    if (foodItems.length === 0) return <div className="loading-message">Loading...</div>;

    return (
        <div className="food-items-container">
            <h1>Food Items</h1>
            <div className="food-items-grid">
                {foodItems.map((item) => (
                    <div key={item.id} className="food-item-card">
                        <div className="card-header">
                            {item.image && <img src={imageUrl(item.filename)} alt={`${item.name}`} className="food-item-image" />}
                        </div>
                        <div className="card-body">
                            <h2 className="food-item-name">{item.item}</h2>
                            <p className="food-item-description">{item.description}</p>
                            <p className="food-item-price">Price: ${item.price}</p>
                            <button onClick={() => handleOrder(item)} className="order-button">Order</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodItemsPage;
