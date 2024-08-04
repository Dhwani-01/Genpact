import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://harshitamangal2403:harshu_24@cluster0.6zggr1o.mongodb.net/food_delivery').then(()=>console.log("DB Connected"));
}