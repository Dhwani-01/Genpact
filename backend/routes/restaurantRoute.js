import express from 'express';
import multer from 'multer';
import { createRestaurant,getRestaurantByUserId,getRestaurantById } from '../controllers/restaurantController.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import restaurantModel from '../models/restaurantModel.js';

// Determine directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the uploads directory to be one level up from the current directory
const uploadDir = path.join(__dirname, '../uploads_restaurant');

// Ensure directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('Created uploads_restaurant directory.');
} else {
  console.log('uploads_restaurant directory already exists.');
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

const restaurantRouter = express.Router();

// Routes for handling file uploads
restaurantRouter.post('/', upload.fields([
  { name: 'logo', maxCount: 1 }, // Single logo file
  { name: 'image_res', maxCount: 1 } // Single image_res file
]), createRestaurant);

// src/routes/restaurantRouter.js

restaurantRouter.get('/view-restaurant', getRestaurantByUserId);

restaurantRouter.get('/view-restaurant/:id', getRestaurantById);

restaurantRouter.get('/getAllRestaurants', async (req, res) => {
  try {
      // Fetch restaurants from the database (replace with your actual data source)
      const restaurants = await restaurantModel.find();

      // Map through restaurants and add filenames for images
      const restaurantsWithImages = restaurants.map(restaurant => ({
          ...restaurant.toObject(),
          logo: restaurant.logo ? path.basename(restaurant.logo) : null,
          image_res: restaurant.image_res ? path.basename(restaurant.image_res) : null
      }));

      res.json({ restaurants: restaurantsWithImages });
  } catch (error) {
      console.error('Error fetching restaurants:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

restaurantRouter.get('/uploads_restaurant/:filename', (req, res) => {
  const { filename } = req.params;
  console.log(filename);
  const filePath = path.join(__dirname, '../uploads_restaurant', filename);

  res.sendFile(filePath, err => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Error serving image');
    }
  });
});

export default restaurantRouter;
