import React ,{useContext} from 'react'
import { NavLink } from 'react-router-dom';
import "./ProfileHeader.css"
const ProfileHeader = () => {
  return(

    <div className="sidebar">
        <div className='profile'>
            <img src="https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png" alt="" />
            <button>Edit Profile</button>
        </div>
        <hr />
    <div className="sidebar-options">
        <div className="sidebar-option">
        <p>Orders</p>
        </div>
        <div className="sidebar-option">
        <p>Favourites</p>
        </div>
        <div className="sidebar-option">
        <p>Payments</p>
        </div>
        <div className="sidebar-option">
        <p>Addresses</p>
        </div>
        <NavLink to="/restaurant" className="sidebar-option">
        <p>Manage Restaurant</p>
        </NavLink>
        
        
        
        
        
      
    </div>
  </div>
    
  );
};



export default ProfileHeader
