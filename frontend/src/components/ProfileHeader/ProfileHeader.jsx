// // // // // // src/components/ProfileHeader.js

// // // // // import React, { useState } from 'react';

// // // // // import RestaurantForm from '../RestaurantForm/RestaurantForm.jsx';
// // // // // import "./ProfileHeader.css";

// // // // // const ProfileHeader = () => {
// // // // //   const [activeSection, setActiveSection] = useState('Orders'); // Default to 'Orders'

// // // // //   const renderContent = () => {
// // // // //     switch (activeSection) {
      
// // // // //       case 'ManageRestaurant':
// // // // //         return <RestaurantForm />;
// // // // //       default:
// // // // //         return <div className="welcome-message"><p>Welcome !!</p></div>;
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="container">
// // // // //       <header className="header">
// // // // //         <div className="header-content">
// // // // //           <img src="https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png" alt="Profile" />
// // // // //           <button>Edit Profile</button>
// // // // //         </div>
// // // // //       </header>
// // // // //       <div className="main-content">
// // // // //         <aside className="sidebar">
// // // // //           <div className="sidebar-options">
// // // // //             <div 
// // // // //               className={`sidebar-option ${activeSection === 'Orders' ? 'active' : ''}`}
// // // // //               onClick={() => setActiveSection('Orders')}
// // // // //             >
// // // // //               <p>Orders</p>
// // // // //             </div>
// // // // //             <div 
// // // // //               className={`sidebar-option ${activeSection === 'Favourites' ? 'active' : ''}`}
// // // // //               onClick={() => setActiveSection('Favourites')}
// // // // //             >
// // // // //               <p>Favourites</p>
// // // // //             </div>
// // // // //             <div 
// // // // //               className={`sidebar-option ${activeSection === 'Payments' ? 'active' : ''}`}
// // // // //               onClick={() => setActiveSection('Payments')}
// // // // //             >
// // // // //               <p>Payments</p>
// // // // //             </div>
// // // // //             <div 
// // // // //               className={`sidebar-option ${activeSection === 'Addresses' ? 'active' : ''}`}
// // // // //               onClick={() => setActiveSection('Addresses')}
// // // // //             >
// // // // //               <p>Addresses</p>
// // // // //             </div>
// // // // //             <div 
// // // // //               className={`sidebar-option ${activeSection === 'ManageRestaurant' ? 'active' : ''}`}
// // // // //               onClick={() => setActiveSection('ManageRestaurant')}
// // // // //             >
// // // // //               <p>Manage Restaurant</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </aside>
// // // // //         <div className="right-side-content">
// // // // //           {renderContent()}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProfileHeader;

// // // // // src/components/ProfileHeader.js

// // // // import React, { useState, useEffect } from 'react';
// // // // import RestaurantForm from '../RestaurantForm/RestaurantForm.jsx';
// // // // import './ProfileHeader.css';
// // // // import axios from 'axios';

// // // // const ProfileHeader = () => {
// // // //   const [activeSection, setActiveSection] = useState('Orders');
// // // //   const [canViewRestaurant, setCanViewRestaurant] = useState(false);

// // // //   useEffect(() => {
// // // //     const fetchRestaurantAccess = async () => {
// // // //       try {
// // // //         const response = await axios.get('/api/restaurant/view-restaurant');
// // // //         setCanViewRestaurant(response.data.canView);
// // // //       } catch (error) {
// // // //         console.error('Error fetching restaurant access:', error);
// // // //       }
// // // //     };

// // // //     fetchRestaurantAccess();
// // // //   }, []);

