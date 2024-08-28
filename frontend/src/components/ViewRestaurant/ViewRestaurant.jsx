// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { StoreContext } from '../StoreContext/StoreContext';
// import './ViewRestaurant.css'

// const ViewRestaurant = () => {
//   const [restaurant, setRestaurant] = useState(null);
//   const { url, token } = useContext(StoreContext);

//   useEffect(() => {
//     const fetchRestaurant = async () => {
//       try {
//         const response = await axios.get(`${url}/api/restaurant/view-restaurant`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setRestaurant(response.data.restaurant);
//       } catch (error) {
//         console.error('Error fetching restaurant:', error);
//       }
//     };

//     fetchRestaurant();
//   }, [url, token]);

//   if (!restaurant) return <div>Loading...</div>;

//   // Construct the image URL
//   const imageUrl = (filename) => `${url}/api/restaurant/uploads_restaurant/${filename}`;

//   return (
//     <div className="view-restaurant-dashboard">
//       <h1>{restaurant.name}</h1>
//       <p>{restaurant.addressLine1}, {restaurant.addressLine2}, {restaurant.city}, {restaurant.state} - {restaurant.pincode}</p>
//       <p>Contact: {restaurant.contact}</p>
//       <p>Email: {restaurant.email}</p>
//       <p>Opening Time: {restaurant.openingTime}</p>
//       <p>Closing Time: {restaurant.closingTime}</p>
//       <p>Average Price: ${restaurant.averagePrice}</p>
//       <p>Rating: {restaurant.rating} stars</p>
//       <p>Capacity: {restaurant.capacity}</p>
//       <p>Special Instructions: {restaurant.specialInstructions}</p>
//       <p>Website: {restaurant.website}</p>
//       <p>Payment Methods: {restaurant.paymentMethods}</p>
//       <p>Delivery Areas: {restaurant.deliveryAreas.join(', ')}</p>

//       {/* Display images */}
//       {restaurant.logo && <img src={imageUrl(restaurant.logo)} alt="Restaurant Logo" />}
//       {restaurant.image_res && <img src={imageUrl(restaurant.image_res)} alt="Restaurant Image" />}
//     </div>
//   );
// };

// export default ViewRestaurant;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../StoreContext/StoreContext';
import RestaurantFormStep2 from '../RestaurantForm/RestaurantFormStep2.jsx'; // Import the component
import './ViewRestaurant.css';

const ViewRestaurant = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const { url, token } = useContext(StoreContext);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await axios.get(`${url}/api/restaurant/view-restaurant`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setRestaurant(response.data.restaurant);
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      }
    };

    fetchRestaurant();
  }, [url, token]);

  const imageUrl = (filename) => `${url}/api/restaurant/uploads_restaurant/${filename}`;

  const handleAddFoodClick = () => {
    setShowForm(!showForm); // Toggle form visibility
  };

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div className="view-restaurant-dashboard">
      <h1>{restaurant.name}</h1>
      <p>{restaurant.addressLine1}, {restaurant.addressLine2}, {restaurant.city}, {restaurant.state} - {restaurant.pincode}</p>
      <p>Contact: {restaurant.contact}</p>
      <p>Email: {restaurant.email}</p>
      <p>Opening Time: {restaurant.openingTime}</p>
      <p>Closing Time: {restaurant.closingTime}</p>
      <p>Average Price: &#x20b9;{restaurant.averagePrice}</p>
      <p>Rating: {restaurant.rating} stars</p>
      <p>Capacity: {restaurant.capacity}</p>
      <p>Special Instructions: {restaurant.specialInstructions}</p>
      <p>Website: {restaurant.website}</p>
      <p>Payment Methods: {restaurant.paymentMethods}</p>
      <p>Delivery Areas: {restaurant.deliveryAreas.join(', ')}</p>

      {/* Display images */}
      {restaurant.logo && <img src={imageUrl(restaurant.logo)} alt="Restaurant Logo" />}
      {restaurant.image_res && <img src={imageUrl(restaurant.image_res)} alt="Restaurant Image" />}
      
      {/* Add Food Item Button */}
      <button className="add-food-button" onClick={handleAddFoodClick}>
        {showForm ? 'Hide Food Form' : 'Add Food Item'}
      </button>

      {/* Conditionally render RestaurantFormStep2 */}
      {showForm && <RestaurantFormStep2 />}
    </div>
  );
};

export default ViewRestaurant;
