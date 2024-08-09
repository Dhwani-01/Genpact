import React,{useContext} from 'react'
import { StoreContext } from '../StoreContext/StoreContext'
import "./RestaurantList.css"
import RestaurantItem from "../../components/RestaurantItem/RestaurantItem"
const RestaurantList = () => {
    const {restaurantList}=useContext(StoreContext);
  return (
     
    <div>
        <div className="restaurant-display" id="restaurant-display">
      <h2>Restaurants/Cafes with online food delivery</h2>
      <div className="restaurant-display-list">
        {restaurantList.map((item) => {
        
            return (
              <RestaurantItem
                key={item._id}
                id={item._id}
                name={item.name}
                email={item.email}
                contact={item.contact}
                addressLine1={item.addressLine1}
                addressLine2={item.addressLine2}
                city={item.city}
                state={item.state}
                pincode={item.pincode}
                cuisine={item.cuisine}
                menu={item.menu}
                openingTime={item.openingTime}
                closingTime={item.closingTime}
                deliveryAreas={item.deliveryAreas}
                deliveryTime={item.deliveryTime}
                logo={item.logo}
                images={item.images}
                website={item.website}
                paymentMethods={item.paymentMethods}
                specialInstructions={item.specialInstructions}
                averagePrice={item.averagePrice}
                rating={item.rating}
                capacity={item.capacity}
              />
            );
          
        })}
      </div>
    </div>
      
    </div>
  )
}

export default RestaurantList
