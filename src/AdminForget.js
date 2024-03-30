import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginstylecopy.css';
import BG2 from './vetdoctorbg.jpg';

const ForgetAdmin = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "sarfraz@gmail.com") {
      navigate('/confirmadmin');
    } else {
      setError('Email does not match');
    }
  };

  return (
    <div className="backgroundContainer" style={{ background:"linear-gradient(rgb(305, 187, 255), rgb(232, 255, 239))", height: "100vh", color:"black" }}>
      <div className='formContainer'>
        <form onSubmit={handleSubmit} style={{backgroundColor:"transparent", width:"350px", height:"200px",  marginLeft:"130%",borderRadius:"8px", marginTop:"50px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}}>
          <h2 style={{marginLeft:"5%", color:"black"}}>Forget Password</h2>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{width:"300px", height:"25px", borderRadius:"4px", borderColor:"transparent", marginLeft:"5%"}}/>
          <p>
            <button type="submit" style={{backgroundColor:"red", borderColor:"transparent", borderRadius:"4px", height:"35px", marginLeft:"5%", marginTop:"10px"}}>Submit</button>
            {error && <div style={{color:"red", marginTop:"10px",marginLeft:"5%"}}>{error}</div>}
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgetAdmin;
