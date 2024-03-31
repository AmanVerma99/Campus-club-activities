import React, { useState } from 'react';
import './Login_help.css';

const Login_help = () => {
  const [formData, setFormData] = useState({
    userInput: '', 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      userInput: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted', formData);
    alert('Signup Successful!');
  };

  return (
    <div id="main">
        <h1>Login Help</h1>
        <form className="imp" onSubmit={handleSubmit}>
            <div className='details'>
                <h2>Find Your Account</h2>
                <br />
                <p>Enter your username or the email or the phone number linked to your account</p>
            </div>
            <div className='input'>
                <input
                  className='userInput'
                  placeholder='Username, email, or phone'
                  value={formData.userInput} // Controlled component
                  onChange={handleChange}
                />
                <button className='btn' type="submit">Next</button>
            </div>
            <a href="#">Can't reset your password?</a>
        </form>
        {/* <button type="button">Login with Facebook</button> */}
    </div>
  );
};

export default Login_help;
