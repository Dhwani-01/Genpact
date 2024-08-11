import React, { useContext } from "react";
import "./RestaurantItem.css";
import { NavLink } from "react-router-dom";

import { assets } from "../../assets/assets";
import { StoreContext } from "../StoreContext/StoreContext";
const RestaurantItem = ({id,name,openingTime,closingTime,logo,image_res,specialInstructions,averagePrice,rating}) => {
  const {url}=useContext(StoreContext);
  const imageUrl = (filename) => `${url}/api/restaurant/uploads_restaurant/${filename}`;
  return (
    <NavLink to={`/foodlist/${id}`} className="restaurant-item">
      <div className="restaurant-item-img-container">
        <img className="restaurant-item-image" src={imageUrl(image_res)} alt="Restaurant Image"/>
      </div>
      <div className="restaurant-item-info">
        <div className="restaurant-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
      </div>
      <p className="restaurant-item-desc">{specialInstructions}</p>
      <p className="restaurant-item-price">${averagePrice}</p>
      {/* <p className="restaurant-item-delivery">{deliveryTime}</p> */}
      </NavLink>
  );
};

export default RestaurantItem;
