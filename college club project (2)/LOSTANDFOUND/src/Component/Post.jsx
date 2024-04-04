
import React, { useState, useEffect } from 'react';
import './Post.css';
import axios from 'axios';

const Post = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    images: null,
    description: '',
  });

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
  }, []); // This will run once when the component mounts

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      images: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataForUpload = new FormData();
      formDataForUpload.append('images', formData.images);
      formDataForUpload.append('description', formData.description);

      const response = await axios.post('http://localhost:3000/api/upload', formDataForUpload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response);
      window.location.href = './';
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div id="main1">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className='upperBox'>
          <div className='image'>
            <img
              className="profile-photop"
              src={`/api/profile/${data.email_id}`}
              onError={(e) => {
                e.target.onerror = null; // prevents looping
                e.target.src = 'https://th.bing.com/th/id/OIP.4cmK9d36bF0F7-V-SaVPnAHaG_?rs=1&pid=ImgDetMain'; // Set your default image path
              }}
              alt={`Profile of ${data.name || 'User'}`}
            />
          </div>
          <div>
            <h2>{data.name}</h2>
          </div>
          <div className='input-icon'>
            <i className="fas fa-pencil-alt"></i>
            <div className='description'>
              <input className="descriptionname" type="text" name="description" placeholder='Please enter the description of the post' onChange={handleChange} value={formData.description} required/>
            </div>
          </div>
        </div>
        <div className='lowerBox'>
          <div className='imgInput'>
            <input type="file" className="images" name="images" accept="image/*" onChange={handleImageChange} required/>
          </div>
          <div className='submitPost'>
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Post;



// import React, { useState } from 'react';
// import './updateProfile.css';
// import axios from 'axios';

// const UpdateProfile = () => {
//   const [formData, setFormData] = useState({
//     email: '', 
//     age: '',
//     about: '',
//     location: '',
//     image: null, // Initially, there is no image
//   });
//   const [imagePreviewUrl, setImagePreviewUrl] = useState(''); // State to hold the image preview URL

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       const file = files[0];
//       setFormData({ ...formData, image: file });
//       // Preview the image
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreviewUrl(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formDataForUpload = new FormData();
//     formDataForUpload.append('email', formData.email);
//     formDataForUpload.append('age', formData.age);
//     formDataForUpload.append('about', formData.about);
//     formDataForUpload.append('location', formData.location);
//     if (formData.image) {
//       formDataForUpload.append('image', formData.image);
//     }

//     try {
//       const response = await axios.post('http://localhost:3000/api/update', formDataForUpload, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log(response.data);
//       alert("Profile updated successfully.");
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   return (
//     <div className="user-profile">
//       <div className="per-info">
//         <div className="img">
//           {imagePreviewUrl ? (
//             <img src={imagePreviewUrl} alt="Preview" />
//           ) : (
//             <img
//               src="https://res.cloudinary.com/drnrsxnx9/image/upload/v1710584153/Profile-Images-Book-Store/istockphoto-1495088043-612x612_lcg4lr.jpg"
//               alt="Placeholder"
//             />
//           )}
//         </div>
//         <h1>Update User</h1>
//       </div>

//       <form onSubmit={handleSubmit} className="update-form">
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Age:</label>
//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={formData.age}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>About:</label>
//           <textarea
//             name="about"
//             rows="4"
//             placeholder="About you"
//             value={formData.about}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Photo:</label>
//           <input
//             type="file"
//             name="image"
//             accept=".jpg,.jpeg"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Location:</label>
//           <input
//             type="text"
//             name="location"
//             placeholder="Location"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateProfile;