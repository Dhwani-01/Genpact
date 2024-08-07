import React from 'react';
import './RestaurantFormStep3.css'; // Import step-specific CSS

const RestaurantFormStep3 = ({ formData, setFormData, nextStep, previousStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="step-3">
      <h2>Step 3: Additional Details</h2>
      <input
        name="cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        placeholder="Cuisine Type"
        required
      />
      <input
        name="openingTime"
        type="time"
        value={formData.openingTime}
        onChange={handleChange}
        placeholder="Opening Time"
        required
      />
      <input
        name="closingTime"
        type="time"
        value={formData.closingTime}
        onChange={handleChange}
        placeholder="Closing Time"
        required
      />
      <textarea
        name="deliveryAreas"
        value={formData.deliveryAreas.join(', ')}
        onChange={(e) => setFormData({ ...formData, deliveryAreas: e.target.value.split(', ').map(area => area.trim()) })}
        placeholder="Delivery Areas (comma separated)"
        required
      />
      <input
        name="deliveryTime"
        value={formData.deliveryTime}
        onChange={handleChange}
        placeholder="Delivery Time"
        required
      />
      <input
        name="logo"
        type="url"
        value={formData.logo}
        onChange={handleChange}
        placeholder="Logo URL"
      />
      <input
        name="images"
        type="url"
        value={formData.images.join(', ')}
        onChange={(e) => setFormData({ ...formData, images: e.target.value.split(', ').map(img => img.trim()) })}
        placeholder="Images URLs (comma separated)"
      />
      <input
        name="website"
        type="url"
        value={formData.website}
        onChange={handleChange}
        placeholder="Website URL"
      />
      <textarea
        name="paymentMethods"
        value={formData.paymentMethods}
        onChange={handleChange}
        placeholder="Payment Methods"
        required
      />
      <textarea
        name="specialInstructions"
        value={formData.specialInstructions}
        onChange={handleChange}
        placeholder="Special Instructions"
      />
      <input
        name="averagePrice"
        type="number"
        value={formData.averagePrice}
        onChange={handleChange}
        placeholder="Average Price"
        required
      />
      <input
        name="rating"
        type="number"
        step="0.1"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Rating"
        required
      />
      <input
        name="capacity"
        type="number"
        value={formData.capacity}
        onChange={handleChange}
        placeholder="Capacity"
        required
      />
      <div className="navigation-buttons">
        <button type="button" onClick={previousStep}>Previous</button>
        <button type="button" onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default RestaurantFormStep3;
