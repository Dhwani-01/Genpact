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


import FoodItemModel from '../models/foodItemModel.js';
import path from 'path';
import fs from 'fs';
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
    const foodItem = new FoodItemModel({
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

  
export const getFoodItemsByRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    // Add some logging to debug
    console.log('Fetching food items for restaurantId:', restaurantId);

    // Query the database
    const foodItems = await FoodItemModel.find({ restaurantId });

    if (!foodItems || foodItems.length === 0) {
      return res.status(404).json({ message: 'No food items found' });
    }

    // Map through food items and add filenames for images
    const foodItemsWithFilenames = foodItems.map(item => ({
      ...item.toObject(),
      filename: item.image ? path.basename(item.image) : null // Extract filename
    }));

    // Send the response
    res.status(200).json({ foodItems: foodItemsWithFilenames });
  } catch (error) {
    console.error('Error fetching food items:', error);
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
