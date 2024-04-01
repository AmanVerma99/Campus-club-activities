import React from 'react';
import NavBar from './Component/NavBar';
// import Post from './Component/Post'
import Profile from "./Component/Profile";
// import Page2 from './Component/Page2';
import './Body.css'; // Make sure this is correctly linked
import ClubsAll from './Component/ClubsAll';
import Footer from './Component/Footer';
import './Clubs.css';
const Body = () => {
  return (
    <div id="mainclubs">
      <div className='nav'>
        <NavBar />
      </div>
      <div className='centerPartclubs'>
        <div className="containerclubs">
          <div className="profileclubs">
            <Profile />
          </div>
          <div className='newsclubs'>
            <ClubsAll/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Body;
