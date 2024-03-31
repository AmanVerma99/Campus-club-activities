
import React, { useState } from 'react';
import './Post.css';
import axios from 'axios';

const Post = () => {
  const [formData, setFormData] = useState({
    images: null, // Change to null
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setFormData(prevState => ({
      ...prevState,
      images: file, // Store the selected file in state
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataForUpload = new FormData();
      formDataForUpload.append('images', formData.images); // Append the image file
      formDataForUpload.append('description', formData.description); // Append other form data

      const response = await axios.post('http://localhost:3000/api/upload', formDataForUpload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },

      });
      console.log(response.data);
      window.location.href='./';
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div id="main1">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className='upperBox'>
          <div className='image'>
            <img src="https://th.bing.com/th/id/R.0db13b95ec6db66a31ece10a15389f41?rik=elv2rsalBmOU1w&riu=http%3a%2f%2ffullhdpictures.com%2fwp-content%2fuploads%2f2016%2f08%2fBusinessman-Pics.jpg&ehk=Y3bcy81Pf104Nv35%2fkHdj2OIGlqB9xeDhcTYNefpl%2bk%3d&risl=&pid=ImgRaw&r=0" alt="profilepicture" />
          </div>
          <div className='input-icon'>
            <i className="fas fa-pencil-alt"></i>
            <input type="text" name="description" placeholder='Please enter the description of the post' onChange={handleChange} value={formData.description} required/>
          </div>
        </div>
        <div className='lowerBox'>
          <div className='imgInput'>
            {/* Change input type to file and add onChange event */}
            <input type="file" className="images" name="images" accept="image/jpeg" onChange={handleImageChange} required/>
          </div>
          <div className='submit'>
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Post;

