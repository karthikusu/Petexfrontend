// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import './Loginstylecopy.css';
// import BG2 from './vetdoctorbg.jpg';

// const DoctorLogin = () => {
//   const [email, setEmail] = useState('');
//   const [pwd, setPwd] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:9005/petex/login', { email, pwd });
//       if (response.status === 200) {
//         localStorage.setItem('loggedInDoctor', JSON.stringify(response.data)); // Save doctor's details
//         navigate('/doctornavbar'); // Redirect to dashboard or home page
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (error) {
//       setError('Error logging in');
//     }
//   };

//   return (
//     <div className="backgroundContainer" style={{ backgroundImage: `url(${BG2})`, height: "600px", color:"black" }}>
//       <div className='formContainer' style={{marginTop:"5%"}}>
//         <form onSubmit={handleSubmit} style={{backgroundColor:"transparent", width:"350px", height:"380px", marginLeft:"120%",borderRadius:"8px", marginTop:"10px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}} >
//           <h2 style={{marginLeft:"5%", color:"white"}}>Login</h2>
//           <p style={{marginLeft:"5%", color:"white"}}>Email :</p>
//           <p><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{marginLeft:"5%", width:"300px", height:"25px"}}/></p>
//           <p style={{marginLeft:"5%",color:"white"}}>Password :</p>
//           <p><input type="password" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)} style={{marginLeft:"5%", width:"300px", height:"25px"}}/></p>
//           <button type="submit" style={{backgroundColor:"red", borderColor:"transparent", borderRadius:"6px", height:"35px", width:"100px", marginLeft:"5%"}}>Login</button>
//           {error && <div style={{color:"red", marginTop:"10px", marginLeft:"5%"}}>{error}</div>}
//           <div>
//             <p><Link to="/forgetdoctor" style={{textDecoration:"none", color:"white", marginTop:"50px", marginLeft:"5%"}}>Forgot Password?</Link></p>
//           </div>
//           <div>
//             <Link to="/doctorregistration"  style={{textDecoration:"none", color:"white", marginLeft:"5%"}}>Register</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DoctorLogin;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Loginstylecopy.css';
import BG2 from './vetdoctorbg.jpg';

const DoctorLogin = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9005/petex/login', { email, pwd });
      if (response.status === 200) {
        // Fetch doctor details by email
        const doctorDetailsResponse = await axios.get(`http://localhost:9005/petex/getByEmail/${email}`);
        if (doctorDetailsResponse.status === 200) {
          localStorage.setItem('loggedInDoctor', JSON.stringify(doctorDetailsResponse.data)); // Save doctor's details
          navigate('/doctornavbar'); // Redirect to dashboard or home page
        } else {
          setError('Error fetching doctor details');
        }
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Error logging in');
    }
  };

  return (
    <div className="backgroundContainer" style={{ backgroundImage: `url(${BG2})`, height: "600px", color:"black" }}>
      <div className='formContainer' style={{marginTop:"5%"}}>
        <form onSubmit={handleSubmit} style={{backgroundColor:"transparent", width:"350px", height:"380px", marginLeft:"120%",borderRadius:"8px", marginTop:"10px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}} >
          <h2 style={{marginLeft:"5%", color:"white"}}>Login</h2>
          <p style={{marginLeft:"5%", color:"white"}}>Email :</p>
          <p><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{marginLeft:"5%", width:"300px", height:"25px"}}/></p>
          <p style={{marginLeft:"5%",color:"white"}}>Password :</p>
          <p><input type="password" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)} style={{marginLeft:"5%", width:"300px", height:"25px"}}/></p>
          <button type="submit" style={{backgroundColor:"red", borderColor:"transparent", borderRadius:"6px", height:"35px", width:"100px", marginLeft:"5%"}}>Login</button>
          {error && <div style={{color:"red", marginTop:"10px", marginLeft:"5%"}}>{error}</div>}
          <div>
            <p><Link to="/forgetdoctor" style={{textDecoration:"none", color:"white", marginTop:"50px", marginLeft:"5%"}}>Forgot Password?</Link></p>
          </div>
          <div>
            <Link to="/doctorregistration"  style={{textDecoration:"none", color:"white", marginLeft:"5%"}}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;
