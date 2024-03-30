import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Loginstylecopy.css';
import BG2 from './vetdoctorbg.jpg';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:9005/petex/forget/${email}`);
      setMessage(response.data);
      if (response.data === 'otp will send ur mail') { // Ensure the response indicates OTP generation
        navigate('/doctorvalidate'); // Navigate to validatedoctor page
      } else {
        setError('Error generating OTP');
      }
    } catch (error) {
      setError('Error generating OTP');
    }
  };

  return (
    <div className="backgroundContainer" style={{ backgroundImage: `url(${BG2})`, height: "100vh", color:"black" }}>
      <div className='formContainer'>
      
      <form onSubmit={handleSubmit}
       
      style={{backgroundColor:"transparent", width:"350px", height:"200px",  marginLeft:"130%",borderRadius:"8px", marginTop:"25%", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}}>
        <h2 style={{marginLeft:"5%", color:"white"}}>Forget Password</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} 
        style={{width:"300px", height:"25px", borderRadius:"5px", borderColor:"transparent", marginLeft:"5%", marginTop:"5%"}}/>
        <p>
        <button type="submit" 
        style={{backgroundColor:"red", borderColor:"transparent", borderRadius:"6px", height:"35px", marginLeft:"5%", marginTop:"5%"}}>Generate OTP</button>
        {message && <div>{message}</div>}
        {error && <div style={{color:"red", marginTop:"10px",marginLeft:"5%"}}>{error}</div>}</p>
        
      </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
