import React, { useState } from 'react';
import Registerstyle from './Registerstyle.css';
import BG2 from '../assets/RBG.jpg';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {
  // State variables to store form fields and validation errors
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Validation error states
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rePasswordError, setRePasswordError] = useState('');

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFullNameError('');
    setEmailError('');
    setMobileNumberError('');
    setPasswordError('');
    setRePasswordError('');
    navigate("/");

    if (!fullName) {
      setFullNameError('Full Name is required');
    }

    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
    }

    if (!mobileNumber) {
      setMobileNumberError('Mobile Number is required');
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      setMobileNumberError('Invalid mobile number');
    }

    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    }

    if (!rePassword) {
      setRePasswordError('Please re-enter password');
    } else if (rePassword !== password) {
      setRePasswordError('Passwords do not match');
    }

    if (!fullNameError && !emailError && !mobileNumberError && !passwordError && !rePasswordError) {
      try {
        const response = await axios.post('http://localhost:8080/users/register', {
          fullName,
          email,
          mobileNumber,
          password,
          rememberMe
        });
        console.log('Registration successful:', response.data);
        // You can add further logic here, such as redirecting the user or showing a success message
      } catch (error) {
        console.error('Registration failed:', error);
        // Handle error, such as displaying an error message to the user
      }
    }
  };
  return (
    <div className='backgroundContainer' style={{backgroundImage:`url(${BG2})`}}>
      <div className='formContainer'>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'transparent', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width:"400px" , marginLeft:"10%", marginTop:"10%", color:"white"}}>
          <h2>Registration</h2>
          <div style={{ marginBottom: '10px' }}>
            <label>Full Name:</label>
            <input
              type="text"
              placeholder='Enter your full name'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {fullNameError && <span style={{ color: 'red' }}>{fullNameError}</span>}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Email:</label>
            <input
              type="email"
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Mobile Number:</label>
            <input
              type="text"
              placeholder='Enter your mobile number'
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {mobileNumberError && <span style={{ color: 'red' }}>{mobileNumberError}</span>}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Password:</label>
            <input
              type="password"
              placeholder='Create your own password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Re-enter Password:</label>
            <input
              type="password"
              placeholder='Re-enter the password'
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {rePasswordError && <span style={{ color: 'red' }}>{rePasswordError}</span>}
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={{ marginRight: '5px' }}
            />
            <label>Remember Me</label>
          </div>
          <button type="submit" style={{ backgroundColor: 'darkmagenta', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
