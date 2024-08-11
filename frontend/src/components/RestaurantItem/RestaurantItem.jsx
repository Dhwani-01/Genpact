import React from "react";
import "./RestaurantItem.css";
import { assets } from "../../assets/assets";
const RestaurantItem = ({id,name,cuisine,menu,openingTime,closingTime,deliveryTime,images,averagePrice,rating}) => {
  return (
    <div className="restaurant-item">
      <div className="restaurant-item-img-container">
        <img
          className="restaurant-item-image"
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
          alt=""
        />
      </div>
      <div className="restaurant-item-info">
        <div className="restaurant-item-name-rating">
          <p>{name}</p>
          <div>
            <p>{rating} <img src={assets.stars} alt="" /></p>
            
          </div>
        </div>
      </div>
      <p className="restaurant-item-desc">{cuisine}</p>
      <p className="restaurant-item-price">{averagePrice}</p>
      <p className="restaurant-item-delivery">{deliveryTime}</p>
    </div>
  );
};

export default RestaurantItem;
