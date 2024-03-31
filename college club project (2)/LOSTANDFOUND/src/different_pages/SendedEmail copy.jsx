import React, { useState } from 'react';
import './reset.css';

const SendedEmail = () => {
  const [formData, setFormData] = useState({
    confirmPassword: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted', formData);
    const hasNumber = /\d/.test(formData.password);
    const hasUpper = /[A-Z]/.test(formData.password);
    const hasLower = /[a-z]/.test(formData.password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
    const minLength = formData.password.length >= 8;
  
    if (!hasNumber || !hasUpper || !hasLower || !hasSpecial || !minLength) {
      alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }
  
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
  
    // If all checks pass
    alert('Password Reset Successful!');
  };
  
  return (
    <div id="main">
      <div id="container">
        <h1 className='instruction'>create a strong password</h1>
        <p >Your passwords is must be at least 6 charecters ans should include a combination numbers/letters and spacial carector</p>
        <form onSubmit={handleSubmit}>
          <div id="password">
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChange} 
            />
          </div>
          <div id="confirm-password">
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
            />
          </div>
          <div id="Reset">
            <button type="submit">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendedEmail;
