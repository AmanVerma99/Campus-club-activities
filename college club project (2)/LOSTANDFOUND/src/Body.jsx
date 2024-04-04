// import React from 'react';
// import NavBar from './Component/NavBar';
// import Post from './Component/Post'
// import Profile from "./Component/Profile";
// // import Page2 from './Component/Page2';
// import './Body.css'; // Make sure this is correctly linked
// import Intraction from './Component/Intraction';
// import Footer from './Component/Footer';
// import axios from 'axios';
// import { useState,useEffect } from 'react';
// //  /api/add
// const Body = () => {
//   const [somedata, setsomedata] = useState([]);
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData(prevState => ({
//         ...prevState,
//         [name]: value,
//       }));
//     };

      
      
      
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       console.log(formData);
//       const response = await axios.post('http://localhost:3000/api/add', formData
//         // headers: {
//         //   'Content-Type': 'multipart/form-data',
//         // },
//       );
//       console.log(response.data);
//       window.location.href='./';
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/profile');
//         setsomedata(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData(); 
//   }, []);

//   const [formData, setFormData] = useState({
//     email: "", 
//     clubName : "",
//   });
//   return (
    
//     <div id="mainb">
//       <NavBar />
//       {/* <div className='centerPart'> */}
//         <div className="containerb">
//           <div className="profileb">
//             <Profile />
//             <form onSubmit={handleSubmit}>
//               {/* <h4>add member</h4> */}
//               {somedata.club_name}
//               <div className='addMember'>
//                 <input className="" type="text" name="email" placeholder='Enter email to add' onChange={handleChange} value={formData.email} required/>
//                 <input  name="clubName" value={somedata.club_name} type="text" />
//               </div>
//               <input type="submit" />
//             </form>
//           </div>
//           <div className='newsb'>
//             <Post/>
//             <Intraction/>
            
//           </div>
//         </div>
//         <Footer/>

//       {/* </div> */}
//     </div>
//   );
// };

// export default Body;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import NavBar from './Component/NavBar';
// import Post from './Component/Post'
// import Profile from "./Component/Profile";
// import Intraction from './Component/Intraction';
// import Footer from './Component/Footer';
// import './Body.css';

// const Body = () => {
//   const [somedata, setsomedata] = useState([]);
//   const [formData, setFormData] = useState({
//     email: "",
//     clubName: "",
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/profile');
//         setsomedata(response.data);
//         // Update formData state with fetched data
//         setFormData(prevFormData => ({
//           ...prevFormData,
//           clubName: response.data.clubName,
//         }));
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData(); 
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/api/add', formData);
//       console.log(response.data);
//       window.location.href = './';
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div id="mainb">
//       <NavBar />
//       <div className="containerb">
//         <div className="profileb">
//           <Profile />
//           <form onSubmit={handleSubmit}>
//             {/* <h4>add member</h4> */}
//             <h4>{somedata.club_name}</h4>
//             {/* <div className='addMember'>
//               <input type="text" name="email" placeholder='Enter email to add' onChange={handleChange} value={formData.email} required/>
//               <input type="text" name="clubName" value={somedata.club_name} />
//             </div> */}
//             return (
//             <div>
//               {(() => {
//                 if (somedata.position === 'PRESIDENT' ) {
//                   return (<div className='addMember'>
//                     <input type="text" name="email" placeholder='Enter email to add' onChange={handleChange} value={formData.email} required/>
//                     <input type="text" name="clubName" value={somedata.club_name} />
//                   </div>);
//                 }
//                 } else {
//                   return < />;
//                 }
//               })()}
//             </div>
//           );

//             <input type="submit" />
//           </form>
//         </div>
//         <div className='newsb'>
//           <Post/>
//           <Intraction/>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Body;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Component/NavBar';
import Post from './Component/Post';
import Profile from "./Component/Profile";
import Intraction from './Component/Intraction';
import Footer from './Component/Footer';
import './Body.css';

const Body = () => {
  const [somedata, setsomedata] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    clubName: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/profile');
        setsomedata(response.data);
        // Update formData state with fetched data
        setFormData(prevFormData => ({
          ...prevFormData,
          clubName: response.data.clubName,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/add', formData);
      console.log(response.data);
      window.location.href = './';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div id="mainb">
      <NavBar />
      <div className="containerb">
        <div className="profileb">
        {
          somedata.position !== '' ? (
            <Profile />
          ) : (
            // Replace 'OtherImageComponent' with the actual component you want to render
            <div className='imageBody'>
               <img src="https://img.collegepravesh.com/2014/02/NIT-Kurukshetra-Logo.png" alt="nit kkr" /> 
               <div className='WEBSITENAME'>
                <h2> ClubCraze </h2>
              </div>
            </div>
            
          )
        }

          <form onSubmit={handleSubmit}>
            {/* <h4>{somedata.club_name}</h4> */}
            {somedata.position === 'PRESIDENT' && (
              <div className='addMember'>
                <div className='addMessage'>
                  <h3>you can add members</h3>
                </div>
                  <input className='inputEmailb' type="text" name="email" placeholder='Enter email to add' onChange={handleChange} value={formData.email} required/>
                {/* <input type="hidden" name="clubName" value={somedata.club_name} /> */}
                <input type="submit" />
              </div>
            )}
            
          </form>
        </div>
        <div className='newsb'>
        {(somedata.position === 'PRESIDENT' || somedata.position === 'MEMBER') && (
              <Post/>
        )}
          <Intraction/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Body;
