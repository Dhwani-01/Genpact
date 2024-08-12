// controllers/orderController.js

import OrderModel from '../models/orderItemModel.js';

export const createOrder = async (req, res) => {
    try {
        const { restaurantId, userId, foodId, foodName, foodPrice, quantity, totalAmount, payment, name, email, phone, street, city, state, country, pincode } = req.body;

        // Create a new order
        const newOrder = new OrderModel({
            restaurantId,
            userId,
            foodId,
            foodName,
            foodPrice,
            quantity,
            totalAmount,
            payment,
            name,
            email,
            phone,
            street,
            city,
            state,
            country,
            pincode
        });

        // Save the order to the database
        await newOrder.save();

        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


export const getOrdersByUserId = async (req, res) => {
    try {
      const userId = req.params.userId;
      const orders = await OrderModel.find({ userId }) // Adjust the population according to your schema
      console.log("USER ID ORDERS",userId)
      if (!orders) {
        return res.status(404).json({ message: 'No orders found for this user.' });
      }
  
      res.status(200).json({ orders });
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  export const getOrdersByRestaurantId = async (req, res) => {
    const { restaurantId } = req.params;
    try {
      const orders = await OrderModel.find({ 'restaurantId': restaurantId });
      res.json({ orders });
    } catch (error) {
      console.error('Error fetching orders by restaurant ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };