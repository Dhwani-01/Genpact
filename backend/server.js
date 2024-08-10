import express from "express";
import cors from "cors";
import 'dotenv/config'
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import restaurantRouter from "./routes/restaurantRoute.js";
import foodItemRouter from "./routes/foodItemRoute.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';


//app config
const app = express();

const port = 4000;
//middleware
app.use(express.json());
app.use(cors());
//db connect
connectDB();
//api endpoints

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the uploads_restaurant directory
app.use('/uploads_restaurant', express.static(path.join(__dirname, 'uploads_restaurant')));
app.use('/uploads_food', express.static(path.join(__dirname, 'uploads_food')));

// Use food item routes
app.use('/api/food-items', foodItemRouter);

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart",cartRouter);
app.use('/api/restaurant', restaurantRouter);
// app.use('/uploads_restaurant', express.static('uploads_restaurant'));
 //app.use('/uploads_restaurant', express.static(path.join(__dirname, 'uploads_restaurant')))

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
