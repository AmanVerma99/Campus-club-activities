// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ImageGallery = () => {
//   const [images, setImages] = useState([]);

//   // Fetch images from the server when the component mounts
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/images'); // Replace with your API endpoint
//         setImages(response.data);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       <div className="image-container">
//         {images.map((image) => (
//           <div key={image.id} className="image-item">
//             <img src={/api/image/${image.id}} alt="Image" />
//             <p>{image.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;

// import React from 'react';
// import './Intraction.css';
// import profiles from '../data';

// const Intraction = () => {

//   const [images, setImages] = useState([]);

//     // Fetch images from the server when the component mounts
//     useEffect(() => {
//       const fetchImages = async () => {
//         try {
//           const response = await axios.get('http://localhost:3000/api/images'); 
//           setImages(response.data);
//         } catch (error) {
//           console.error('Error fetching images:', error);
//         }
//       };
  
//       fetchImages();
//     }, []);

//   return (
//     <section className="section" id="profiles">
//       {/* <div className="section-center-featured-center"> */}
//         {profiles.map((profile) => {
//           const { id, description,image_data} = images;
//           return (
//             <article key={id} className="profile-itemi">
//               <div className='writtenParti'>
//                 <div className='containeri'>
//                   <div className='profilePici'>
//                       <img src={image_data} alt="" />
//                   </div>
//                   <div className='nameAndDiscriptioni'>
//                     <div className='profileNamei'>
//                         <h3 className='namei'>{name}</h3>
//                         <h4 className='clubNamei'>club :{clubName}</h4>
//                     </div>
//                     <div className='discriptioni'>
//                         <p>{description}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='posti'>
//                     <img src={image} alt="Post of ${name}" />
//                 </div>
//               </div>
//             </article>
//           );
//         })}
//       {/* </div> */}
//     </section>
//   );
// };

// export default Intraction;

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import axios from 'axios'; // Import axios for fetching data
import './Intraction.css';

const Intraction = () => {
  const [images, setImages] = useState([]);

  // Fetch images from the server when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/images');
        setImages(response.data);
        
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="section" id="profiles">
      {images.map((image) => { // Corrected to map over images
        const { id, description, image_data } = image; // Destructure properties inside map
        return (
          <article key={id} className="profile-itemi">
            <div className='writtenParti'>
              <div className='containeri'>
                <div className='profilePici'>
                    {/* <img src={image_data} alt={`Profile of ${description}`} />  */}
                    <img src={`/api/image/${image.id}`} alt={`Profile of ${image.description}`} />
                    {/* Added template literal for alt attribute */}
                </div>
                <div className='nameAndDiscriptioni'>
                  <div className='profileNamei'>
                      <h3 className='namei'>{}</h3>
                      {/* Removed duplicate club name */}
                  </div>
                  <div className='discriptioni'>
                      <p>{description}</p>
                  </div>
                </div>
              </div>
              <div className='posti'>
                  <img src={`/api/image/${image.id}`} alt={`Post of ${image.description}`} />
                  {/* Corrected to use description for alt text */}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Intraction;