// // // //   const renderContent = () => {
// // // //     switch (activeSection) {
// // // //       case 'ManageRestaurant':
// // // //         return <RestaurantForm />;
// // // //       default:
// // // //         return <div className="welcome-message"><p>Welcome !!</p></div>;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="container">
// // // //       <header className="header">
// // // //         <div className="header-content">
// // // //           <img src="https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png" alt="Profile" />
// // // //           <button>Edit Profile</button>
// // // //         </div>
// // // //       </header>
// // // //       <div className="main-content">
// // // //         <aside className="sidebar">
// // // //           <div className="sidebar-options">
// // // //             <div 
// // // //               className={`sidebar-option ${activeSection === 'Orders' ? 'active' : ''}`}
// // // //               onClick={() => setActiveSection('Orders')}
// // // //             >
// // // //               <p>Orders</p>
// // // //             </div>
// // // //             <div 
// // // //               className={`sidebar-option ${activeSection === 'Favourites' ? 'active' : ''}`}
// // // //               onClick={() => setActiveSection('Favourites')}
// // // //             >
// // // //               <p>Favourites</p>
// // // //             </div>
// // // //             <div 
// // // //               className={`sidebar-option ${activeSection === 'Payments' ? 'active' : ''}`}
// // // //               onClick={() => setActiveSection('Payments')}
// // // //             >
// // // //               <p>Payments</p>
// // // //             </div>
// // // //             <div 
// // // //               className={`sidebar-option ${activeSection === 'Addresses' ? 'active' : ''}`}
// // // //               onClick={() => setActiveSection('Addresses')}
// // // //             >
// // // //               <p>Addresses</p>
// // // //             </div>
// // // //             {canViewRestaurant && (
// // // //               <div 
// // // //                 className={`sidebar-option ${activeSection === 'ViewRestaurant' ? 'active' : ''}`}
// // // //                 onClick={() => setActiveSection('ViewRestaurant')}
// // // //               >
// // // //                 <p>View Restaurant</p>
// // // //               </div>
// // // //             )}
// // // //             <div 
// // // //               className={`sidebar-option ${activeSection === 'ManageRestaurant' ? 'active' : ''}`}
// // // //               onClick={() => setActiveSection('ManageRestaurant')}
// // // //             >
// // // //               <p>Manage Restaurant</p>
// // // //             </div>
// // // //           </div>
// // // //         </aside>
// // // //         <div className="right-side-content">
// // // //           {renderContent()}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProfileHeader;

// // // // src/components/ProfileHeader.js

// // // import React, { useState, useEffect } from 'react';
// // // import RestaurantForm from '../RestaurantForm/RestaurantForm.jsx';
// // // import './ProfileHeader.css';
// // // import axios from 'axios';

// // // const ProfileHeader = () => {
// // //   const [activeSection, setActiveSection] = useState('Orders');
// // //   const [canViewRestaurant, setCanViewRestaurant] = useState(false);

// // //   const { url, token } = useContext(StoreContext); // Access context values

// // //   // Extract userId from token using jwt-decode
// // //   console.log('Token:', token);

// // //   useEffect(() => {
// // //     const fetchRestaurantAccess = async () => {
      
// // //       try {
// // //         const response = await axios.get(`${url}/api/restaurant/view-restaurant`, {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`
// // //           }
// // //         });
// // //         setCanViewRestaurant(response.data.canView);
// // //       } catch (error) {
// // //         console.error('Error fetching restaurant access:', error);
// // //       }
// // //     };

// // //     fetchRestaurantAccess();
// // //   }, []);

// // //   const renderContent = () => {
// // //     switch (activeSection) {
// // //       case 'ManageRestaurant':
// // //         return <RestaurantForm />;
// // //       default:
// // //         return <div className="welcome-message"><p>Welcome !!</p></div>;
// // //     }
// // //   };

// // //   return (
// // //     <div className="container">
// // //       <header className="header">
// // //         <div className="header-content">
// // //           <img src="https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png" alt="Profile" />
// // //           <button>Edit Profile</button>
// // //         </div>
// // //       </header>
// // //       <div className="main-content">
// // //         <aside className="sidebar">
// // //           <div className="sidebar-options">
// // //             <div 
// // //               className={`sidebar-option ${activeSection === 'Orders' ? 'active' : ''}`}
// // //               onClick={() => setActiveSection('Orders')}
// // //             >
// // //               <p>Orders</p>
// // //             </div>
// // //             <div 
// // //               className={`sidebar-option ${activeSection === 'Favourites' ? 'active' : ''}`}
// // //               onClick={() => setActiveSection('Favourites')}
// // //             >
// // //               <p>Favourites</p>
// // //             </div>
// // //             <div 
// // //               className={`sidebar-option ${activeSection === 'Payments' ? 'active' : ''}`}
// // //               onClick={() => setActiveSection('Payments')}
// // //             >
// // //               <p>Payments</p>
// // //             </div>
// // //             <div 
// // //               className={`sidebar-option ${activeSection === 'Addresses' ? 'active' : ''}`}
// // //               onClick={() => setActiveSection('Addresses')}
// // //             >
// // //               <p>Addresses</p>
// // //             </div>
// // //             {canViewRestaurant && (
// // //               <div 
// // //                 className={`sidebar-option ${activeSection === 'ViewRestaurant' ? 'active' : ''}`}
// // //                 onClick={() => setActiveSection('ViewRestaurant')}
// // //               >
// // //                 <p>View Restaurant</p>
// // //               </div>
// // //             )}
// // //             <div 
// // //               className={`sidebar-option ${activeSection === 'ManageRestaurant' ? 'active' : ''}`}
// // //               onClick={() => setActiveSection('ManageRestaurant')}
// // //             >
// // //               <p>Manage Restaurant</p>
// // //             </div>
// // //           </div>
// // //         </aside>
// // //         <div className="right-side-content">
// // //           {renderContent()}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProfileHeader;


