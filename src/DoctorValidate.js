import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Loginstylecopy.css';
import BG2 from './vetdoctorbg.jpg';

const DoctorValidate = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email.trim() || !otp.trim()) {
        setError('Email and OTP are required');
        return;
      }
  
      const formData = {
        email: email,
        otp: otp
      };
      const response = await axios.post(
        'http://localhost:9005/petex/validotp',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Response from backend:', response.data);
  
      if (response.data === 'OTP verified') {
        navigate('/confirmdoctor');
      } else {
        setError('Invalid OTP');
      }
    } catch (error) {
      console.error('Error validating OTP:', error);
      setError('Error validating OTP');
    }
  };
  

  return (
    <div className="backgroundContainer" style={{ backgroundImage: `url(${BG2})`, height: "100vh", color:"white" }}>
      <div className='formContainer' >
      <form onSubmit={handleSubmit}
      style={{backgroundColor:"transparent", width:"350px", height:"280px", marginLeft:"130%",borderRadius:"8px", marginTop:"10px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}} >
      <h2 style={{marginLeft:"5%"}}>Validate OTP</h2>
      <p style={{marginLeft:"5%"}}><label >Email:</label></p>
       <p> <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{width:"300px", height:"25px", borderColor:"transparent", borderRadius:"2px", marginLeft:"5%"}}
        /></p>
        <p style={{marginLeft:"5%"}}><label>OTP:</label></p>
        <p>
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{width:"300px", height:"25px", borderColor:"transparent", borderRadius:"2px", marginLeft:"5%"}}
        /></p>
        <button type="submit" 
        style={{backgroundColor:"red", borderColor:"transparent", borderRadius:"6px", height:"35px", marginLeft:"5%", marginTop:"5%"}}>Validate OTP</button>
        {error && <div style={{color:"red", marginTop:"5%"}}>{error}</div>}
        
      </form>
      </div>
    </div>
  );
};

export default DoctorValidate;
