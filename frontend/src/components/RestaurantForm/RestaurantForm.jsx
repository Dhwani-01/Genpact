import React, { useState, useContext } from 'react';
import RestaurantFormStep1 from './RestaurantFormStep1';
import RestaurantFormStep2 from './RestaurantFormStep2';
import RestaurantFormStep3 from './RestaurantFormStep3';
import RestaurantFormStep4 from './RestaurantFormStep4';
import './RestaurantForm.css'; // Import general CSS
import './ProgressBar.css'; // Import progress bar CSS
import axios from 'axios'; // Import axios for API requests
import { StoreContext } from '../StoreContext/StoreContext'; // Import context

const steps = [
  'Restaurant Details',
  'Add Food Items',
  'Additional Details',
  'Review & Submit'
];

const RestaurantForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    cuisine: '',
    menu: [],
    openingTime: '',
    closingTime: '',
    deliveryAreas: [],
    deliveryTime: '',
    logo: '',
    images: [],
    website: '',
    paymentMethods: '',
    specialInstructions: '',
    averagePrice: '',
    rating: '',
    capacity: ''
  });


  const { url, token } = useContext(StoreContext); // Access context values

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);

  const handleLabelClick = (index) => {
    setStep(index + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/restaurant`, formData, {
        headers: { Authorization: `Bearer ${token}` } // Use token if required
      });
      console.log('Restaurant created:', response.data);
      // Handle successful submission, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error creating restaurant:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="restaurant-form">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${(step / steps.length) * 100}%` }}
        />
      </div>
      <div className="progress-bar-labels">
        {steps.map((label, index) => (
          <button
            key={index}
            className={`progress-bar-label ${index + 1 === step ? 'active' : ''}`}
            onClick={() => handleLabelClick(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {step === 1 && <RestaurantFormStep1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
        {step === 2 && <RestaurantFormStep2 formData={formData} setFormData={setFormData} nextStep={nextStep} previousStep={previousStep} />}
        {step === 3 && <RestaurantFormStep3 formData={formData} setFormData={setFormData} nextStep={nextStep} previousStep={previousStep} />}
        {step === 4 && <RestaurantFormStep4 formData={formData} setFormData={setFormData} previousStep={previousStep} />}
        {step === 4 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default RestaurantForm;