// // import React, { useState, useEffect, useContext } from 'react';
// // import RestaurantForm from '../RestaurantForm/RestaurantForm.jsx';
// // import './ProfileHeader.css';
// // import axios from 'axios';
// // import { StoreContext } from '../StoreContext/StoreContext'; // Ensure you import StoreContext correctly

// // const ProfileHeader = () => {
// //   const [activeSection, setActiveSection] = useState('Orders');
// //   const [canViewRestaurant, setCanViewRestaurant] = useState(false);

// //   const { url, token } = useContext(StoreContext); // Access context values

// //   useEffect(() => {
// //     const fetchRestaurantAccess = async () => {
// //       try {
// //         const response = await axios.get(`${url}/api/restaurant/view-restaurant`, {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });
// //         setCanViewRestaurant(response.data.canView);
// //       } catch (error) {
// //         console.error('Error fetching restaurant access:', error);
// //       }
// //     };

// //     fetchRestaurantAccess();
// //   }, [url, token]); // Add dependencies to the useEffect

// //   const renderContent = () => {
// //     switch (activeSection) {
// //       case 'ManageRestaurant':
// //         return <RestaurantForm />;
// //       default:
// //         return <div className="welcome-message"><p>Welcome !!</p></div>;
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <header className="header">
// //         <div className="header-content">
// //           <img src="https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png" alt="Profile" />
// //           <button>Edit Profile</button>
// //         </div>
// //       </header>
// //       <div className="main-content">
// //         <aside className="sidebar">
// //           <div className="sidebar-options">
// //             <div 
// //               className={`sidebar-option ${activeSection === 'Orders' ? 'active' : ''}`}
// //               onClick={() => setActiveSection('Orders')}
// //             >
// //               <p>Orders</p>
// //             </div>
// //             <div 
// //               className={`sidebar-option ${activeSection === 'Favourites' ? 'active' : ''}`}
// //               onClick={() => setActiveSection('Favourites')}
// //             >
// //               <p>Favourites</p>
// //             </div>
// //             <div 
// //               className={`sidebar-option ${activeSection === 'Payments' ? 'active' : ''}`}
// //               onClick={() => setActiveSection('Payments')}
// //             >
// //               <p>Payments</p>
// //             </div>
// //             <div 
// //               className={`sidebar-option ${activeSection === 'Addresses' ? 'active' : ''}`}
// //               onClick={() => setActiveSection('Addresses')}
// //             >
// //               <p>Addresses</p>
// //             </div>
// //             {canViewRestaurant && (
// //               <div 
// //                 className={`sidebar-option ${activeSection === 'ViewRestaurant' ? 'active' : ''}`}
// //                 onClick={() => setActiveSection('ViewRestaurant')}
// //               >
// //                 <p>View Restaurant</p>
// //               </div>
// //             )}
// //             <div 
// //               className={`sidebar-option ${activeSection === 'ManageRestaurant' ? 'active' : ''}`}
// //               onClick={() => setActiveSection('ManageRestaurant')}
// //             >
// //               <p>Manage Restaurant</p>
// //             </div>
// //           </div>
// //         </aside>
// //         <div className="right-side-content">
// //           {renderContent()}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfileHeader;


// // src/components/ProfileHeader.js

// import React, { useState, useEffect, useContext } from 'react';
// import RestaurantForm from '../RestaurantForm/RestaurantForm.jsx';
// import ViewRestaurant from '../ViewRestaurant/ViewRestaurant.jsx';
// import './ProfileHeader.css';
// import axios from 'axios';
// import { StoreContext } from '../StoreContext/StoreContext';

// const ProfileHeader = () => {
//   const [activeSection, setActiveSection] = useState('Orders');
//   const [canViewRestaurant, setCanViewRestaurant] = useState(false);

//   const { url, token } = useContext(StoreContext);

//   useEffect(() => {
//     const fetchRestaurantAccess = async () => {
//       try {
//         const response = await axios.get(`${url}/api/restaurant/view-restaurant`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setCanViewRestaurant(response.data.restaurant ? true : false);
//       } catch (error) {
//         console.error('Error fetching restaurant access:', error);
//       }
//     };

//     fetchRestaurantAccess();
//   }, [url, token]);

//   const renderContent = () => {
//     switch (activeSection) {
//       case 'ManageRestaurant':
//         return <RestaurantForm />;
//       default:
//         return <div className="welcome-message"><p>Welcome !!</p></div>;
//     }
//   };

