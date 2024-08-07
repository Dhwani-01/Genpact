import restaurantModel from "../models/restaurantModel.js";

// Create a new restaurant
// restaurantController.js
 const createRestaurant = async (req, res) => {
    try {
      // Destructure the request body
      const {
        name,
        email,
        contact,
        addressLine1,
        addressLine2,
        city,
        state,
        pincode,
        cuisine,
        menu,
        openingTime,
        closingTime,
        deliveryAreas,
        deliveryTime,
        logo,
        images,
        website,
        paymentMethods,
        specialInstructions,
        averagePrice,
        rating,
        capacity
      } = req.body;
  
      // Validate required fields
      if (!name || !email || !contact || !addressLine1 || !city || !state || !pincode || !cuisine) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
      }
  
      // Create a new restaurant record
      const newRestaurant = new restaurantModel({
        name,
        email,
        contact,
        addressLine1,
        addressLine2,
        city,
        state,
        pincode,
        cuisine,
        menu,
        openingTime,
        closingTime,
        deliveryAreas,
        deliveryTime,
        logo,
        images,
        website,
        paymentMethods,
        specialInstructions,
        averagePrice,
        rating,
        capacity
      });
  
      // Save the restaurant to the database
      await newRestaurant.save();
  
      // Respond with success
      res.status(201).json({ success: true, message: "Restaurant created successfully", data: newRestaurant });
    } catch (error) {
      // Log the error and respond with a server error status
      console.error('Error creating restaurant:', error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  };

// Get all restaurants
 const getRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantModel.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a restaurant by ID
const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await restaurantModel.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a restaurant by ID
const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a restaurant by ID
const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantModel.findByIdAndDelete(req.params.id);
    if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { createRestaurant, getRestaurantById, getRestaurants, updateRestaurant, deleteRestaurant };
