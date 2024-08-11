import React, { useContext,useState ,useEffect} from "react";
import "./FoodList.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../StoreContext/StoreContext";
import { useParams } from "react-router-dom";

const FoodList = ({ category }) => {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const { url,add } = useContext(StoreContext);
  const [foodList, setFoodList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodList = async () => {
      try {
        const response = await fetch(`${url}/api/food-items/${id}`);
        const data = await response.json();
        setFoodList(data);
      } catch (error) {
        console.error("Error fetching food list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodList();
  }, [id, url]);

  if (loading) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
      {foodList.length > 0 ? (
        foodList.map((food_item) => {
          return (
            <FoodItem
              key={food_item._id}
              id={food_item._id}
              item={food_item.item}
              price={food_item.price}
              description={food_item.description}
              image={food_item.image}
              restaurantId={food_item.restaurantId}
            />
          );
})
      ) : (
        <p>No food items available for this restaurant.</p>
      )}
        {/* {food_list.map((food_item) => {
          // if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={food_item._id}
                id={food_item._id}
                item={food_item.item}
                price={food_item.price}
                description={food_item.description}
                image={food_item.image}
                restaurantId={food_item.restaurantId}
              />
            );
          // }
        })} */}
      </div>
    </div>
  );
};

export default FoodList;
