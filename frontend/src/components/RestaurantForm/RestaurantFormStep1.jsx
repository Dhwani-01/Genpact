import React from 'react';
import './RestaurantFormStep1.css'; // Import step-specific CSS

const RestaurantFormStep1 = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="step-1">
      <h2>Step 1: Restaurant Details</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Restaurant Name"
        required
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="contact"
        type="tel"
        value={formData.contact}
        onChange={handleChange}
        placeholder="Contact Number"
        required
      />
      <input
        name="addressLine1"
        value={formData.addressLine1}
        onChange={handleChange}
        placeholder="Address Line 1"
        required
      />
      <input
        name="addressLine2"
        value={formData.addressLine2}
        onChange={handleChange}
        placeholder="Address Line 2"
      />
      <input
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        required
      />
      <input
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State"
        required
      />
      <input
        name="pincode"
        type="number"
        value={formData.pincode}
        onChange={handleChange}
        placeholder="Pincode"
        required
      />
      <button type="button" onClick={nextStep}>Next</button>
    </div>
  );
};

export default RestaurantFormStep1;
