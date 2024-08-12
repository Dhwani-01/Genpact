import express from 'express';
import multer from "multer";
import { createFoodItem, getFoodItemsByRestaurant, getFoodItemImage, getFoodItem } from '../controllers/foodItemController.js';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Determine directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the uploads directory to be one level up from the current directory
const uploadDir = path.join(__dirname, '../uploads_food');

// Ensure directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('Created uploads_food directory.');
} else {
  console.log('uploads_food directory already exists.');
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Use the correct directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|webp/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(file.originalname.toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed'));
  }
});

const foodItemRouter = express.Router();

foodItemRouter.post('/add', upload.single('image'), createFoodItem);

// Route for creating a food item
//foodItemRouter.post('/add', multer().single('image'), uploadFoodImage,createFoodItem);

// Route for getting food items by restaurant ID
foodItemRouter.get('/:restaurantId', getFoodItemsByRestaurant);
foodItemRouter.get('/food/:foodItemId', getFoodItem);
// Route for serving food item images
foodItemRouter.get('/uploads_food/:filename', getFoodItemImage);

export default foodItemRouter;
