import React, { useState } from 'react';
import BG from '../assets/Loginbg.png';
import Loginstyle from './Loginstyle.css';

function Login() {
  // State variables to store email, password, and validation errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear previous error messages
    setEmailError('');
    setPasswordError('');

    // Email validation
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
    }

    // Password validation
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    }

    // If no errors, proceed with form submission
    if (!emailError && !passwordError) {
      console.log('Form submitted:', { email, password });
      // You can add further logic here, such as sending a request to the server
    }
  };

  return (
    <div className='backgroundContainer' style={{backgroundImage:`url(${BG})`}}>
  <div className='formContainer'>
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'transparent', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width: "350px",height:"250px", marginLeft: "20%", color: "white", marginTop: "80px", marginBottom: "80px" }}>
      <h2>Login</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
      </div>
      <button type="submit" style={{ backgroundColor: 'darkmagenta', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>
      <p>Don't have account ?<a href="register" style={{textDecoration:"none", color:"white"}}>Register</a></p>
    </form>
  </div>
</div>

    
  );
}

export default Login;
