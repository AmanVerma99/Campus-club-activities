import React from 'react';
import NavBar from './Component/NavBar';
import Post from './Component/Post'
import Profile from "./Component/Profile";
// import Page2 from './Component/Page2';
import './Body.css'; // Make sure this is correctly linked
import Intraction from './Component/Intraction';
import Footer from './Component/Footer';

const Body = () => {
  return (
    <div id="main">
      <NavBar />
      {/* <div className='centerPart'> */}
        <div className="container">
          <div className="profile">
            <Profile />
          </div>
          <div className='news'>
            <Post/>
            <Intraction/>
          </div>
        </div>
        <Footer/>
      {/* </div> */}
    </div>
  );
};

export default Body;
