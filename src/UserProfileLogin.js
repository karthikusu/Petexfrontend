// import React, { useState  } from 'react';
// import { useNavigate , Link } from 'react-router-dom';
// import BG2 from './assets/Loginbg.png';


// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     pwd: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, pwd } = formData;
  
//     try {
//       const response = await fetch('http://localhost:9000/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, pwd }),
//       });
  
//       if (!response.ok) {
//         throw new Error('Login failed: Unexpected response');
//       }
      
//       const loginResponseText = await response.text();
  
//       if (loginResponseText === "login success") {
//         // Fetch user details
//         const userDetailsResponse = await fetch(`http://localhost:9000/api/users/getByEmail/${email}`);
//         if (!userDetailsResponse.ok) {
//           throw new Error('Failed to fetch user details');
//         }
        
//         const userDetails = await userDetailsResponse.json();
//         localStorage.setItem('userDetails', JSON.stringify(userDetails));
        
      
//         navigate('/usernavbar', { state: { userDetails } }); // Pass user details in state
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (error) {
//       console.error('Error during login:', error.message);
//       setError(`Error! ${error.message}`);
//     }
//   };


// Login Component
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BG2 from './assets/Loginbg.png';

function Login() {
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
      // Perform login request

      // After successful login
      const userDetailsResponse = await fetch(`http://localhost:9000/api/users/getByEmail/${email}`);
      if (!userDetailsResponse.ok) {
        throw new Error('Failed to fetch user details');
      }

      const userDetails = await userDetailsResponse.json();
      localStorage.setItem('userDetails', JSON.stringify(userDetails));

      navigate('/usernavbar', { state: { userDetails } }); // Pass user details in state
    } catch (error) {
      console.error('Error during login:', error.message);
      setError(`Error! ${error.message}`);
    }
  };
  return (
    <div className="backgroundContainer" style={{ backgroundImage: `url(${BG2})`, height: "600px", color:"white" }}>
      <div className='formContainer'>
        <form onSubmit={handleSubmit} style={{backgroundColor:"transparent", width:"350px", height:"380px", marginLeft:"120%",borderRadius:"8px", marginTop:"10%", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}} >
          <h2 style={{marginLeft:"5%"}}>User Login</h2>
          <p style={{marginLeft:"5%"}}>Email :</p>
          <p><input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} 
            style={{marginLeft:"5%", width:"300px", height:"25px"}}/></p>
          <p style={{marginLeft:"5%"}}>Password :</p>
          <p><input type="password" name="pwd" placeholder="Password" value={formData.pwd} onChange={handleChange} 
            style={{marginLeft:"5%", width:"300px", height:"25px"}}/></p>
          <button type="submit"
          style={{backgroundColor:"red", borderColor:"transparent", borderRadius:"6px", height:"35px", width:"100px", marginLeft:"5%", marginTop:"2%"}}>Login</button>
          {error && <div style={{color:"red", marginTop:"10px", marginLeft:"5%"}}>{error}</div>}

          <div>
            <p>
              <Link to="/forgetpassword" style={{textDecoration:"none", color:"white", marginTop:"50px", marginLeft:"5%"}}>Forgot Password?</Link>
            </p>
          </div>
          <div>
            <Link to="/userregister"  style={{textDecoration:"none", color:"white", marginLeft:"5%"}}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
