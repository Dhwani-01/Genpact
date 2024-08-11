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
<<<<<<< HEAD
      {/* <FoodList category={category} /> */}
=======
      <FoodList category={category} />
>>>>>>> 57b3fbf0d85ad94354b573fc23ba31048fc256ed
      <RestaurantList/>
      <AppDownload />
      
    </div>
  );
};

export default Home;
