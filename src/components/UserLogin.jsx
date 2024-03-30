// import React, { useState, useEffect } from 'react';
// import { Button, Divider, Input } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import Appointment from './AppointmentForm.js';

// export const DoctorProfile = () => {
//   const [email, setEmail] = useState('');
//   const [pwd, setPwd] = useState('');
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loggedIn, setLoggedIn] = useState(false); // Track if the user is logged in
//   const navigate = useNavigate();
//   const [selectedOption, setSelectedOption] = useState(null);

//   useEffect(() => {
//     // Check if there's a logged-in user in localStorage on component mount
//     const storedUser = localStorage.getItem('currentUser');
//     if (storedUser) {
//       setCurrentUser(JSON.parse(storedUser));
//       setLoggedIn(true); // Set loggedIn to true if user data is found
//     } else {
//       // Check if there's a flag indicating the user is logged in
//       const isLoggedIn = localStorage.getItem('isLoggedIn');
//       if (isLoggedIn === 'true') {
//         setLoggedIn(true);
//       }
//     }
//   }, []); // Empty dependency array ensures this effect runs only once on component mount

//   useEffect(() => {
//     // Listen for navigation events to automatically log out the user
//     const handleNavigation = () => {
//       if (loggedIn) {
//         doUserLogOut();
//       }
//     };

//     // Add event listener for navigation
//     window.addEventListener('beforeunload', handleNavigation);

//     // Cleanup function to remove event listener
//     return () => {
//       window.removeEventListener('beforeunload', handleNavigation);
//     };
//   }, [loggedIn]); // Re-run effect when loggedIn state changes

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };
//   const renderSelectedOption = () => {
//     switch (selectedOption) {
//       case 'Patients':
//         return (
//           <div className="page-content">
           
            
//           </div>
//         );
//         case 'Vaccination requests':
//           return ;
     
//       case 'Hospitalize':
//         return (
//           <div className="page-content">
           
           
//           </div>
//         );
//       case 'Home Visits':
//         return (
//           <div className="page-content">
            
          
//           </div>
//         );
//       case 'Reports':
//         return (
//           <div className="page-content">
           
           
//           </div>
//         );
//       default:
//         return null;
//     }
//   };
//   const doUserLogIn = async () => {
//     const usernameValue = email;
//     const pwdValue = pwd;
//     try {
//       const response = await fetch('http://localhost:9000/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: usernameValue, pwd: pwdValue }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed: Unexpected response');
//       }

//       const userData = await response.json();

//       if (userData && userData.email && userData.fullname) {
//         alert('Login successful!');
//         setCurrentUser(userData);
//         setLoggedIn(true); 
//         localStorage.setItem('currentUser', JSON.stringify(userData));
//         localStorage.setItem('isLoggedIn', 'true');
//         return true;
//       } else {
//         console.error('Login failed: Unexpected response data', userData);
//         alert('Login failed: Unexpected response data');
//         return false;
//       }
//     } catch (error) {
//       alert(`Error! ${error.message}`);
//       return false;
//     }
//   };

//   const doUserLogOut = async () => {
//     try {
//       localStorage.removeItem('currentUser');
//       setCurrentUser(null);
//       setLoggedIn(false); 
//       localStorage.removeItem('isLoggedIn');
//       return true;
//     } catch (error) {
//       alert(`Error! ${error.message}`);
//       return false;
//     }
//   };

//   return (
//     <div style={{ background: "linear-gradiant(rgb(161, 75, 227),rgb(161, 227, 213))" }}>
//       <div className="header">
//       </div>
//       {loggedIn ? (
//         <>
//          <div className="container" style={{ backgroundColor: "rgb(161, 75, 227)", borderRadius: "8px", width:"auto",  marginLeft:"15.5%" }}>
//             <h2 className="heading">{`Hello Dr.${currentUser.fullname}! Good Morning`}</h2>
//             <p>{`Your ID:${currentUser.doctId}`}</p>
//             <Divider />
            
//           </div>
//         <div style={{ display: 'flex', flexDirection: 'row', height:"100vh" }}>
//           <div className="sidebar" style={{ background: "rgb(89, 163, 181)", width: "auto", borderRadius: "6px", padding: "20px", marginTop:"-13%" }}>
//             <ul style={{ listStyleType: 'none', padding: "0px" }}>
//               <h2  style={{marginTop:"5%"}}>Welcome!</h2>
//               <li style={{marginTop:"20%"}}><a href="/" onClick={() => handleOptionClick('Home')} style={{ textDecoration: "none", color: "black" }}>Home</a></li>
//               <li style={{marginTop:"10%"}}><a href="#" onClick={() => handleOptionClick('Items')} style={{ textDecoration: "none", color: "black" }}>Items</a></li>
//               <li style={{marginTop:"20%"}}><a href="#" onClick={() => handleOptionClick('Assistance')} style={{ textDecoration: "none", color: "black" }}>Assistance</a></li>
//               <li style={{marginTop:"20%"}}><a href="#" onClick={() => handleOptionClick('Services')} style={{ textDecoration: "none", color: "black" }}>Services</a></li>
//               <li style={{marginTop:"20%"}}><a href="#" onClick={() => handleOptionClick('Book Appointment')} style={{ textDecoration: "none", color: "black" }}>Book Appointment</a></li>
//               <li style={{marginTop:"20%"}}><a href="#" onClick={() => handleOptionClick('History')} style={{ textDecoration: "none", color: "black" }}>History</a></li>
//               <div className="form_buttons">
//               <Button
//                 onClick={doUserLogOut}
//                 type="primary"
//                 className="form_button"
//                 color={'#208AEC'}
//                 size="large"
//                 style={{marginTop:"10%"}}
//               >
//                 Log Out
//               </Button>
//               {/* No need to display the form */}
//             </div>
//             </ul>
//           </div>
         
//           {renderSelectedOption()}
//         </div>
//         </>
//       ) : (
//         <div className="container">
//           <h2 className="heading">{'Doctor Login'}</h2>
//           <Divider />
//           <div className="form_wrapper">
//             <Input
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//               placeholder="enter email"
//               size="large"
//               className="form_input"
//             />
//             <Input
//               value={pwd}
//               onChange={(event) => setPwd(event.target.value)}
//               placeholder="Password"
//               size="large"
//               type="password"
//               className="form_input"
//             />
//           </div>
//           <div className="form_buttons">
//             <Button
//               onClick={doUserLogIn}
//               type="primary"
//               className="form_button"
//               color={'#208AEC'}
//               size="large"
//             >
//               Log In
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DoctorProfile;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
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
        navigate('/usernavbar'); // Redirect to dashboard or home page
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Error logging in');
    }
  };

  return (
    <div className="backgroundContainer" style={{ backgroundImage: `url(${BG2})`, height: "600px", color:"black" }}>
      <div className='formContainer'>
        <form onSubmit={handleSubmit} style={{backgroundColor:"transparent", width:"350px", height:"380px", marginLeft:"120%",borderRadius:"8px", marginTop:"10%", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}} >
          <h2 style={{marginLeft:"5%"}}>User Login</h2>
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
              <Link to="/forgetpassword" style={{textDecoration:"none", color:"black", marginTop:"50px", marginLeft:"5%"}}>Forgot Password?</Link>
            </p>
          </div>
          <div>
            <Link to="/userregister"  style={{textDecoration:"none", color:"black", marginLeft:"5%"}}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

