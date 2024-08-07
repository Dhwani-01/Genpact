import express from 'express';
const restaurantRouter = express.Router();
import { createRestaurant, getRestaurants, getRestaurantById, updateRestaurant, deleteRestaurant } from '../controllers/restaurantController.js';

// All routes are prefixed with /api/restaurant
restaurantRouter.post('/', createRestaurant);          // POST /api/restaurant
restaurantRouter.get('/', getRestaurants);             // GET /api/restaurant
restaurantRouter.get('/:id', getRestaurantById);       // GET /api/restaurant/:id
restaurantRouter.put('/:id', updateRestaurant);        // PUT /api/restaurant/:id
restaurantRouter.delete('/:id', deleteRestaurant);      // DELETE /api/restaurant/:id

export default restaurantRouter;
