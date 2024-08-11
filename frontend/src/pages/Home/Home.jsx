import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodList from "../../components/FoodList/FoodList";
import AppDownload from "../../components/AppDownload/AppDownload";
import RestaurantList from "../../components/RestaurantList/RestaurantList"
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      {/* <FoodList category={category} /> */}
      <RestaurantList/>
      <AppDownload />
    </div>
  );
};

export default Home;
