import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Loginstyle.css';
import BG2 from '../assets/Loginbg.png';

const ConfirmPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate if passwords match
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      // Validate if email is provided
      if (!email.trim()) {
        setError('Email is required');
        return;
      }

      // Send request to the server with email, new password, and confirm password
      const formData = {
        email: email,
        pwd: newPassword, // Assuming the backend expects the password field to be named 'pwd'
        confirmPwd: confirmPassword // Assuming the backend expects the confirm password field to be named 'confirmPwd'
      };
      const response = await axios.post(
        'http://localhost:9000/api/users/confirmpwd',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      // Check if the response indicates success
      if (response.status === 200) {
        // Redirect to login page or home page
        navigate('/login');
      } else {
        setError('Error confirming password');
      }
    } catch (error) {
      setError('Error confirming password');
    }
  };

  return (
    <div className="backgroundContainer" style={{ backgroundImage: `url(${BG2})`, height: "100vh", color:"white" }}>
      <div className='formContainer'>
     
      <form onSubmit={handleSubmit}
       style={{backgroundColor:"transparent", width:"350px", height:"350px", marginLeft:"20%",borderRadius:"8px", marginTop:"100px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}}>
         <h2>Confirm Password</h2>
        <p><label>Email:</label></p>
        <p><input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{width:"300px", height:"25px", borderColor:"transparent", borderRadius:"2px"}}
        /></p>
        <p>New Password:</p>
        <p><input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{width:"300px", height:"25px", borderColor:"transparent", borderRadius:"2px"}}
        /></p>
        <p>Confirm Password:</p>
        <p><input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{width:"300px", height:"25px", borderColor:"transparent", borderRadius:"2px"}}
        /></p>
        <button type="submit"
        style={{backgroundColor:"red", borderColor:"transparent", borderRadius:"6px", height:"25px"}}>Confirm Password</button>
        {error && <div style={{color:"red", marginTop:"10px"}}>{error}</div>}
      </form>
      </div>
    </div>
  );
};

export default ConfirmPassword;
