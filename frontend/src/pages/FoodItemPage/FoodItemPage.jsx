import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { assets } from "../../assets/assets";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../../components/StoreContext/StoreContext";
import "./FoodItemPage.css"; // Import the CSS file for styling

const FoodItemsPage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [error, setError] = useState(null);
  const { restaurantId } = useParams(); // Get restaurantId from URL
  const { url, token ,cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get(
          `${url}/api/food-items/${restaurantId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFoodItems(response.data.foodItems);
      } catch (error) {
        setError("Error fetching food items");
        console.error("Error fetching food items:", error);
      }
    };

    fetchFoodItems();
  }, [restaurantId, url, token]);

  const imageUrl = (filename) =>filename?
    `${url}/api/food-items/uploads_food/${filename}`: '';

  const handleOrder = (foodItem) => {
    // Handle ordering logic here
    navigate(`/restaurant/${restaurantId}/order/${foodItem._id}`);
    console.log("Order placed for:", foodItem.item);
  };

  if (error) return <div className="error-message">{error}</div>;
  if (foodItems.length === 0)
    return <div className="loading-message">Loading...</div>;

  return (
    <div className="food-display" id="food-display">
      <h2>Food Items</h2>
      <div className="food-display-list">
        {foodItems.map((item) => (
          <div key={item.id} className="food-item-card">
            <div className="food-item-img-container">
              {item.image && (
                <img
                  className="food-item-image"
                  src={imageUrl(item.image)}
                  alt={item.item}
                />
              )}
              {!cartItems[item._id] ? (
                <img
                  onClick={() => addToCart(item._id)}
                  src={assets.add_icon_white}
                  alt=""
                  className="add"
                />
              ) : (
                <div className="food-item-counter">
                  <img
                    onClick={() => removeFromCart(item._id)}
                    src={assets.remove_icon_red}
                    alt=""
                  />
                  <p>{cartItems[item._id]}</p>
                  <img
                    onClick={() => addToCart(item._id)}
                    src={assets.add_icon_green}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="food-item-info">
              <div className="food-item-name-rating">
                <p>{item.item}</p>
                <img src={assets.rating_starts} alt="" />
              </div>
            </div>
            <p className="food-item-description">{item.description}</p>
            <p className="food-item-price">Price: &#x20b9;{item.price}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItemsPage;
