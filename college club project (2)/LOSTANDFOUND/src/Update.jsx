import React from 'react';
import NavBar from './Component/NavBar';
import Profile from "./Component/Profile";
import Footer from './Component/Footer';
import './Clubs.css';
import './Update.css'
import UpdateProfile from './Component/updateProfile';
const update = () => {
  return (
    <div id="mainclubsUpdate">
      <div className='navclubsUpdate'>
        <NavBar />
      </div>
      <div className='centerPartclubsUpdate'>
        <div className="containerclubsUpdate">
          <div className="profileclubsUpdate">
            <Profile />
          </div>
          <div className='newsclubsUpdate'>
            <UpdateProfile/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default update;
