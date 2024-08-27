// // // import restaurantModel from "../models/restaurantModel.js";

// // // // Create a new restaurant
// // // const createRestaurant = async (req, res) => {
// // //   try {
// // //     // Log the files for debugging
// // //     console.log('Files:', req.files);

// // //     // Destructure the request body
// // //     const {
// // //       name,
// // //       email,
// // //       contact,
// // //       addressLine1,
// // //       addressLine2,
// // //       city,
// // //       state,
// // //       pincode,
// // //       cuisine,
// // //       menu,
// // //       openingTime,
// // //       closingTime,
// // //       deliveryAreas,
// // //       deliveryTime,
// // //       website,
// // //       paymentMethods,
// // //       specialInstructions,
// // //       averagePrice,
// // //       rating,
// // //       capacity
// // //     } = req.body;

// // //     // Handle file uploads
// // //     const logo = req.files && req.files.logo ? req.files.logo[0].path : ''; // Get logo file path
// // //     const image_res = req.files && req.files.image_res ? req.files.image_res[0].path : ''; // Get image file path

// // //     // Create a new restaurant record
// // //     const newRestaurant = new restaurantModel({
// // //       name,
// // //       email,
// // //       contact,
// // //       addressLine1,
// // //       addressLine2,
// // //       city,
// // //       state,
// // //       pincode,
// // //       cuisine,
// // //       menu,
// // //       openingTime,
// // //       closingTime,
// // //       deliveryAreas: deliveryAreas ? deliveryAreas.split(',').map(area => area.trim()) : [], // Convert delivery areas from comma-separated string to array
// // //       deliveryTime,
// // //       logo,
// // //       image_res, // Use image_res for the image file path
// // //       website,
// // //       paymentMethods,
// // //       specialInstructions,
// // //       averagePrice,
// // //       rating,
// // //       capacity
// // //     });

// // //     // Save the restaurant to the database
// // //     await newRestaurant.save();

// // //     // Respond with success
// // //     res.status(201).json({ success: true, message: "Restaurant created successfully", data: newRestaurant });
// // //   } catch (error) {
// // //     // Log the error and respond with a server error status
// // //     console.error('Error creating restaurant:', error);
// // //     res.status(500).json({ success: false, message: "Server error" });
// // //   }
// // // };

// // // export { createRestaurant };


// // import restaurantModel from '../models/restaurantModel.js';

// // const createRestaurant = async (req, res) => {
// //   const {
// //     name, email, contact, addressLine1, addressLine2, city, state, pincode, cuisine,
// //     menu, openingTime, closingTime, deliveryAreas, deliveryTime, logo, image_res, website,
// //     paymentMethods, specialInstructions, averagePrice, rating, capacity
// //   } = req.body;

// //   // Validate and parse menu field
// //   let parsedMenu = [];
// //   if (menu) {
// //     try {
// //       parsedMenu = JSON.parse(menu); // Ensure it's an array of objects
// //     } catch (error) {
// //       return res.status(400).json({ success: false, message: "Invalid menu format" });
// //     }
// //   }

// //   const restaurant = new restaurantModel({
// //     name,
// //     email,
// //     contact,
// //     addressLine1,
// //     addressLine2,
// //     city,
// //     state,
// //     pincode,
// //     cuisine,
// //     menu: parsedMenu,
// //     openingTime,
// //     closingTime,
// //     deliveryAreas,
// //     deliveryTime,
// //     logo,
// //     image_res,
// //     website,
// //     paymentMethods,
// //     specialInstructions,
// //     averagePrice,
// //     rating,
// //     capacity,
// //   });

// //   try {
// //     await restaurant.save();
// //     res.json({ success: true, message: "Restaurant created successfully" });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ success: false, message: "Error creating restaurant" });
// //   }
// // };

// // export { createRestaurant };

// import restaurantModel from '../models/restaurantModel.js';

// const createRestaurant = async (req, res) => {
//   const {
//     name,
//     email,
//     contact,
//     addressLine1,
//     addressLine2,
//     city,
//     state,
//     pincode,
//     cuisine,
//     menu,
//     openingTime,
//     closingTime,
//     deliveryAreas,
//     deliveryTime,
//     website,
//     paymentMethods,
//     specialInstructions,
//     averagePrice,
//     rating,
//     capacity
//   } = req.body;

//   // Handle file uploads and ensure paths are correctly stored
//   const logo = req.files && req.files.logo ? req.files.logo[0].path : '';
//   const image_res = req.files && req.files.image_res ? req.files.image_res[0].path : '';

//   // Validate and parse menu field
//   let parsedMenu = [];
//   if (menu) {
//     try {
//       parsedMenu = JSON.parse(menu).map(item => ({
//         ...item,
//         image: item.image ? item.image : '' // Ensure image is stored as a string
//       }));
//     } catch (error) {
//       return res.status(400).json({ success: false, message: "Invalid menu format" });
//     }
//   }