//   return (
//     <div className="container">
//       <header className="header">
//         <div className="header-content">
//           <img src="https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png" alt="Profile" />
//           <button>Edit Profile</button>
//         </div>
//       </header>
//       <div className="main-content">
//         <aside className="sidebar">
//           <div className="sidebar-options">
//             <div 
//               className={`sidebar-option ${activeSection === 'Orders' ? 'active' : ''}`}
//               onClick={() => setActiveSection('Orders')}
//             >
//               <p>Orders</p>
//             </div>
//             <div 
//               className={`sidebar-option ${activeSection === 'Favourites' ? 'active' : ''}`}
//               onClick={() => setActiveSection('Favourites')}
//             >
//               <p>Favourites</p>
//             </div>
//             <div 
//               className={`sidebar-option ${activeSection === 'Payments' ? 'active' : ''}`}
//               onClick={() => setActiveSection('Payments')}
//             >
//               <p>Payments</p>
//             </div>
//             <div 
//               className={`sidebar-option ${activeSection === 'Addresses' ? 'active' : ''}`}
//               onClick={() => setActiveSection('Addresses')}
//             >
//               <p>Addresses</p>
//             </div>
//             {canViewRestaurant && (
//               <div 
//                 className={`sidebar-option ${activeSection === 'ViewRestaurant' ? 'active' : ''}`}
//                 onClick={() => /view-restaurant}
//               >
//                 <p>View Restaurant</p>
//               </div>
//             )}
//             <div 
//               className={`sidebar-option ${activeSection === 'ManageRestaurant' ? 'active' : ''}`}
//               onClick={() => setActiveSection('ManageRestaurant')}
//             >
//               <p>Manage Restaurant</p>
//             </div>
//           </div>
//         </aside>
//         <div className="right-side-content">
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileHeader;

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import RestaurantForm from '../RestaurantForm/RestaurantForm.jsx';
import ViewRestaurant from '../ViewRestaurant/ViewRestaurant.jsx';
import './ProfileHeader.css';
import axios from 'axios';
import { StoreContext } from '../StoreContext/StoreContext';

const ProfileHeader = () => {
  const [activeSection, setActiveSection] = useState('Orders');
  const [canViewRestaurant, setCanViewRestaurant] = useState(false);
  const { url, token } = useContext(StoreContext);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchRestaurantAccess = async () => {
      try {
        const response = await axios.get(`${url}/api/restaurant/view-restaurant`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCanViewRestaurant(response.data.restaurant ? true : false);
      } catch (error) {
        console.error('Error fetching restaurant access:', error);
      }
    };

    fetchRestaurantAccess();
  }, [url, token]);

  const renderContent = () => {
    switch (activeSection) {
      case 'ManageRestaurant':
        return <RestaurantForm />;
      case 'ViewRestaurant':
        return <ViewRestaurant />; // Render ViewRestaurant component
      default:
        return <div className="welcome-message"><p>Welcome !!</p></div>;
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <img src="https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png" alt="Profile" />
          <button>Edit Profile</button>
        </div>
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <div className="sidebar-options">
            <div 
              className={`sidebar-option ${activeSection === 'Orders' ? 'active' : ''}`}
              onClick={() => setActiveSection('Orders')}
            >
              <p>Orders</p>
            </div>
            <div 
              className={`sidebar-option ${activeSection === 'Favourites' ? 'active' : ''}`}
              onClick={() => setActiveSection('Favourites')}
            >
              <p>Favourites</p>
            </div>
            <div 
              className={`sidebar-option ${activeSection === 'Payments' ? 'active' : ''}`}
              onClick={() => setActiveSection('Payments')}
            >
              <p>Payments</p>
            </div>
            <div 
              className={`sidebar-option ${activeSection === 'Addresses' ? 'active' : ''}`}
              onClick={() => setActiveSection('Addresses')}
            >
              <p>Addresses</p>
            </div>
            {canViewRestaurant && (
              <div 
                className={`sidebar-option ${activeSection === 'ViewRestaurant' ? 'active' : ''}`}
                onClick={() => navigate('/dashboard-restaurant')} // Navigate to /view-restaurant
              >
                <p>View Restaurant</p>
              </div>
            )}
            <div 
              className={`sidebar-option ${activeSection === 'ManageRestaurant' ? 'active' : ''}`}
              onClick={() => setActiveSection('ManageRestaurant')}
            >
              <p>Manage Restaurant</p>
            </div>
          </div>
        </aside>
        <div className="right-side-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
