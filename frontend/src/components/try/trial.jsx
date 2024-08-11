import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../StoreContext/StoreContext';

const Trial = () => {
    const [restaurants, setRestaurants] = useState([]); // Array to hold multiple restaurants
    const [error, setError] = useState(null); // State for error handling
    const { url, token } = useContext(StoreContext);
  
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get(`${url}/api/restaurant/getAllRestaurants`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setRestaurants(response.data.restaurants); // Adjust based on actual response structure
            } catch (error) {
                setError('Error fetching restaurants'); // Update state on error
                console.error('Error fetching restaurants:', error);
            }
        };
  
        fetchRestaurants();
    }, [url, token]);
  
    const imageUrl = (filename) => `${url}/api/restaurant/uploads_restaurant/${filename}`;

    console.log(imageUrl)
  
    if (error) return <div>{error}</div>; // Display error if any
    if (restaurants.length === 0) return <div>Loading...</div>; // Display loading while fetching data
  
    return (
        <div className="view-restaurant-dashboard">
            <h1>All Restaurants</h1>
  
            {/* Display images and details for all restaurants */}
            {restaurants.map((restaurant) => (
                <div key={restaurant.id} className="restaurant-card"> {/* Ensure each restaurant has a unique id */}
                    <h2>{restaurant.name}</h2>
                    <h2>{restaurant.city}</h2>
                    {restaurant.logo && <img src={imageUrl(restaurant.logo)} alt={`${restaurant.name} Logo`} />}
                    {restaurant.image_res && <img src={imageUrl(restaurant.image_res)} alt={`${restaurant.name} Image`} />}
                </div>
            ))}
        </div>
    );
};
  
export default Trial;
