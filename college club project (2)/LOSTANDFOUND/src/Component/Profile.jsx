import './Profile.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// If you have a local image you'd like to use, import it here
// import profileImage from './path/to/your-image.jpg';
// import { setData } from '../different_pages/login';
const Profile = () => {
  const [data, setData] = useState([]);
  const [profile,setprofile] = useState('null');
  useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/profile');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();

      }, []);


  return (
    <div className="profilep">
      <div className="profile-headerp">
        {/* <img className="profile-photop" src="https://th.bing.com/th/id/R.0db13b95ec6db66a31ece10a15389f41?rik=elv2rsalBmOU1w&riu=http%3a%2f%2ffullhdpictures.com%2fwp-content%2fuploads%2f2016%2f08%2fBusinessman-Pics.jpg&ehk=Y3bcy81Pf104Nv35%2fkHdj2OIGlqB9xeDhcTYNefpl%2bk%3d&risl=&pid=ImgRaw&r=0" alt="Profile" /> */}
        
        {/* <img className="profile-photop"  src={`/api/profile/${data.email_id}`} alt={`Profile of ${'aman'}`}/> */}
        <img
          className="profile-photop"
          src={`/api/profile/${data.email_id}`}
          onError={(e) => {
            e.target.onerror = null; // Prevents looping
            e.target.src = 'https://th.bing.com/th/id/OIP.4cmK9d36bF0F7-V-SaVPnAHaG_?rs=1&pid=ImgDetMain'; // Set to your default image path
          }}
          alt={`Profile of ${data.name || 'aman'}`}
        />

        <h3>{data.name}</h3>

        <p className="titlep">B.Tech in {data.department}, NIT Kurukshetra as {data.position} </p>
        <Link to="/update" className="updateProfileaman"><i className="fa-solid fa-house"></i> update</Link>
      </div>
      <div className="profile-detailsp">
        <section className="aboutp">
          <h2>About</h2>
          <p>my name is {data.name} and i am in {data.department} graduate from NIT Kurukshetra. my age is {data.age} . i living in {data.location}</p>
        </section>
        <section className="contact-infop">
          <h2>Contact Info</h2>
          <p><strong>Email:</strong> {data.email_id}</p>
        </section>
      </div>
    </div>
  );
};

export default Profile;
