// import React, { useContext } from "react";
// import "./FoodList.css";
// import FoodItem from "../FoodItem/FoodItem";
// import { StoreContext } from "../StoreContext/StoreContext";

// const FoodList = ({ category }) => {
//   const { food_list } = useContext(StoreContext);
//   console.log("food",food_list)

//   return (
//     <div className="food-display" id="food-display">
//       <h2>Top dishes near you</h2>
//       <div className="food-display-list">
//         {food_list.map((item) => {
//           if (category === "All" || category === item.category) {
//             return (
//               <FoodItem
//                 key={item._id}
//                 id={item._id}
//                 name={item.item}
//                 price={item.price}
//                 description={item.description}
//                 image={item.image} 
//               />
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// };

// export default FoodList;


import React, { useContext, useState } from "react";
import "./FoodList.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../StoreContext/StoreContext";

const FoodList = () => {
  const { food_list } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter food items based on the search query (name)
  const filteredItems = food_list.filter((item) => {
    return item.item && item.item.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        className="food-search-bar"
        placeholder="Search food..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="food-display-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.item}  // Updated from `name={item.name}` to `name={item.item}`
              price={item.price}
              description={item.description}
              image={item.image} 
            />
          ))
        ) : (
          <p>No food items found</p>
        )}
      </div>
    </div>
  );
};

export default FoodList;
