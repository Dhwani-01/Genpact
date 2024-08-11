import React, { useContext } from "react";
import "./RestaurantItem.css";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";

import { assets } from "../../assets/assets";
import { StoreContext } from "../StoreContext/StoreContext";
const RestaurantItem = ({id,name,openingTime,closingTime,logo,image_res,specialInstructions,averagePrice,rating}) => {
  const {url}=useContext(StoreContext);
  const imageUrl = (filename) => `${url}/api/restaurant/uploads_restaurant/${filename}`;
=======
import { assets } from "../../assets/assets";
const RestaurantItem = ({id,name,cuisine,menu,openingTime,closingTime,deliveryTime,images,averagePrice,rating}) => {
>>>>>>> 57b3fbf0d85ad94354b573fc23ba31048fc256ed
  return (
    <NavLink to={`/foodlist/${id}`} className="restaurant-item">
      <div className="restaurant-item-img-container">
        <img className="restaurant-item-image" src={imageUrl(image_res)} alt="Restaurant Image"/>
      </div>
      <div className="restaurant-item-info">
        <div className="restaurant-item-name-rating">
          <p>{name}</p>
          <div>
            <p>{rating} <img src={assets.stars} alt="" /></p>
            
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <p className="restaurant-item-desc">{specialInstructions}</p>
      <p className="restaurant-item-price">${averagePrice}</p>
      {/* <p className="restaurant-item-delivery">{deliveryTime}</p> */}
      </NavLink>
=======
      <p className="restaurant-item-desc">{cuisine}</p>
      <p className="restaurant-item-price">{averagePrice}</p>
      <p className="restaurant-item-delivery">{deliveryTime}</p>
    </div>
>>>>>>> 57b3fbf0d85ad94354b573fc23ba31048fc256ed
  );
};

export default RestaurantItem;
