import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Loginstyle.css';
import BG2 from '../assets/Loginbg.png';

const ValidateOTP = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate email and OTP format (for example, ensure they are not empty)
      if (!email.trim() || !otp.trim()) {
        setError('Email and OTP are required');
        return;
      }

      const formData = {
        email: email,
        otp: otp
      };
      const response = await axios.post(
        'http://localhost:9000/api/users/validotp',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      // Check if the response indicates success
      if (response.status === 200) {
        navigate('/confirmpassword');
      } else {
        setError('Invalid OTP');
      }
    } catch (error) {
      // Handle network errors or other issues
      setError('Error validating OTP');
    }
  };

  return (
    <div className="backgroundContainer" style={{ backgroundImage: `url(${BG2})`, height: "100vh", color:"white" }}>
      <div className='formContainer'>
      <form onSubmit={handleSubmit}
      style={{backgroundColor:"transparent", width:"350px", height:"280px", marginLeft:"130%",borderRadius:"8px", marginTop:"10px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}} >
      <h2>Validate OTP</h2>
      <p><label>Email:</label></p>
       <p> <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{width:"300px", height:"25px", borderColor:"transparent", borderRadius:"2px"}}
        /></p>
        <p><label>OTP:</label></p>
        <p>
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          style={{width:"300px", height:"25px", borderColor:"transparent", borderRadius:"2px"}}
        /></p>
        <button type="submit" 
        style={{backgroundColor:"red", borderColor:"transparent", borderRadius:"6px", height:"25px"}}>Validate OTP</button>
        {error && <div style={{color:"red", marginTop:"10px"}}>{error}</div>}
        
      </form>
      </div>
    </div>
  );
};

export default ValidateOTP;
