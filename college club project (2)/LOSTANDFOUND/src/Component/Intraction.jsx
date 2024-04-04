
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import axios from 'axios'; // Import axios for fetching data
import './Intraction.css';

const Intraction = () => {
  const [images, setImages] = useState([]);

  // Fetch images from the server when the component mounts
  const [Data,setData] = useState('null');
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


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/images');
        setImages(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="sectioni" id="profilesi">
      {images.map((image) => { // Corrected to map over images
        const { id, description, name , club_name } = image; // Destructure properties inside map
        return (
          <article key={id} className="profile-itemi">
            <div className='writtenParti'>
              <div className='containeri'>
                <div className='profilePici'>
                    <img src={`/api/profile/${image.email_id}`} alt={`Profile of ${image.description}`} />
                </div>
                <div className='nameAndDiscriptioni'>
                  <div className='profileNamei'>
                    <h3 className='namei'>{name}</h3>
                    <h4 className='clubNamei'>club :{club_name}</h4>
                  </div>
                  <div className='profileNamei'>
                      <h3 className='namei'>{}</h3>
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