//   // Create a new restaurant record
//   const restaurant = new restaurantModel({
//     name,
//     email,
//     contact,
//     addressLine1,
//     addressLine2,
//     city,
//     state,
//     pincode,
//     cuisine,
//     menu: parsedMenu,
//     openingTime,
//     closingTime,
//     deliveryAreas: deliveryAreas ? deliveryAreas.split(',').map(area => area.trim()) : [], // Convert delivery areas from comma-separated string to array
//     deliveryTime,
//     logo, // File path for logo
//     image_res, // File path for additional restaurant image
//     website,
//     paymentMethods,
//     specialInstructions,
//     averagePrice,
//     rating,
//     capacity,
//   });

//   try {
//     await restaurant.save();
//     res.json({ success: true, message: "Restaurant created successfully" });
//   } catch (error) {
//     console.error('Error creating restaurant:', error);
//     res.status(500).json({ success: false, message: "Error creating restaurant" });
//   }
// };

// export { createRestaurant };


import restaurantModel from '../models/restaurantModel.js';
import jwt from 'jsonwebtoken';
import path from 'path';

const createRestaurant = async (req, res) => {
  try {
    const {
      name, email, contact, addressLine1, addressLine2, city, state, pincode,
      /* menu,*/ openingTime, closingTime, deliveryAreas,  website,
      paymentMethods, specialInstructions, averagePrice, rating, capacity,user
    } = req.body;

    // Handle file uploads and ensure paths are correctly stored
    const logo = req.files && req.files.logo ? req.files.logo[0].path : '';
    const image_res = req.files && req.files.image_res ? req.files.image_res[0].path : '';

    // Validate and parse menu field
    // let parsedMenu = [];
    // if (menu) {
    //   try {
    //     parsedMenu = JSON.parse(menu).map(item => ({
    //       ...item,
    //       image: item.image ? item.image : '' // Ensure image is stored as a string
    //     }));
    //   } catch (error) {
    //     return res.status(400).json({ success: false, message: "Invalid menu format" });
    //   }
    // }
    // const userId = req.userId;
    // console.log(userId);

    const restaurant = new restaurantModel({
      name,
      email,
      contact,
      addressLine1,
      addressLine2,
      city,
      state,
      pincode,
      // menu: parsedMenu,
      openingTime,
      closingTime,
      deliveryAreas: deliveryAreas ? deliveryAreas.split(',').map(area => area.trim()) : [], // Convert delivery areas from comma-separated string to array
      logo,
      image_res,
      website,
      paymentMethods,
      specialInstructions,
      averagePrice,
      rating,
      capacity,
      user,
    });

    await restaurant.save();
    res.json({ success: true, message: "Restaurant created successfully" });
  } catch (error) {
    console.error('Error creating restaurant:', error);
    res.status(400).json({ success: false, message: "Bad Request: " + error.message });
  }
};

export { createRestaurant };

// src/controllers/restaurantController.js

// const getRestaurantByUserId = async (req, res) => {
//   const userId = req.user.id; // Assuming req.user.id holds the current user's ID
//   try {
//     const restaurant = await restaurantModel.findOne({ ownerId: userId }); // Modify this query as needed
//     if (restaurant) {
//       res.json({ canView: true, restaurant });
//     } else {
//       res.json({ canView: false });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// const getRestaurantByUserId = async (req, res) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   console.log("Token",token);
//   if (!token) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your actual secret key
//     const userId = decoded.id;
//     console.log(userId);
//     const restaurant = await restaurantModel.findOne({ user: userId });
//     if (restaurant) {
//       res.json({ canView: true, restaurant });
//     } else {
//       res.json({ canView: false });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// export { getRestaurantByUserId };
const getRestaurantByUserId = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure your secret key is correct
    const userId = decoded.id;
    const restaurant = await restaurantModel.findOne({ user: userId });

    if (restaurant) {
      // Extract filename from the path
      const logoFilename = path.basename(restaurant.logo);
      const imageResFilename = path.basename(restaurant.image_res);

      res.json({
        canView: true,
        restaurant: {
          ...restaurant.toObject(),
          logo: logoFilename,
          image_res: imageResFilename,
        }
      });
    } else {
      res.json({ canView: false });
    }
  } catch (error) {
    console.error('Error:', error); // Add console error logging
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getRestaurantById = async (req, res) => {
  const { id } = req.params;

  try {
    const restaurant = await restaurantModel.findById(id);

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.json({ restaurant });
  } catch (error) {
    console.error('Error fetching restaurant:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export { getRestaurantByUserId , getRestaurantById};