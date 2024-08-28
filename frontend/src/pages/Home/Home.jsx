import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
// import FoodList from "../../components/FoodList/FoodList";
import AppDownload from "../../components/AppDownload/AppDownload";
import Restaurants from "../../components/Restaurants/Restaurants";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <Restaurants/>
      <AppDownload />
    </div>
  );
};

export default Home;
