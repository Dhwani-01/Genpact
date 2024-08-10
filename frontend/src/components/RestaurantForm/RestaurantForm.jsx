// // // import React, { useState, useContext } from 'react';
// // // import RestaurantFormStep1 from './RestaurantFormStep1';
// // // // import RestaurantFormStep2 from './RestaurantFormStep2';
// // // import RestaurantFormStep3 from './RestaurantFormStep3';
// // // import RestaurantFormStep4 from './RestaurantFormStep4';
// // // import './RestaurantForm.css'; // Import general CSS
// // // import './ProgressBar.css'; // Import progress bar CSS
// // // import axios from 'axios'; // Import axios for API requests
// // // import { StoreContext } from '../StoreContext/StoreContext'; // Import context

// // // const steps = [
// // //   'Restaurant Details',
// // //   // 'Add Food Items',
// // //   'Additional Details',
// // //   'Review & Submit'
// // // ];

// // // const RestaurantForm = () => {
// // //   const [step, setStep] = useState(1);
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     contact: '',
// // //     addressLine1: '',
// // //     addressLine2: '',
// // //     city: '',
// // //     state: '',
// // //     pincode: '',
// // //     // menu: [],
// // //     openingTime: '',
// // //     closingTime: '',
// // //     deliveryAreas: [],
// // //     logo: '',
// // //     image_res: '',
// // //     website: '',
// // //     paymentMethods: '',
// // //     specialInstructions: '',
// // //     averagePrice: '',
// // //     rating: '',
// // //     capacity: '',
// // //     userId:''
// // //   });


// // //   const { url, token } = useContext(StoreContext); // Access context values

// // //   const nextStep = () => setStep(step + 1);
// // //   const previousStep = () => setStep(step - 1);

// // //   const handleLabelClick = (index) => {
// // //     setStep(index + 1);
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const data = new FormData();
  
// // //     Object.keys(formData).forEach(key => {
// // //       const value = formData[key];
// // //       if (Array.isArray(value)) {
// // //         value.forEach(item => {
// // //           if (item instanceof File) {
// // //             data.append(`${key}[]`, item);
// // //           } else if (typeof item === 'object' && item !== null) {
// // //             data.append(key, JSON.stringify(item)); // Convert objects to JSON strings
// // //           } else {
// // //             data.append(key, item); // Append as is
// // //           }
// // //         });
// // //       } else if (value instanceof File) {
// // //         data.append(key, value); // Append file
// // //       } else if (typeof value === 'object' && value !== null) {
// // //         data.append(key, JSON.stringify(value)); // Convert objects to JSON strings
// // //       } else {
// // //         data.append(key, value); // Append as is
// // //       }
// // //     });
  
// // //     try {
// // //       const response = await axios.post(`${url}/api/restaurant`, data, {
// // //         headers: {
// // //           'Content-Type': 'multipart/form-data',
// // //           Authorization: `Bearer ${token}`
// // //         }
// // //       });
// // //       console.log('Restaurant created:', response.data);
// // //       // Handle successful submission
// // //     } catch (error) {
// // //       console.error('Error creating restaurant:', error.response ? error.response.data : error.message);
// // //       // Handle error
// // //     }
// // //   };
  
    

// // //   return (
// // //     <div className="restaurant-form">
// // //       <div className="progress-bar">
// // //         <div
// // //           className="progress-bar-fill"
// // //           style={{ width: `${(step / steps.length) * 100}%` }}
// // //         />
// // //       </div>
// // //       <div className="progress-bar-labels">
// // //         {steps.map((label, index) => (
// // //           <button
// // //             key={index}
// // //             className={`progress-bar-label ${index + 1 === step ? 'active' : ''}`}
// // //             onClick={() => handleLabelClick(index)}
// // //           >
// // //             {label}
// // //           </button>
// // //         ))}
// // //       </div>
// // //       <form onSubmit={handleSubmit}>
// // //         {step === 1 && <RestaurantFormStep1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
// // //         {/* {step === 2 && <RestaurantFormStep2 formData={formData} setFormData={setFormData} nextStep={nextStep} previousStep={previousStep} />} */}
// // //         {step === 2 && <RestaurantFormStep3 formData={formData} setFormData={setFormData} nextStep={nextStep} previousStep={previousStep} />}
// // //         {step === 3 && <RestaurantFormStep4 formData={formData} setFormData={setFormData} previousStep={previousStep} />}
// // //         {step === 3 && <button type="submit">Submit</button>}
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default RestaurantForm;


// // import React, { useState, useContext } from 'react';
// // import RestaurantFormStep1 from './RestaurantFormStep1';
// // // import RestaurantFormStep2 from './RestaurantFormStep2';
// // import RestaurantFormStep3 from './RestaurantFormStep3';
// // import RestaurantFormStep4 from './RestaurantFormStep4';
// // import './RestaurantForm.css'; // Import general CSS
// // import './ProgressBar.css'; // Import progress bar CSS
// // import axios from 'axios'; // Import axios for API requests
// // import { StoreContext } from '../StoreContext/StoreContext'; // Import context
// // import { decode } from 'jwt-decode';
// // // Import jwt-decode library

