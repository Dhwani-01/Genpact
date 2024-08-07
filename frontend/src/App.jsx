import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import RestaurantForm from "./components/RestaurantForm/RestaurantForm";
import Profile from "./pages/Profile/Profile"

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/restaurant" element={<RestaurantForm/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
