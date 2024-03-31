import React from 'react';
import NavBar from './Component/NavBar';
import Post from './Component/Post'
import Profile from "./Component/Profile";
// import Page2 from './Component/Page2';
import './Body.css'; // Make sure this is correctly linked
import ClubsAll from './Component/ClubsAll';
import Footer from './Component/Footer';
import News from './Component/News';

const Body = () => {
  return (
    <div id="main">
      <NavBar />
      <div className='centerPart'>
        <div className="container">
          <div className="profile">
            <Profile />
          </div>
          <div className='news'>
            <News/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Body;
