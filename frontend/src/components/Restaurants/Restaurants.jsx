// // import React, { useState, useEffect, useContext } from 'react';
// // import axios from 'axios';
// // import { StoreContext } from '../StoreContext/StoreContext';

// // const Restaurants = () => {
// //     const [restaurants, setRestaurants] = useState([]); // Array to hold multiple restaurants
// //     const [error, setError] = useState(null); // State for error handling
// //     const { url, token } = useContext(StoreContext);
  
// //     useEffect(() => {
// //         const fetchRestaurants = async () => {
// //             try {
// //                 const response = await axios.get(`${url}/api/restaurant/getAllRestaurants`, {
// //                     headers: {
// //                         Authorization: `Bearer ${token}`
// //                     }
// //                 });
// //                 setRestaurants(response.data.restaurants); // Adjust based on actual response structure
// //             } catch (error) {
// //                 setError('Error fetching restaurants'); // Update state on error
// //                 console.error('Error fetching restaurants:', error);
// //             }
// //         };
  
// //         fetchRestaurants();
// //     }, [url, token]);
  
// //     const imageUrl = (filename) => `${url}/api/restaurant/uploads_restaurant/${filename}`;

// //     console.log(imageUrl)
  
// //     if (error) return <div>{error}</div>; // Display error if any
// //     if (restaurants.length === 0) return <div>Loading...</div>; // Display loading while fetching data
  
// //     return (
// //         <div className="view-restaurant-dashboard">
// //             <h1>All Restaurants</h1>
  
// //             {/* Display images and details for all restaurants */}
// //             {restaurants.map((restaurant) => (
// //                 <div key={restaurant.id} className="restaurant-card"> {/* Ensure each restaurant has a unique id */}
// //                     <h2>{restaurant.name}</h2>
// //                     <h2>{restaurant.city}</h2>
// //                     {restaurant.logo && <img src={imageUrl(restaurant.logo)} alt={`${restaurant.name} Logo`} />}
// //                     {restaurant.image_res && <img src={imageUrl(restaurant.image_res)} alt={`${restaurant.name} Image`} />}
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };
  
// // export default Restaurants;

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { StoreContext } from '../StoreContext/StoreContext';
// import './Restaurants.css'; // Import the CSS file for styling

// const Restaurants = () => {
//     const [restaurants, setRestaurants] = useState([]);
//     const [error, setError] = useState(null);
//     const { url, token } = useContext(StoreContext);

//     useEffect(() => {
//         const fetchRestaurants = async () => {
//             try {
//                 const response = await axios.get(`${url}/api/restaurant/getAllRestaurants`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//                 setRestaurants(response.data.restaurants);
//             } catch (error) {
//                 setError('Error fetching restaurants');
//                 console.error('Error fetching restaurants:', error);
//             }
//         };

//         fetchRestaurants();
//     }, [url, token]);

//     const imageUrl = (filename) => `${url}/api/restaurant/uploads_restaurant/${filename}`;

//     if (error) return <div className="error-message">{error}</div>;
//     if (restaurants.length === 0) return <div className="loading-message">Loading...</div>;

//     return (
//         <div className="restaurants-container">
//             <h1>All Restaurants</h1>
//             <div className="restaurants-grid">
//                 {restaurants.map((restaurant) => (
//                     <div key={restaurant.id} className="restaurant-card">
//                         <div className="card-header">
//                             {restaurant.logo && <img src={imageUrl(restaurant.logo)} alt={`${restaurant.name} Logo`} className="restaurant-logo" />}
//                             {restaurant.image_res && <img src={imageUrl(restaurant.image_res)} alt={`${restaurant.name} Image`} className="restaurant-image" />}
//                         </div>
//                         <div className="card-body">
//                             <h2 className="restaurant-name">{restaurant.name}</h2>
//                             <p className="restaurant-address">
//                                 {restaurant.addressLine1}, {restaurant.addressLine2}, {restaurant.city}, {restaurant.state} - {restaurant.pincode}
//                             </p>
//                             <p className="restaurant-contact">Contact: {restaurant.contact}</p>
//                             <p className="restaurant-email">Email: {restaurant.email}</p>
//                             <p className="restaurant-hours">Opening Time: {restaurant.openingTime} AM | Closing Time: {restaurant.closingTime} PM</p>
//                             <p className="restaurant-price">Average Price: ${restaurant.averagePrice}</p>
//                             <p className="restaurant-rating">Rating: {restaurant.rating} stars</p>
//                             <p className="restaurant-capacity">Capacity: {restaurant.capacity}</p>
//                             <p className="restaurant-special">Special Instructions: {restaurant.specialInstructions}</p>
//                             <p className="restaurant-website">Website: <a href={restaurant.website} target="_blank" rel="noopener noreferrer">{restaurant.website}</a></p>
//                             <p className="restaurant-payment">Payment Methods: {restaurant.paymentMethods}</p>
//                             <p className="restaurant-delivery">Delivery Areas: {restaurant.deliveryAreas.join(', ')}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Restaurants;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../StoreContext/StoreContext';
import './Restaurants.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Import Link for navigation

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);
    const { url, token,currency } = useContext(StoreContext);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get(`${url}/api/restaurant/getAllRestaurants`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setRestaurants(response.data.restaurants);
            } catch (error) {
                setError('Error fetching restaurants');
                console.error('Error fetching restaurants:', error);
            }
        };

        fetchRestaurants();
    }, [url, token]);

    const imageUrl = (filename) => `${url}/api/restaurant/uploads_restaurant/${filename}`;

    if (error) return <div className="error-message">{error}</div>;
    if (restaurants.length === 0) return <div className="loading-message">Loading...</div>;

    return (
        <div className="restaurants-container">
            <h1>All Restaurants</h1>
            <div className="restaurants-grid">
                {restaurants.map((restaurant) => (
                    <div key={restaurant._id} className="restaurant-card"> {/* Use a unique identifier as the key */}
                        <Link to={`/restaurant/${restaurant._id}`} className="restaurant-link">
                            <div className="card-header">
                                {restaurant.logo && <img src={imageUrl(restaurant.logo)} alt={`${restaurant.name} Logo`} className="restaurant-logo" />}
                                {restaurant.image_res && <img src={imageUrl(restaurant.image_res)} alt={`${restaurant.name} Image`} className="restaurant-image" />}
                            </div>
                            <div className="card-body">
                                <div className='card-name'>
                                <h2 className="restaurant-name">{restaurant.name}</h2>
                                <div className="restaurant-rating"><p>{restaurant.rating} &#x2605;</p></div>
                                </div>
                                <div className='instruction'>
                                <p className="restaurant-special">{restaurant.specialInstructions}</p>
                                <p className="restaurant-price"> &#x20b9;{restaurant.averagePrice} for one</p>
                                </div>
                                

            
                                <p className="restaurant-hours">Opening Time: {restaurant.openingTime} AM | Closing Time: {restaurant.closingTime} PM</p>
                                
                                
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Restaurants;

