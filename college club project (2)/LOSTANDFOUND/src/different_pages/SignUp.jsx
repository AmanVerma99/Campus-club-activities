import React, { useState } from 'react';
import './signUp.css';
import { Link } from "react-router-dom";
import axios from 'axios'; // Import Axios

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    department: '',
    
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    return true;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:3000/api/signUp', formData);
      console.log(response.data);
      setSuccessMessage('Signup Successful! Please check your email to confirm your account.');
      window.location.href='./';
    } catch (error) {
      console.log("aman verma");
      console.error('Registration error:', error);
      setErrorMessage(`Registration error: ${error.response ? error.response.data.message : error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="mainsignup">
      <div id="containersignup">
        <h1>Signup</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <form onSubmit={handleSubmit} noValidate>
          <div className='two-inputsignup'>
            <div id="namesignup">
              <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} required />
            </div>
            <div id="departmentsignup">
              <input type="text" name="department" placeholder="Department" onChange={handleChange} value={formData.department} required />
            </div>
          </div>
          <div id="emailsignup">
            <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
          </div>
          <div id="passwordsignup">
            <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
          </div>
          
          <div id="signupsignup">
            <button type="submit" id="SignUP" disabled={isSubmitting}>
              {isSubmitting ? 'Signing Up...' : 'Signup'}
            </button>
          </div>
        </form>
        <div id="loginsignup">
          Already have an account?<Link to="/login"> Log In</Link>
        </div>
        <div id="linesignup">
          <div id="or">Or</div>
        </div>
        <div id="googlesignup">
          <button>
            <span>Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
