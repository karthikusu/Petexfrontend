import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Loginstyle.css';
import BG2 from '../assets/Loginbg.png';



const Login = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/users/login', { email, pwd });
      if (response.status === 200) {
        navigate('/userhome'); // Redirect to dashboard or home page

      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Error logging in');
    }
  };

  return (
    
      <div  className="backgroundContainer" style={{ backgroundImage: `url(${BG2})`, height: "800px", color:"white" }}>
      <div className='formContainer'>
      <form onSubmit={handleSubmit} 
      style={{backgroundColor:"transparent", width:"350px", height:"350px", marginLeft:"20%",borderRadius:"8px", marginTop:"100px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}} >
        <h2>Login</h2>
        <p>Email :</p>
        <p><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} 
          style={{marginLeft:"", width:"300px", height:"25px"}}/></p>
        <p>Password :</p>
        <p><input type="password" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)} 
          style={{marginLeft:"", width:"300px", height:"25px"}}/></p>
        <button type="submit"
        style={{backgroundColor:"red", borderColor:"transparent", borderRadius:"6px", height:"25px", width:"100px"}}>Login</button>
        {error && <div style={{color:"red", marginTop:"10px"}}>{error}</div>}

        <div>
          <p>
        <Link to="/forgetpassword" style={{textDecoration:"none", color:"white", marginTop:"50px"}}>Forgot Password?</Link>
        </p>
      </div>
      <div>
        <Link to="/userregister"  style={{textDecoration:"none", color:"white"}}>Register</Link>
      </div>
      </form>
      
      </div>
    </div>
  );
};

export default Login;