// // const steps = [
// //   'Restaurant Details',
// //   // 'Add Food Items',
// //   'Additional Details',
// //   'Review & Submit'
// // ];

// // const RestaurantForm = () => {
// //   const [step, setStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     contact: '',
// //     addressLine1: '',
// //     addressLine2: '',
// //     city: '',
// //     state: '',
// //     pincode: '',
// //     // menu: [],
// //     openingTime: '',
// //     closingTime: '',
// //     deliveryAreas: [],
// //     logo: '',
// //     image_res: '',
// //     website: '',
// //     paymentMethods: '',
// //     specialInstructions: '',
// //     averagePrice: '',
// //     rating: '',
// //     capacity: ''
// //   });

// //   const { url, token } = useContext(StoreContext); // Access context values

// //   // Decode token to extract userId
// //   const userId = token ? jwtDecode(token).id : '';

// //   const nextStep = () => setStep(step + 1);
// //   const previousStep = () => setStep(step - 1);

// //   const handleLabelClick = (index) => {
// //     setStep(index + 1);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const data = new FormData();
  
// //     Object.keys(formData).forEach(key => {
// //       const value = formData[key];
// //       if (Array.isArray(value)) {
// //         value.forEach(item => {
// //           if (item instanceof File) {
// //             data.append(`${key}[]`, item);
// //           } else if (typeof item === 'object' && item !== null) {
// //             data.append(key, JSON.stringify(item)); // Convert objects to JSON strings
// //           } else {
// //             data.append(key, item); // Append as is
// //           }
// //         });
// //       } else if (value instanceof File) {
// //         data.append(key, value); // Append file
// //       } else if (typeof value === 'object' && value !== null) {
// //         data.append(key, JSON.stringify(value)); // Convert objects to JSON strings
// //       } else {
// //         data.append(key, value); // Append as is
// //       }
// //     });
  
// //     try {
// //       const response = await axios.post(`${url}/api/restaurant`, data, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //           Authorization: `Bearer ${token}`
// //         }
// //       });
// //       console.log('Restaurant created:', response.data);
// //       // Handle successful submission
// //     } catch (error) {
// //       console.error('Error creating restaurant:', error.response ? error.response.data : error.message);
// //       // Handle error
// //     }
// //   };
  
// //   return (
// //     <div className="restaurant-form">
// //       <div className="progress-bar">
// //         <div
// //           className="progress-bar-fill"
// //           style={{ width: `${(step / steps.length) * 100}%` }}
// //         />
// //       </div>
// //       <div className="progress-bar-labels">
// //         {steps.map((label, index) => (
// //           <button
// //             key={index}
// //             className={`progress-bar-label ${index + 1 === step ? 'active' : ''}`}
// //             onClick={() => handleLabelClick(index)}
// //           >
// //             {label}
// //           </button>
// //         ))}
// //       </div>
// //       <form onSubmit={handleSubmit}>
// //         {step === 1 && <RestaurantFormStep1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
// //         {/* {step === 2 && <RestaurantFormStep2 formData={formData} setFormData={setFormData} nextStep={nextStep} previousStep={previousStep} />} */}
// //         {step === 2 && <RestaurantFormStep3 formData={formData} setFormData={setFormData} nextStep={nextStep} previousStep={previousStep} />}
// //         {step === 3 && <RestaurantFormStep4 formData={formData} setFormData={setFormData} previousStep={previousStep} />}
// //         {step === 3 && <button type="submit">Submit</button>}
// //       </form>
// //     </div>
// //   );
// // };

// // export default RestaurantForm;

// import { useState, useContext } from 'react';
// import RestaurantFormStep1 from './RestaurantFormStep1';
// // import RestaurantFormStep2 from './RestaurantFormStep2';
// import RestaurantFormStep3 from './RestaurantFormStep3';
// import RestaurantFormStep4 from './RestaurantFormStep4';
// import './RestaurantForm.css'; // Import general CSS
// import './ProgressBar.css'; // Import progress bar CSS
// import axios from 'axios'; // Import axios for API requests
// import { StoreContext } from '../StoreContext/StoreContext';
// import { decode } from 'jwt-decode'; // Updated import

// const steps = [
//   'Restaurant Details',
//   // 'Add Food Items',
//   'Additional Details',
//   'Review & Submit'
// ];

// const RestaurantForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     state: '',
//     pincode: '',
//     // menu: [],
//     openingTime: '',
//     closingTime: '',
//     deliveryAreas: [],
//     logo: '',
//     image_res: '',
//     website: '',
//     paymentMethods: '',
//     specialInstructions: '',
//     averagePrice: '',
//     rating: '',
//     capacity: ''
//   });

//   const { url, token } = useContext(StoreContext); // Access context values

//   // Extract userId from token using jwt-decode
//   const userId = token ? decode(token).id : null;

