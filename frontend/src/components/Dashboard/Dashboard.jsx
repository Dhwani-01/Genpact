// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { StoreContext } from '../StoreContext/StoreContext';
// import ListFoodItem from '../ListFoodItemRestaurant/ListFoodItemRestaurant.jsx'; // Import the ListFoodItem component
// import './Dashboard.css';

// const Dashboard = () => {
//   const [restaurant, setRestaurant] = useState(null);
//   const [activeSection, setActiveSection] = useState('ViewRestaurant'); // Default active section
//   const [showForm, setShowForm] = useState(false); // State to toggle form visibility
//   const [restaurantId, setRestaurantId] = useState(null); // State to store restaurant ID
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
//         setRestaurantId(response.data.restaurant._id); // Set the restaurant ID
//       } catch (error) {
//         console.error('Error fetching restaurant:', error);
//       }
//     };

//     fetchRestaurant();
//   }, [url, token]);

//   const imageUrl = (filename) => `${url}/api/restaurant/uploads_restaurant/${filename}`;

//   const handleAddFoodClick = () => {
//     setShowForm(!showForm); // Toggle form visibility
//   };

//   const renderContent = () => {
//     switch (activeSection) {
//       case 'AddFoodItem':
//         return (
//           <>
//             <button className="dashboard-add-food-button" onClick={handleAddFoodClick}>
//               {showForm ? 'Hide Food Form' : 'Add Food Item'}
//             </button>
//             {showForm && <RestaurantFormStep2 />} {/* Conditional rendering of the form */}
//           </>
//         );
//       case 'ListFoodItems':
//         return restaurantId ? <ListFoodItem restaurantId={restaurantId} /> : <div>Loading food items...</div>;
//       case 'ListOrders':
//         return <div>List Orders Component</div>; // Placeholder for List Orders component
//       case 'ViewOtherSection':
//         return <div>View Other Section Component</div>; // Placeholder for another section
//       default:
//         return (
//           <div className="dashboard-content">
//             <h1>{restaurant.name}</h1>
//             <p>{restaurant.addressLine1}, {restaurant.addressLine2}, {restaurant.city}, {restaurant.state} - {restaurant.pincode}</p>
//             <p>Contact: {restaurant.contact}</p>
//             <p>Email: {restaurant.email}</p>
//             <p>Opening Time: {restaurant.openingTime}</p>
//             <p>Closing Time: {restaurant.closingTime}</p>
//             <p>Average Price: ${restaurant.averagePrice}</p>
//             <p>Rating: {restaurant.rating} stars</p>
//             <p>Capacity: {restaurant.capacity}</p>
//             <p>Special Instructions: {restaurant.specialInstructions}</p>
//             <p>Website: {restaurant.website}</p>
//             <p>Payment Methods: {restaurant.paymentMethods}</p>
//             <p>Delivery Areas: {restaurant.deliveryAreas.join(', ')}</p>

//             {/* Display images */}
//             {restaurant.logo && <img src={imageUrl(restaurant.logo)} alt="Restaurant Logo" />}
//             {restaurant.image_res && <img src={imageUrl(restaurant.image_res)} alt="Restaurant Image" />}
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <div className="dashboard-sidebar">
//         <button className="dashboard-sidebar-button" onClick={() => setActiveSection('ViewRestaurant')}>View Dashboard</button>
//         <button className="dashboard-sidebar-button" onClick={() => setActiveSection('AddFoodItem')}>Add Food Item</button>
//         <button className="dashboard-sidebar-button" onClick={() => setActiveSection('ListFoodItems')}>List Food Items</button>
//         <button className="dashboard-sidebar-button" onClick={() => setActiveSection('ListOrders')}>List Orders</button>
//         <button className="dashboard-sidebar-button" onClick={() => setActiveSection('ViewOtherSection')}>View Other Section</button>
//       </div>

//       {/* Main Content */}
//       <div className="dashboard-content">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../StoreContext/StoreContext';
import RestaurantFormStep2 from '../RestaurantForm/RestaurantFormStep2'; // Adjust the path as needed
import ListFoodItem from '../ListFoodItemRestaurant/ListFoodItemRestaurant.jsx'; // Import the ListFoodItem component
import RestaurantOrder from '../RestaurantOrder/RestaurantOrder.jsx';
import './Dashboard.css';

const Dashboard = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [activeSection, setActiveSection] = useState('ViewRestaurant'); // Default active section
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [restaurantId, setRestaurantId] = useState(null); // State to store restaurant ID
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
        setRestaurantId(response.data.restaurant?._id); // Set the restaurant ID, ensure restaurant is not null
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

  const renderContent = () => {
    if (!restaurant) return <div>Loading...</div>; // Render loading state if restaurant is null

    switch (activeSection) {
      case 'AddFoodItem':
        return (
          <>
            <button className="dashboard-add-food-button" onClick={handleAddFoodClick}>
              {showForm ? 'Hide Food Form' : 'Add Food Item'}
            </button>
            {showForm && <RestaurantFormStep2 />} {/* Conditional rendering of the form */}
          </>
        );
      case 'ListFoodItems':
        return restaurantId ? <ListFoodItem restaurantId={restaurantId} /> : <div>Loading food items...</div>;
      case 'ListOrders':
        return restaurantId ? <RestaurantOrder restaurantId={restaurantId} /> : <div>Loading orders...</div>;
      case 'ViewOtherSection':
        return <div>View Other Section Component</div>; // Placeholder for another section
      default:
        return (
          <div className="dashboard-content">
            <h1>{restaurant.name}</h1>
          
            {restaurant.logo && <img src={imageUrl(restaurant.logo)} alt="Restaurant Logo" />}
            {restaurant.image_res && <img src={imageUrl(restaurant.image_res)} alt="Restaurant Image" />}
            
            
            
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
           
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <button className="dashboard-sidebar-button" onClick={() => setActiveSection('ViewRestaurant')}>View Dashboard</button>
        <button className="dashboard-sidebar-button" onClick={() => setActiveSection('AddFoodItem')}>Add Food Item</button>
        <button className="dashboard-sidebar-button" onClick={() => setActiveSection('ListFoodItems')}>List Food Items</button>
        <button className="dashboard-sidebar-button" onClick={() => setActiveSection('ListOrders')}>List Orders</button>
        <button className="dashboard-sidebar-button" onClick={() => setActiveSection('ViewOtherSection')}>View Other Section</button>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
