// // import React from 'react';
// // import profiles from '../ClubsData';
// // import './ClubsAll.css';

// // const Intraction = () => {
// //   const handleProfileClick = (name) => {
// //     console.log("Clicked on club:", name);

// //   };

// //   return (
// //     <section className="section" id="profiles">
// //       <div className='head'><h1>All Clubs</h1></div>
// //       {profiles.map((profile) => {
// //         const { id, name, description, imageUrl, clubName } = profile;
// //         return (
// //           <article key={id} className="profile-item">
// //             <div className='writtenPart' onClick={() => handleProfileClick(name)} style={{cursor: 'pointer'}}>
// //               <div className='container'>
// //                 <div className='profilePic'>
// //                   <img src={imageUrl} alt={name} />
// //                 </div>
// //                 <div className='nameAndDescription'>
// //                   <div className='profileName'>
// //                     <h3 className='name'>{name}</h3>
// //                     <h4 className='clubName'>Club: {clubName}</h4>
// //                   </div>
// //                   <div className='description'>
// //                     <p>{description}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </article>
// //         );
// //       })}
// //     </section>
// //   );
// // };

// // export default Intraction;
// import React, { useState } from 'react';
// import profiles from '../ClubsData';
// import './ClubsAll.css';

// const Intraction = () => {
//   const [isClicked, setIsClicked] = useState(false); // State to track if the section was clicked

//   const handleSectionClick = () => {
//     setIsClicked(true); // Update the state to true when the section is clicked
//   };

//   if (isClicked) {
//     // If the section was clicked, render a div with <h1> aman </h1>
//     return <div className='profile-item' ><h1>aman</h1></div>;
//   }

//   // Original content
//   return (
//     <section className="section" id="profiles"  >
//       <div className='head'><h1>All Clubs</h1></div>
//       {profiles.map((profile) => {
//         const { id, name, description, imageUrl, clubName } = profile;
//         return (
//           <article key={id} className="profile-item" onClick={handleSectionClick}>
//             <div className='writtenPart'>
//               <div className='container'>
//                 <div className='profilePic'>
//                   <img src={imageUrl} alt={name} />
//                 </div>
//                 <div className='nameAndDescription'>
//                   <div className='profileName'>
//                     <h3 className='name'>{name}</h3>
//                     <h4 className='clubName'>Club: {clubName}</h4>
//                   </div>
//                   <div className='description'>
//                     <p>{description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </article>
//         );
//       })}
//     </section>
//   );
// };

// export default Intraction;
// import React from 'react';
// import profiles from '../ClubsData';
// import './ClubsAll.css';

// const Intraction = () => {
//   const handleProfileClick = (name) => {
//     console.log("Clicked on club:", name);

//   };

//   return (
//     <section className="section" id="profiles">
//       <div className='head'><h1>All Clubs</h1></div>
//       {profiles.map((profile) => {
//         const { id, name, description, imageUrl, clubName } = profile;
//         return (
//           <article key={id} className="profile-item">
//             <div className='writtenPart' onClick={() => handleProfileClick(name)} style={{cursor: 'pointer'}}>
//               <div className='container'>
//                 <div className='profilePic'>
//                   <img src={imageUrl} alt={name} />
//                 </div>
//                 <div className='nameAndDescription'>
//                   <div className='profileName'>
//                     <h3 className='name'>{name}</h3>
//                     <h4 className='clubName'>Club: {clubName}</h4>
//                   </div>
//                   <div className='description'>
//                     <p>{description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </article>
//         );
//       })}
//     </section>
//   );
// };

// export default Intraction;
import React, { useState } from 'react';
import profiles from '../ClubsData';
import './ClubsAll.css';

const Intraction = () => {
  const [isClicked, setIsClicked] = useState(false); // State to track if the section was clicked
  // const [clubdata, setclubdata] = useState([]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await axios.post('http://localhost:3000/api/club');
  //       setclubdata(response.data);
        
  //     } catch (error) {
  //       console.error('Error fetching images:', error);
  //     }
  //   };

  //   fetchImages();
  // }, []);

  const handleSectionClick = () => {
    setIsClicked(true); 
  };

  if (isClicked) {
    // If the section was clicked, render a div with <h1> aman </h1>
    return (
    <div className='clubswholedata'>
        <div className='headingClubsAll'>
          <h2>FINE ARTS</h2>
        </div>
          <div className='clubsmembersClubsAll'>
              {/* <div>{clubdata.mem}</div> */}
          </div>
    </div>);
  }

  // Original content
  return (
    <section className="sectionClubsAll" id="profilesClubsAll"  >
      <div className='headClubsAll'><h1>All Clubs</h1></div>
      {profiles.map((profile) => {
        const { id, name, description, imageUrl, clubName } = profile;
        return (
          <article key={id} className="profile-itemClubsAll" onClick={handleSectionClick}>
            <div className='writtenPartClubsAll'>
              <div className='containerClubsAll'>
                <div className='profilePicClubsAll'>
                  <img src={imageUrl} alt={name} />
                </div>
                <div className='nameAndDescriptionClubsAll'>
                  <div className='profileNameClubsAll'>
                    <h3 className='nameClubsAll'>{name}</h3>
                    <h4 className='clubNameClubsAll'>Club: {clubName}</h4>
                  </div>
                  <div className='descriptionClubsAll'>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Intraction;
