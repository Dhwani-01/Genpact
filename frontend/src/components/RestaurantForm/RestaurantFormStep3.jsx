import React, { useState } from 'react';
import './RestaurantFormStep3.css'; // Import step-specific CSS

const RestaurantFormStep3 = ({ formData, setFormData, nextStep, previousStep }) => {
  const [logoPreview, setLogoPreview] = useState(formData.logo ? URL.createObjectURL(formData.logo) : '');
  const [imagePreview, setImagePreview] = useState(formData.image_res ? URL.createObjectURL(formData.image_res) : '');

  const handleChange = (e) => {
    const { name, files } = e.target;

    if (files && files[0]) {
      const file = files[0];
      if (name === 'logo') {
        setLogoPreview(URL.createObjectURL(file));
        setFormData({ ...formData, logo: file });
      } else if (name === 'image_res') {
        setImagePreview(URL.createObjectURL(file));
        setFormData({ ...formData, image_res: file });
      }
    }
  };

  return (
    <div className="step-3">
      <h2>Step 3: Additional Details</h2>
      <input
        name="openingTime"
        type="time"
        value={formData.openingTime}
        onChange={(e) => setFormData({ ...formData, openingTime: e.target.value })}
        placeholder="Opening Time"
        required
      />
      <input
        name="closingTime"
        type="time"
        value={formData.closingTime}
        onChange={(e) => setFormData({ ...formData, closingTime: e.target.value })}
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
      
      {/* Logo Upload and Preview */}
      <div className="image-upload">
        <label htmlFor="logo">Upload Logo:</label>
        <input
          id="logo"
          name="logo"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        {logoPreview && <img src={logoPreview} alt="Logo Preview" className="image-preview" />}
      </div>
      
      {/* Image Upload and Preview */}
      <div className="image-upload">
        <label htmlFor="image_res">Upload Image:</label>
        <input
          id="image_res"
          name="image_res"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        {imagePreview && <img src={imagePreview} alt="Image Preview" className="image-preview" />}
      </div>

      <input
        name="website"
        type="url"
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        placeholder="Website URL"
      />
      <textarea
        name="paymentMethods"
        value={formData.paymentMethods}
        onChange={(e) => setFormData({ ...formData, paymentMethods: e.target.value })}
        placeholder="Payment Methods"
        required
      />
      <textarea
        name="specialInstructions"
        value={formData.specialInstructions}
        onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
        placeholder="Special Instructions"
      />
      <input
        name="averagePrice"
        type="number"
        value={formData.averagePrice}
        onChange={(e) => setFormData({ ...formData, averagePrice: e.target.value })}
        placeholder="Average Price"
        required
      />
      <input
        name="rating"
        type="number"
        step="0.1"
        value={formData.rating}
        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
        placeholder="Rating"
        required
      />
      <input
        name="capacity"
        type="number"
        value={formData.capacity}
        onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
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
