import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
const NavBar = () => {
  // State to manage hamburger menu toggle
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="main">
      
      <nav className="navbar">
        <div className='left'>
          <Link to="/" className="nav-brand">BrandName</Link>
          <form>
            <div className='searchn'>
              <input className="search" type="text" placeholder='SEARCH'/>
              <button className="search-btn" type='submit'>Search</button>
            </div>
          </form>
        </div>
        <div className='right'>
          <div className={`nav-menu ${isOpen ? 'open' : ''}`} id="nav-menu">
            <Link to="/" className="nav-item"><i className="fa-solid fa-house"></i> Home</Link>
            <Link to="/Clubs" className="nav-item"><i class="ri-copyright-fill"></i> Clubs</Link>
            <Link to="/login" className="nav-item"><i class="ri-login-box-fill"></i> login</Link>
            {/* <Link to="/signUp" className="nav-item"><i className="fa-solid fa-envelope"></i> signup</Link> */}
            
            <div class="dropdown">
              <button class="dropbtn">Dropdown 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content" id='aallo'>
                <Link to="/Newsf" className="nav-item"> News </Link>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            
          </div>
          
          <div className="hamburger" id="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
