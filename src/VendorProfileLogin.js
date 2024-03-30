import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BG2 from './assets/CowBGAdopt.jpg';

function VendorLogin() {
  const [formData, setFormData] = useState({
    email: '',
    pwd: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, pwd } = formData;
  
    try {
      const response = await fetch('http://localhost:9001/petex/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pwd }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed: Unexpected response');
      }
      
      const loginResponseText = await response.text();
  
      if (loginResponseText === "login success") {
        // Fetch user details
        const userDetailsResponse = await fetch(`http://localhost:9001/petex/getByEmail/${email}`);
        if (!userDetailsResponse.ok) {
          throw new Error('Failed to fetch user details');
        }
        
        const userDetails = await userDetailsResponse.json();
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        
      
        navigate('/vendordashboard', { state: { userDetails } }); 
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setError(`Error! ${error.message}`);
    }
  };
  return (
    <div className='backgroundContainer2' style={{backgroundImage: `url(${BG2})`, position:"fixed", width:"100%"}}>      
      <form onSubmit={handleSubmit} style={{backgroundColor:"transparent", width:"350px", height:"380px", marginLeft:"10%",borderRadius:"8px", marginTop:"5%", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)", color:"white"}} >
        <div>
        <h2 style={{textAlign:"center", marginTop:"2%", color:"black"}}>Login</h2>
          <p style={{marginLeft:"5%"}}><label>Email:</label></p>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required 
          placeholder='Enter registered email'
          style={{marginLeft:"5%",width:"90%"}}/>
        </div>
        <div>
          <p style={{marginLeft:"5%"}}><label>Password:</label></p>
          <input type="password" name="pwd" value={formData.pwd} onChange={handleChange} required 
          placeholder='Enter valid password'
          style={{marginLeft:"5%",width:"90%"}}/>
        </div>
        <button type="submit" style={{marginLeft:"5%", marginTop:"5%"}}>Login</button>
        <div>
          <p>
        <Link to="/forgetvendor" style={{textDecoration:"none", color:"white", marginTop:"50px", marginLeft:"5%"}}>Forgot Password?</Link>
        </p>
      </div>
      <div>
        <Link to="/vendorregister"  style={{textDecoration:"none", color:"white", marginLeft:"5%"}}>Register</Link>
      </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      
    </div>
    
  );
}

export default VendorLogin;
