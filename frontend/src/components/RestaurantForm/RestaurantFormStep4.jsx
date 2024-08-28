import React from 'react';
import './RestaurantFormStep4.css'; // Import step-specific CSS

const RestaurantFormStep4 = ({ formData, previousStep }) => {
  const { logo, image_res,/* menu,*/ ...otherData } = formData;

  // Helper function to create object URLs
  const createObjectURL = (file) => {
    return file ? URL.createObjectURL(file) : '';
  };

  return (
    <div className="step-4">
      <h2>Step 4: Review & Submit</h2>
      
      {/* Display form data */}
      <div className="form-review">
        <h3>Restaurant Details:</h3>
        <pre>{JSON.stringify(otherData, null, 2)}</pre>

        {/* Display logo preview if available */}
        {logo && (
          <div className="image-preview-container">
            <h3>Logo:</h3>
            <img src={createObjectURL(logo)} alt="Restaurant Logo" className="image-preview" />
          </div>
        )}

        {/* Display image_res preview if available */}
        {image_res && (
          <div className="image-preview-container">
            <h3>Additional Image:</h3>
            <img src={createObjectURL(image_res)} alt="Restaurant Image" className="image-preview" />
          </div>
        )}

        {/* Display menu images preview if available */}
        {/* {menu.map((foodItem, index) => (
          foodItem.image && (
            <div key={index} className="image-preview-container">
              <h3>Food Item {index + 1} Image:</h3>
              <img src={createObjectURL(foodItem.image)} alt={`Food Item ${index + 1}`} className="image-preview" />
            </div>
          )
        ))} */}
      </div>

      <div className="navigation-buttons">
        <button type="button" onClick={previousStep}>Previous</button>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default RestaurantFormStep4;
