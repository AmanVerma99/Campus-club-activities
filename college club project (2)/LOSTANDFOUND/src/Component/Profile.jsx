import './Profile.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// If you have a local image you'd like to use, import it here
// import profileImage from './path/to/your-image.jpg';
// import { setData } from '../different_pages/login';
const Profile = () => {
  const [data, setData] = useState([]);

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
        <img className="profile-photop" src="https://th.bing.com/th/id/R.0db13b95ec6db66a31ece10a15389f41?rik=elv2rsalBmOU1w&riu=http%3a%2f%2ffullhdpictures.com%2fwp-content%2fuploads%2f2016%2f08%2fBusinessman-Pics.jpg&ehk=Y3bcy81Pf104Nv35%2fkHdj2OIGlqB9xeDhcTYNefpl%2bk%3d&risl=&pid=ImgRaw&r=0" alt="Profile" />
        <h3>{data.name}</h3>
        <p className="titlep">B.Tech in {data.department}, NIT Kurukshetra</p>
      </div>
      <div className="profile-detailsp">
        <section className="aboutp">
          <h2>About</h2>
          <p>{data.name} Detail-oriented {data.department} graduate from NIT Kurukshetra. Passionate about developing scalable software solutions and enhancing user experiences. Looking forward to applying my skills in a challenging environment.</p>
        </section>
        <section className="contact-infop">
          <h2>Contact Info</h2>
          <p><strong>Email:</strong> {data.email_id}</p>
          <p><strong>Phone:</strong> 6378869669</p>
        </section>
      </div>
    </div>
  );
};

export default Profile;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Profile.css';

// const Profile = () => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/profile');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData(); 
//   }, []);

//   return (
//     <div className="profilep">
//       <div className="profile-headerp">
//         <img
//           className="profile-photop"
//           src="https://th.bing.com/th/id/R.0db13b95ec6db66a31ece10a15389f41?rik=elv2rsalBmOU1w&riu=http%3a%2f%2ffullhdpictures.com%2fwp-content%2fuploads%2f2016%2f08%2fBusinessman-Pics.jpg&ehk=Y3bcy81Pf104Nv35%2fkHdj2OIGlqB9xeDhcTYNefpl%2bk%3d&risl=&pid=ImgRaw&r=0"
//           alt="Profile"
//         />
//         <h3>{data.name}</h3>
//         <p className="titlep">B.Tech in {data.department}, NIT Kurukshetra</p>
//       </div>
//       <div className="profile-detailsp">
//         <section className="aboutp">
//           <h2>About</h2>
//           <p>Detail-oriented {data.department} graduate from NIT Kurukshetra. Passionate about developing scalable software solutions and enhancing user experiences. Looking forward to applying my skills in a challenging environment.</p>
//         </section>
//         <section className="contact-infop">
//           <h2>Contact Info</h2>
//           {/* Dynamically display the email and phone */}
//           <p><strong>Email:</strong> {data.email}</p>
//           <p><strong>Phone:</strong> {data.phone}</p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Profile;

