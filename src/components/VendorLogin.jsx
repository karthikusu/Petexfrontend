import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Loginstyle.css';
import BG2 from '../assets/vendorloginbg.gif';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9001/petex/login', { email, pwd });
      if (response.status === 200) {
        navigate('/vendordashboard'); // Redirect to dashboard or home page
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Error logging in');
    }
  };

  return (
    
      <div  className="backgroundContainer" style={{ backgroundImage: `url(${BG2})`, height: "600px", color:"black" }}>
      <div className='formContainer'>
      <form onSubmit={handleSubmit} 
      style={{backgroundColor:"transparent", width:"350px", height:"380px", marginLeft:"120%",borderRadius:"8px", marginTop:"10%", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}} >
        <h2 style={{marginLeft:"5%"}}>Vendor Login</h2>
        <p style={{marginLeft:"5%"}}>Email :</p>
        <p><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} 
          style={{marginLeft:"5%", width:"300px", height:"25px"}}/></p>
        <p style={{marginLeft:"5%"}}>Password :</p>
        <p><input type="password" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)} 
          style={{marginLeft:"5%", width:"300px", height:"25px"}}/></p>
        <button type="submit"
        style={{backgroundColor:"red", borderColor:"transparent", borderRadius:"6px", height:"35px", width:"100px", marginLeft:"5%", marginTop:"2%"}}>Login</button>
        {error && <div style={{color:"red", marginTop:"10px", marginLeft:"5%"}}>{error}</div>}

        <div>
          <p>
        <Link to="/forgetvendor" style={{textDecoration:"none", color:"black", marginTop:"50px", marginLeft:"5%"}}>Forgot Password?</Link>
        </p>
      </div>
      <div>
        <Link to="/vendorregister"  style={{textDecoration:"none", color:"black", marginLeft:"5%"}}>Register</Link>
      </div>
      </form>
      
      </div>
    </div>
  );
};

export default Login;
