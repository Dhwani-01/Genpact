import React from 'react';
import './RestaurantFormStep4.css'; // Import step-specific CSS

const RestaurantFormStep4 = ({ formData, setFormData, previousStep }) => {
  return (
    <div className="step-4">
      <h2>Step 4: Review & Submit</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <div className="navigation-buttons">
        <button type="button" onClick={previousStep}>Previous</button>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default RestaurantFormStep4;
