import React,{useContext} from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./ExploreMenu.css";
import { StoreContext } from "../StoreContext/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {
  
  const {menu_list}=useContext(StoreContext);
  const navigate=useNavigate();

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      {/* <button
        onClick={() => navigate('/all-restaurants')} // Navigate to /view-restaurant
        > RESTAURANTS </button> */}
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array. Our mission is
        to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
