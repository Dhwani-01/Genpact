import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../StoreContext/StoreContext'; // Ensure correct path to StoreContext
import './UserOrder.css';
import jwtDecode from 'jwt-decode';

const UserOrder = () => {
  const [orders, setOrders] = useState([]);
  const [restaurants, setRestaurants] = useState({});
  const [foodItems, setFoodItems] = useState({});
  const { url, token } = useContext(StoreContext);

  const userId = token ? jwtDecode(token).id : null;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${url}/api/order/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const ordersData = response.data.orders || [];

        // Extract unique restaurant and food item IDs from the orders
        const restaurantIds = [...new Set(ordersData.map(order => order.restaurantId).filter(id => id))];
        const foodItemIds = [...new Set(ordersData.flatMap(order => order.foodItems ? order.foodItems.map(item => item.foodId) : []))];

        // Fetch restaurants and food items
        const restaurantRequests = restaurantIds.map(id =>
          axios.get(`${url}/api/restaurant/view-restaurant`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        );

        const foodItemRequests = foodItemIds.map(id =>
          axios.get(`${url}/api/food-items/food/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        );

        const [restaurantsResponse, foodItemsResponse] = await Promise.all([
          Promise.all(restaurantRequests),
          Promise.all(foodItemRequests)
        ]);

        // Map the restaurant and food item responses by their IDs
        const restaurantsData = restaurantsResponse.reduce((acc, { data }) => {
          acc[data.restaurant._id] = data.restaurant;
          return acc;
        }, {});

        const foodItemsData = foodItemsResponse.reduce((acc, { data }) => {
          acc[data.foodItem._id] = data.foodItem;
          return acc;
        }, {});

        setRestaurants(restaurantsData);
        console.log(restaurantsData);
        setFoodItems(foodItemsData);
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [url, token, userId]);

  return (
    <div className="order-user-container">
      <h2>Your Orders</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Restaurant</th>
            <th>Food Items</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{restaurants[order.restaurantId]?.name || 'Loading...'}</td>
                {/* <td>
                  {Array.isArray(order.foodItems) && order.foodItems.length > 0 ? (
                    order.foodItems.map(item => (
                      <div key={item.foodId} className="food-item">
                        <img
                          src={`${url}/api/food-items/uploads_food/${foodItems[item.foodId]?.filename || 'default.png'}`}
                          alt={foodItems[item.foodId]?.item || 'Food item'}
                          className="food-item-image"
                        />
                        <div className="food-item-details">
                          <span>{foodItems[item.foodId]?.item || 'Loading...'}</span>
                          <span>${foodItems[item.foodId]?.price?.toFixed(2) || '0.00'}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>No food items</div>
                  )}
                </td> */}
                <td>{order.foodName}</td>
                <td>${order.totalAmount?.toFixed(2) || '0.00'}</td>
                <td>{order.status || 'Unknown'}</td>
                <td>{new Date(order.dateOfOrdering).toLocaleDateString() || 'Unknown'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No orders found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrder;
