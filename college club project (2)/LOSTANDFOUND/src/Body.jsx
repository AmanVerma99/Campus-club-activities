import React from 'react';
import NavBar from './Component/NavBar';
import Post from './Component/Post'
import Profile from "./Component/Profile";
// import Page2 from './Component/Page2';
import './Body.css'; // Make sure this is correctly linked
import Intraction from './Component/Intraction';
import Footer from './Component/Footer';
import axios from 'axios';
import { useState,useEffect } from 'react';
//  /api/add
const Body = () => {
  const [somedata, setsomedata] = useState([]);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/profile');
            setsomedata(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); 
      }, []);

      const [formData, setFormData] = useState({
        email: "", 
        clubName : somedata.club_name,
      });
      
      
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      console.log(formData);
      const response = await axios.post('http://localhost:3000/api/add', formData
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
      );
      console.log(response.data);
      window.location.href='./';
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };


  return (
    
    <div id="mainb">
      <NavBar />
      {/* <div className='centerPart'> */}
        <div className="containerb">
          <div className="profileb">
            <Profile />
            <form onSubmit={handleSubmit}>
              <h4>add member</h4>
              <div className='addMember'>
                <input className="" type="text" name="email" placeholder='Enter email to add' onChange={handleChange} value={formData.email} required/>
              </div>
              <input type="submit" />
            </form>
          </div>
          <div className='newsb'>
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
