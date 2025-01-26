import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BG2 from './assets/Loginbg.png';
import { Divider } from 'antd';

function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
  
    try {
      const response = await fetch('http://localhost:9003/petex/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed: Unexpected response');
      }
      
      const loginResponseText = await response.text();
  
      if (loginResponseText === "login Successfully") {
        // Fetch admin details
        const adminDetailsResponse = await fetch(`http://localhost:9003/petex/getByEmail/${email}`);
        if (!adminDetailsResponse.ok) {
          throw new Error('Failed to fetch admin details');
        }
        
        const adminDetails = await adminDetailsResponse.json();
        localStorage.setItem('adminDetails', JSON.stringify(adminDetails));
        
        navigate('/admindashboard'); 
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during admin login:', error.message);
      setError(`Error! ${error.message}`);
    }
  };

  return (
    <div className="backgroundContainer" style={{ backgroundImage: `url(${BG2})`, height: "600px", color:"white", position:"fixed", width:"100%" }}>
     
      <form onSubmit={handleSubmit} style={{backgroundColor:"transparent", width:"350px", height:"380px", marginLeft:"10%",borderRadius:"8px", marginTop:"5%", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}}>
      <h2 style={{textAlign:"center"}}>Admin Login</h2>
      <div style={{color:"white", width:"90%", marginLeft:"5%"}}>
      <hr></hr></div>
        <div>
          <p style={{marginLeft:"5%"}}><label>Email:</label></p>
          <input type="email" name="email" placeholder='Enter Your Registered Email' value={formData.email} onChange={handleChange} required 
          style={{marginLeft:"5%", width:"90%"}}/>
        </div>
        <div>
          <p style={{marginLeft:"5%"}}><label >Password:</label></p>
          <input type="password" name="password" placeholder='Enter Valid Password' value={formData.password} onChange={handleChange} required 
          style={{marginLeft:"5%", width:"90%"}}/>
        </div>
        <button type="submit" style={{marginLeft:"5%", marginTop:"5%"}}>Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AdminLogin;