//   const nextStep = () => setStep(step + 1);
//   const previousStep = () => setStep(step - 1);

//   const handleLabelClick = (index) => {
//     setStep(index + 1);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();

//     Object.keys(formData).forEach(key => {
//       const value = formData[key];
//       if (Array.isArray(value)) {
//         value.forEach(item => {
//           if (item instanceof File) {
//             data.append(`${key}[]`, item);
//           } else if (typeof item === 'object' && item !== null) {
//             data.append(key, JSON.stringify(item)); // Convert objects to JSON strings
//           } else {
//             data.append(key, item); // Append as is
//           }
//         });
//       } else if (value instanceof File) {
//         data.append(key, value); // Append file
//       } else if (typeof value === 'object' && value !== null) {
//         data.append(key, JSON.stringify(value)); // Convert objects to JSON strings
//       } else {
//         data.append(key, value); // Append as is
//       }
//     });

//     try {
//       const response = await axios.post(`${url}/api/restaurant`, data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token}`
//         }
//       });
//       console.log('Restaurant created:', response.data);
//       // Handle successful submission
//     } catch (error) {
//       console.error('Error creating restaurant:', error.response ? error.response.data : error.message);
//       // Handle error
//     }
//   };

//   return (
//     <div className="restaurant-form">
//       <div className="progress-bar">
//         <div
//           className="progress-bar-fill"
//           style={{ width: `${(step / steps.length) * 100}%` }}
//         />
//       </div>
//       <div className="progress-bar-labels">
//         {steps.map((label, index) => (
//           <button
//             key={index}
//             className={`progress-bar-label ${index + 1 === step ? 'active' : ''}`}
//             onClick={() => handleLabelClick(index)}
//           >
//             {label}
//           </button>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit}>
//         {step === 1 && <RestaurantFormStep1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
//         {/* {step === 2 && <RestaurantFormStep2 formData={formData} setFormData={setFormData} nextStep={nextStep} previousStep={previousStep} />} */}
//         {step === 2 && <RestaurantFormStep3 formData={formData} setFormData={setFormData} nextStep={nextStep} previousStep={previousStep} />}
//         {step === 3 && <RestaurantFormStep4 formData={formData} setFormData={setFormData} previousStep={previousStep} />}
//         {step === 3 && <button type="submit">Submit</button>}
//       </form>
//     </div>
//   );
// };

// export default RestaurantForm;

import React, { useState, useContext } from 'react';
import RestaurantFormStep1 from './RestaurantFormStep1';
// import RestaurantFormStep2 from './RestaurantFormStep2';
import RestaurantFormStep3 from './RestaurantFormStep3';
import RestaurantFormStep4 from './RestaurantFormStep4';
import './RestaurantForm.css'; // Import general CSS
import './ProgressBar.css'; // Import progress bar CSS
import axios from 'axios'; // Import axios for API requests
import { StoreContext } from '../StoreContext/StoreContext';
import jwtDecode from 'jwt-decode'; // Use default import

const steps = [
  'Restaurant Details',
  // 'Add Food Items',
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
    // menu: [],
    openingTime: '',
    closingTime: '',
    deliveryAreas: [],
    logo: '',
    image_res: '',
    website: '',
    paymentMethods: '',
    specialInstructions: '',
    averagePrice: '',
    rating: '',
    capacity: '',
    user:''
  });

  const { url, token } = useContext(StoreContext); // Access context values

  // Extract userId from token using jwt-decode
  console.log('Token:', token);

  const userId = token ? jwtDecode(token).id : null;
  console.log('User Id:', userId);
  formData.user = userId;
  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);

  const handleLabelClick = (index) => {
    setStep(index + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.keys(formData).forEach(key => {
      const value = formData[key];
      if (Array.isArray(value)) {
        value.forEach(item => {
          if (item instanceof File) {
            data.append(`${key}[]`, item);
          } else if (typeof item === 'object' && item !== null) {
            data.append(key, JSON.stringify(item)); // Convert objects to JSON strings
          } else {
            data.append(key, item); // Append as is
          }
        });
      } else if (value instanceof File) {
        data.append(key, value); // Append file
      } else if (typeof value === 'object' && value !== null) {
        data.append(key, JSON.stringify(value)); // Convert objects to JSON strings
      } else {
        data.append(key, value); // Append as is
      }
    });

    try {
      const response = await axios.post(`${url}/api/restaurant`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Restaurant created:', response.data);
      // Handle successful submission
    } catch (error) {
      console.error('Error creating restaurant:', error.response ? error.response.data : error.message);
      // Handle error
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
        {/* {step === 2 && <RestaurantFormStep2 formData={formData} setFormData={setFormData} nextStep={nextStep} previousStep={previousStep} />} */}
        {step === 2 && <RestaurantFormStep3 formData={formData} setFormData={setFormData} nextStep={nextStep} previousStep={previousStep} />}
        {step === 3 && <RestaurantFormStep4 formData={formData} setFormData={setFormData} previousStep={previousStep} />}
        {step === 3 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default RestaurantForm;
