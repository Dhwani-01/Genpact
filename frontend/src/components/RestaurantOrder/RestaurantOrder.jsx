// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { StoreContext } from '../StoreContext/StoreContext'; // Ensure correct path to StoreContext
// import './RestaurantOrder.css';

// const RestaurantOrder = ({ restaurantId }) => {
//   const [orders, setOrders] = useState([]);
//   const { url, token } = useContext(StoreContext);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`${url}/api/order/restaurant/${restaurantId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setOrders(response.data.orders || []);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     if (restaurantId) {
//       fetchOrders();
//     }
//   }, [url, token, restaurantId]);

//   return (
//     <div className="restaurant-order-container">
//       <h2>Orders for Restaurant</h2>
//       {orders.length > 0 ? (
//         <table className="order-table">
//           <thead>
//             <tr>
//               <th>Order ID</th>
//               <th>Food Items</th>
//               <th>Total Amount</th>
//               <th>Status</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map(order => (
//               <tr key={order._id}>
//                 <td>{order._id}</td>
//                 <td>
//                   {order.foodItems.map(item => (
//                     <div key={item.foodId} className="food-item">
//                       <span>{item.foodName}</span>
//                       <span>${item.foodPrice?.toFixed(2) || '0.00'}</span>
//                     </div>
//                   ))}
//                 </td>
//                 <td>${order.totalAmount?.toFixed(2) || '0.00'}</td>
//                 <td>{order.status || 'Unknown'}</td>
//                 <td>{new Date(order.dateOfOrdering).toLocaleDateString() || 'Unknown'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <div>No orders found for this restaurant</div>
//       )}
//     </div>
//   );
// };

// export default RestaurantOrder;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../StoreContext/StoreContext'; // Ensure correct path to StoreContext
import './RestaurantOrder.css';

const RestaurantOrder = ({ restaurantId }) => {
  const [orders, setOrders] = useState([]);
  const { url, token } = useContext(StoreContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${url}/api/order/restaurant/${restaurantId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setOrders(response.data.orders || []);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (restaurantId) {
      fetchOrders();
    }
  }, [url, token, restaurantId]);

  return (
    <div className="restaurant-order-container">
      <h2>Orders for Restaurant</h2>
      {orders.length > 0 ? (
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Food Items</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                {/* <td>
                  {order.foodItems && order.foodItems.length > 0 ? (
                    order.foodItems.map(item => (
                      <div key={item.foodId} className="food-item">
                        <span>{item.foodName}</span>
                        <span>${item.foodPrice?.toFixed(2) || '0.00'}</span>
                      </div>
                    ))
                  ) : (
                    <div>No food items</div>
                  )}
                </td> */}
                <td>{order.foodName}</td>
                <td>&#x20b9;{order.totalAmount?.toFixed(2) || '0.00'}</td>
                <td>{order.status || 'Unknown'}</td>
                <td>{order.dateOfOrdering ? new Date(order.dateOfOrdering).toLocaleDateString() : 'Unknown'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No orders found for this restaurant</div>
      )}
    </div>
  );
};

export default RestaurantOrder;
