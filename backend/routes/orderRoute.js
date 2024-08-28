// routes/orderRouter.js

import express from 'express';
import { createOrder , getOrdersByUserId ,getOrdersByRestaurantId } from '../controllers/orderController.js';

const orderRouter = express.Router();

// Route for placing an order
orderRouter.post('/placeOrder', createOrder);

orderRouter.get('/user/:userId', getOrdersByUserId);

orderRouter.get('/restaurant/:restaurantId', getOrdersByRestaurantId);

export default orderRouter;
