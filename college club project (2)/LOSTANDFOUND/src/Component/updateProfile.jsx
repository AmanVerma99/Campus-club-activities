import React, { useState } from 'react';
import './updateProfile.css';
import axios from 'axios';

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    email: '', 
    age: '',
    about: '',
    location: '',
    image: null, 
  });
  const [imagePreviewUrl, setImagePreviewUrl] = useState(''); // State to hold the image preview URL

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      if (files.length > 0) { // Ensure there's at least one file selected
        const file = files[0];
        setFormData({ ...formData, image: file });
  
        // Preview the image
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviewUrl(reader.result);
        };
        reader.onerror = (error) => {
          console.error('Error: ', error);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const formDataForUpload = new FormData();
        formDataForUpload.append('images', formData.image);
        formDataForUpload.append('description', formData.about); 
        formDataForUpload.append('images', formData.location);
        formDataForUpload.append('description', formData.age); 
        formDataForUpload.append('images', formData.email);
        console.log(formData);
        console.log(formDataForUpload);
        console.log("hi");
        const response = await axios.post('http://localhost:3000/api/update', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
  
        });
        console.log(response);
        window.location.href='./';
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };
  
  return (
    <div className="user-profile">
      <div className="per-info">
        <div className="img">
          {imagePreviewUrl ? (
            <img src={imagePreviewUrl} alt="Preview" />
          ) : (
            <img
              src="https://res.cloudinary.com/drnrsxnx9/image/upload/v1710584153/Profile-Images-Book-Store/istockphoto-1495088043-612x612_lcg4lr.jpg"
              alt="Placeholder"
            />
          )}
        </div>
        <h1>Update User</h1>
      </div>

      <form onSubmit={handleSubmit} className="update-form"  encType="multipart/form-data">
                <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            value={formData.email}
            onChange={handleChange}
            required
            />


        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>About:</label>
          <textarea
            name="about"
            rows="4"
            placeholder="About you"
            value={formData.about}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Photo:</label>
          <input
            type="file"
            name="image"
            accept=".jpeg,.jpg"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
