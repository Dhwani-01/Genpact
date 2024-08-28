// import {foodModel} from "../models/foodModel.js";
// import fs from "fs";
// //add food
// const addFood = async (req, res) => {
//   let image_filename = `${req.file.filename}`;
//   const food = new foodModel({
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//     category: req.body.category,
//     image: image_filename,
//   });
//   try {
//     await food.save();
//     res.json({ success: true, message: "Food Added" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };
// //list food
// const listFood = async (req, res) => {
//   try {
//     const foods = await foodModel.find({});
//     res.json({ success: true, data: foods });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error });
//   }
// };

// const removeFood = async (req, res) => {
//   try {
//     const food = await foodModel.findById(req.body.id);
//     fs.unlink(`uploads/${food.image}`, () => {});
    
//     await foodModel.findByIdAndDelete(req.body.id);
//     res.json({ success: true, message: "Food Removed" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };
// export { addFood, listFood, removeFood };

import { foodModel } from "../models/foodModel.js";
import fs from "fs";
import path from "path";

// Add food
const addFood = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }

  const image_filename = req.file.filename;
  
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// List food
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error("Error listing food:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Remove food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }

    const imagePath = path.join(__dirname, `../../uploads/${food.image}`);
    fs.unlink(imagePath, (err) => {
      if (err) console.error("Error removing file:", err);
    });

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.error("Error removing food:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { addFood, listFood, removeFood };
