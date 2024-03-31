import React, { useState } from 'react';
import './infoForm.css';

const InfoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    location: '',
    phone: '',
    status: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      images: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted', formData);
    alert('Form Submission Successful!');
  };

  return (
    <div>
        <div className='nav'>
            <h3>Information Form</h3>
        </div>
        <form className='container' onSubmit={handleSubmit}>
            <div className='lcontainer'>
                <div>
                    <h3>Name</h3>
                    <input className='inputx' type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
                </div>
                <div>
                    <h3>phone</h3>
                    <input className='inputx' type="text" name="phone" placeholder="phone" onChange={handleChange} value={formData.phone}/>
                </div>
                <div>
                    <h3>Location</h3>
                    <input className='inputx' type="text" name="location" placeholder="Location" onChange={handleChange} value={formData.location} />
                </div>
                <div>
                    <h3>Category</h3>
                    <select className="inputx" name="category" onChange={handleChange} value={formData.category}>
                        <option value="">Select Category</option>
                        <option value="category1">Category1</option>
                        <option value="category2">Category2</option>
                    </select>
                </div>
                {/* Remaining inputs */}
            </div>
            <div className='rcontainer'>
                <div>
                    <h3>status</h3>
                    <select className="status" name="status" onChange={handleChange} value={formData.status}>
                        <option value="active">Found</option>
                        <option value="inactive">lost</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <br />
                    <textarea id="description" name="description" onChange={handleChange} value={formData.description} required />
                </div>
                <div>
                    <label htmlFor="images">Images (up to 5):</label>
                    <input type="file" className="images" name="images" accept="image/*" multiple onChange={handleImageChange}/>    
                </div>
                <button type="submit" className='save-btn'>Save</button>
            </div>
        </form>
    </div>
  );
};

export default  InfoForm;
