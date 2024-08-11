// import FoodItem from '../models/foodItemModel.js';
// import path from 'path';
// import fs from 'fs';

// // Configure Multer
// import multer from 'multer';

// // Define the storage for Multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads_food/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });

// export const createFoodItem = async (req, res) => {
//   try {
//     const { item, description, category, price, restaurantId } = req.body;
//     const image = req.file.path;  // Path to the uploaded image

//     const newFoodItem = new FoodItem({ item, description, category, price, image, restaurantId });
//     await newFoodItem.save();

//     res.status(201).json(newFoodItem);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// export const getFoodItemsByRestaurant = async (req, res) => {
//   try {
//     const { restaurantId } = req.params;
//     const foodItems = await FoodItem.find({ restaurantId });

//     res.status(200).json(foodItems);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// export const getFoodItemImage = (req, res) => {
//   const imagePath = path.join('uploads_food', req.params.filename);
//   fs.access(imagePath, fs.constants.F_OK, (err) => {
//     if (err) {
//       return res.status(404).send('File not found');
//     }
//     res.sendFile(imagePath, { root: '.' });
//   });
// };


import FoodItem from '../models/foodItemModel.js';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';

// import multer from 'multer';

// // Configure Multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads_food/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });

// // Middleware for handling image upload
// export const uploadFoodImage = upload.single('image'); // Adjust field name based on your form

// Create a new food item
// export const createFoodItem = async (req, res) => {
//   try {
//     const { item, description, category, price, restaurantId } = req.body;
//     const image = req.file ? req.file.path : ''; // Path to the uploaded image, if any

//     const newFoodItem = new FoodItem({
//       item,
//       description,
//       category,
//       price,
//       image,
//       restaurantId
//     });

//     await newFoodItem.save();
//     res.status(201).json(newFoodItem);
//   } catch (error) {
//     console.error('Error creating food item:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
export const createFoodItem = async (req, res) => {
  try {
    const { item, description, category, price,restaurantId } = req.body;
    const image = req.file ? req.file.path : ''; // Adjust based on how you handle image uploads
    console.log("restaurant_id",restaurantId);
    // Validate required fields
    if (!item || !description || !category || !price) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new food item
    const foodItem = new FoodItem({
      item,
      description,
      category,
      price,
      image,
      restaurantId
    });

    // Save the food item
    await foodItem.save();

    // Respond with success
    res.status(201).json({ message: 'Food item created successfully', foodItem });
  } catch (error) {
    console.error('Error creating food item:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

export const listFood = async (req, res) => {
  try {
    const foods = await FoodItem.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error("Error listing food:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

  

// Get food items by restaurant ID
export const getFoodItemsByRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
      return res.status(400).json({ error: 'Invalid restaurantId' });
  }

    if (!restaurantId) {
      return res.status(400).json({ message: 'Restaurant ID is required' });
    }

    const foodItems = await FoodItem.find({ restaurantId });

    if (!foodItems.length) {
      return res.status(404).json({ message: 'No food items found for this restaurant' });
    }

    res.status(200).json(foodItems);
  } catch (error) {
    console.error('Error fetching food items:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Serve food item image
export const getFoodItemImage = (req, res) => {
  const imagePath = path.join('uploads_food', req.params.filename);

  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Image not found:', err);
      return res.status(404).send('File not found');
    }
    res.sendFile(imagePath, { root: '.' });
  });
};
