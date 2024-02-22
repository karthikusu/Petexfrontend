// ForgetPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Loginstyle.css';
import BG2 from '../assets/Loginbg.png';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:9000/api/users/forget/${email}`);
      setMessage(response.data);
      if (response.data === 'An otp has been sent to your email') {
        navigate('/validateotp');
      }
    } catch (error) {
      setError('Error generating OTP');
    }
  };

  return (
    <div className="backgroundContainer" style={{ backgroundImage: `url(${BG2})`, height: "100vh", color:"white" }}>
      <div className='formContainer'>
      
      <form onSubmit={handleSubmit}
       
      style={{backgroundColor:"transparent", width:"350px", height:"200px", marginLeft:"20%",borderRadius:"8px", marginTop:"100px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}}>
        <h2 style={{color:"white", marginLeft:"10px"}}>Forget Password</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} 
        style={{width:"300px", height:"35px", borderRadius:"5px", borderColor:"transparent", marginLeft:"10px"}}/>
        <p>
        <button type="submit" 
        style={{backgroundColor:"red", borderColor:"transparent", borderRadius:"5px", height:"35px", marginLeft:"10px"}}>Generate OTP</button>
        {message && <div>{message}</div>}
        {error && <div style={{color:"red", marginTop:"10px"}}>{error}</div>}</p>
      </form>
      </div>
    </div>
  );
};

export default ForgetPassword;