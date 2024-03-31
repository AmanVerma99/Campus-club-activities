import React, { useState } from 'react';
import './login.css';
import { Link } from "react-router-dom";
import NavBar from '../Component/NavBar';
import axios from "axios";
const UserData = [];
// const user = () =>{
//   const 
// }

export const setData = (data)=>{
  // const autoData = data;
  return data;

}
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!validateForm()) return;

    // setIsSubmitting(true);
    // setErrorMessage('');
    // setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:3000/api/login', formData);
      console.log(response.data);
      setData(response.data);
      window.location.href='./';
      // setSuccessMessage('Signup Successful! Please check your email to confirm your account.');
    } catch (error) {
      console.log("aman verma");
      console.error('Registration error:', error);
      // setErrorMessage(`Registration error: ${error.response ? error.response.data.message : error.message}`);
    }
    //   setIsSubmitting(false);
    // }
  };

  
  return (
    <div className='whole'>
      {/* <NavBar/> */}
    <div id="mainlogin">
      
      <div id="containerlogin">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div id="emaillogin">
            <input type="email" name="email" placeholder="Username/Email" value={formData.email} onChange={handleChange} />
          </div>
          <div id="passwordlogin">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          </div>
          <div id="forgot-passwordlogin">
            <a href="#">Forgot password?</a>
          </div>
          <div id="login">
            <button type="submit">Login</button>
          </div>
        </form>
        <div id="signuplogin">
          Didn't have an account??<Link to="/signUp" >signUp</Link>
        </div>
        <div id="linelogin">
          <div id="orlogin">
            <p>Or</p>
          </div>
        </div>
        <div id="facebooklogin">
          <button>
            {/* Use the appropriate icon here */}
            <span>Login with Facebook</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
// export default UserData;

export default Login;
