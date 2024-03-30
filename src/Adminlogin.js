// // import React, { useState, useEffect } from 'react';
// // import { Button, Divider, Input } from 'antd';
// // import { useNavigate } from 'react-router-dom';
// // // import "./profilestyle.css";
// // import Vendor from './Vendor.js';
// // import Doctor from './Doctor.js';
// // import User from './User.js';
// // import Orders from './Orders.js';
// // import Report from './Report.js';

// // import { BellFilled, MailOutlined } from "@ant-design/icons";
// // import { Badge, Drawer, Image, List, Space, Typography } from "antd";


// // export const AdminProfile = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [currentUser, setCurrentUser] = useState(null);
// //   const [loggedIn, setLoggedIn] = useState(false); // Track if the user is logged in
// //   const navigate = useNavigate();
// //   const [selectedOption, setSelectedOption] = useState(null);

// //   const [comments, setComments] = useState([]);
// //   const [notifications, setNotifications] = useState([]);
// //   const [commentsOpen, setCommentsOpen] = useState(false);
// //   const [notificationsOpen, setNotificationsOpen] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     // Check if there's a logged-in user in localStorage on component mount
// //     const storedUser = localStorage.getItem('currentUser');
// //     if (storedUser) {
// //       setCurrentUser(JSON.parse(storedUser));
// //       setLoggedIn(true); // Set loggedIn to true if user data is found
// //     } else {
// //       // Check if there's a flag indicating the user is logged in
// //       const isLoggedIn = localStorage.getItem('isLoggedIn');
// //       if (isLoggedIn === 'true') {
// //         setLoggedIn(true);
// //       }
// //     }
// //   }, []); // Empty dependency array ensures this effect runs only once on component mount

// //   useEffect(() => {
// //     // Listen for navigation events to automatically log out the user
// //     const handleNavigation = () => {
// //       if (loggedIn) {
// //         doUserLogOut();
// //       }
// //     };

// //     // Add event listener for navigation
// //     window.addEventListener('beforeunload', handleNavigation);

// //     // Cleanup function to remove event listener
// //     return () => {
// //       window.removeEventListener('beforeunload', handleNavigation);
// //     };
// //   }, [loggedIn]); // Re-run effect when loggedIn state changes

// //   const handleOptionClick = (option) => {
// //     setSelectedOption(option);
// //   };
// //   const renderSelectedOption = () => {
// //     switch (selectedOption) {
// //       case 'Orders':
// //         return (
// //           <div className="page-content">
// //             {/* Content for Patients page */}
// //             {/* <Home/> */}
// //             <Orders/>
// //           </div>
// //         );
// //         case 'Users':
// //           return (
// //             <div className="page-content">
// //               {/* Content for Home Visits page */}
// //              <User/>
// //             </div>
// //           );
// //         case 'Vendors':
// //           return <Vendor />;
     
// //       case 'Doctors':
// //         return (
// //           <div className="page-content">
// //             {/* Content for Hospitalize page */}
// //             <Doctor/>
// //           </div>
// //         );
    
// //       case 'Reports':
// //         return (
// //           <div className="page-content">
// //             {/* Content for Reports page */}
// //            <Report/>
// //           </div>
// //         );
// //       default:
// //         return null;
// //     }
// //   };
// //   const doUserLogIn = async () => {
// //     const usernameValue = email;
// //     const passwordValue = password;
// //     try {
// //       // Perform login authentication with the backend
// //       const response = await fetch('http://localhost:9025/users/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ email: usernameValue, password: passwordValue }),
// //       });

// //       if (!response.ok) {
// //         throw new Error('Login failed: Unexpected response');
// //       }

// //       const userData = await response.json();

// //       if (userData && userData.email && userData.adminName) {
// //         alert('Login successful!');
// //         setCurrentUser(userData);
// //         setLoggedIn(true); // Set loggedIn state to true upon successful login
// //         // Store user data in localStorage
// //         localStorage.setItem('currentUser', JSON.stringify(userData));
// //         localStorage.setItem('isLoggedIn', 'true');
// //         return true;
// //       } else {
// //         console.error('Login failed: Unexpected response data', userData);
// //         alert('Login failed: Unexpected response data');
// //         return false;
// //       }
// //     } catch (error) {
// //       alert(`Error! ${error.message}`);
// //       return false;
// //     }
// //   };


// //   const fetchData = async (url, setData) => {
// //     try {
// //       setLoading(true);
// //       const response = await fetch(url);
// //       if (!response.ok) {
// //         throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
// //       }
// //       const data = await response.json();
// //       setData(data);
// //       setError(null);
// //     } catch (error) {
// //       setError(`Error fetching data: ${error.message}`);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
// //   useEffect(() => {
// //     fetchData('http://localhost:9030/petex/getAll', setComments);
// //     fetchData('http://localhost:9030/petex/getAll', setNotifications);
// //   }, []);

// //   const doUserLogOut = async () => {
// //     try {
// //       // Implement logout logic here if needed
// //       localStorage.removeItem('currentUser');
// //       setCurrentUser(null);
// //       setLoggedIn(false); // Set loggedIn to false upon logout
// //       localStorage.removeItem('isLoggedIn');
// //       return true;
// //     } catch (error) {
// //       alert(`Error! ${error.message}`);
// //       return false;
// //     }
// //   };

// //   return (
// //     <div style={{background:"linear-gradiant(rgb(161, 75, 227),rgb(161, 227, 213))"}}>
// //       <div className="header">
// //       </div>
// //       {loggedIn ? (
// //          <>
// //          <div className="container" style={{ backgroundColor: "rgb(161, 75, 227)", borderRadius: "8px", width:"100%",  marginLeft:"15.5%" }}>
// //             <div style={{display:"flex"}}><h2 className="heading">{`Hello ${currentUser.adminName}! Good Morning`}</h2>
// //             <div className='badges' style={{marginLeft:"43%"}}>
// //               <Badge count={comments.length} dot
// //                 style={{marginRight:"50px",}}>
// //                 <MailOutlined
// //                   style={{ fontSize: 24, cursor: "pointer" , marginRight:"50px"}}
// //                   onClick={() => setCommentsOpen(true)}
// //                   />
// //               </Badge>
// //               <Badge count={notifications.length}
// //                 style={{marginRight:"50px"}}>
// //                   <BellFilled
// //                     style={{ fontSize: 24, cursor: "pointer" , marginRight:"50px"}}
// //                     onClick={() => setNotificationsOpen(true)}
// //                   />
// //                 </Badge>
// //                 </div>
// //             <Drawer
// //               title="Comments"
// //               placement="right"
// //               width={400}
// //               closable={true}
// //               onClose={() => setCommentsOpen(false)}
// //               visible={commentsOpen}
// //             >
// //             {loading ? (
// //                 <p>Loading comments...</p>
// //                 ) : error ? (
// //                 <p>{error}</p>
// //                 ) : (
// //                 <List
// //                 dataSource={comments}
// //                 renderItem={(item) => <List.Item>{item.body}</List.Item>}
           
// //                 />
// //               )}
// //             </Drawer>
// //             <Drawer
// //               title="Notifications"
// //               placement="right"
// //               width={400}
// //               closable={true}
// //               onClose={() => setNotificationsOpen(false)}
// //               visible={notificationsOpen}
        
// //             >
// //             {loading ? (
// //              <p>Loading notifications...</p>
// //         ) : error ? (
// //           <p>{error}</p>
// //         ) : (
// //           <List
// //             dataSource={notifications}
// //             renderItem={(item) => (
// //               <List.Item>
// //                 <Typography.Text strong>{item.title}</Typography.Text> has been ordered!
// //               </List.Item>
// //             )}
// //           />
// //         )}
// //       </Drawer></div>
// //       <p>{`Your ID:${currentUser.adminId}`}</p>
// //             <Divider />
            
           
// //           </div>
// //         <div style={{ display: 'flex', flexDirection: 'row', height:"100vh" }}>
// //           <div className="sidebar" style={{ background: "rgb(89, 163, 181)", width: "auto", borderRadius: "6px", padding: "20px", marginTop:"-15%" }}>
// //             <ul style={{ listStyleType: 'none', padding: "0px" }}>
// //               <h2  style={{marginTop:"5%"}}>Welcome!</h2>
// //               <li style={{marginTop:"20%"}}><a href="/" onClick={() => handleOptionClick('Home')} style={{ textDecoration: "none", color: "black" }}>Home</a></li>
// //               <li style={{marginTop:"10%"}}><a href="#" onClick={() => handleOptionClick('Orders')} style={{ textDecoration: "none", color: "black" }}>Orders</a></li>
// //               <li style={{marginTop:"20%"}}><a href="#" onClick={() => handleOptionClick('Users')} style={{ textDecoration: "none", color: "black" }}>Users</a></li>
// //               <li style={{marginTop:"20%"}}><a href="#" onClick={() => handleOptionClick('Vendors')} style={{ textDecoration: "none", color: "black" }}>Vendors</a></li>
// //               <li style={{marginTop:"20%"}}><a href="#" onClick={() => handleOptionClick('Doctors')} style={{ textDecoration: "none", color: "black" }}>Doctors</a></li>
// //               <li style={{marginTop:"20%"}}><a href="#" onClick={() => handleOptionClick('Reports')} style={{ textDecoration: "none", color: "black" }}>Reports</a></li>
// //               <li style={{marginTop:"20%"}}><a href="#" onClick={() => handleOptionClick('Services')} style={{ textDecoration: "none", color: "black" }}>Services</a></li>
// //               <li style={{marginTop:"20%"}}><a href="#" onClick={() => handleOptionClick('Appointments')} style={{ textDecoration: "none", color: "black" }}>Appointments</a></li>
// //               <div className="form_buttons">
// //               <Button
// //                 onClick={doUserLogOut}
// //                 type="primary"
// //                 className="form_button"
// //                 color={'#208AEC'}
// //                 size="large"
// //                 style={{marginTop:"10%"}}
// //               >
// //                 Log Out
// //               </Button>
// //               {/* No need to display the form */}
// //             </div>
// //             </ul>
// //           </div>
         
// //           {renderSelectedOption()}
// //         </div>
// //         </>
// //       ) : (
// //         <div className="container">
// //           <h2 className="heading">{'Doctor Login'}</h2>
// //           <Divider />
// //           <div className="form_wrapper">
// //             <Input
// //               value={email}
// //               onChange={(event) => setEmail(event.target.value)}
// //               placeholder="enter email"
// //               size="large"
// //               className="form_input"
// //             />
// //             <Input
// //               value={password}
// //               onChange={(event) => setPassword(event.target.value)}
// //               placeholder="Password"
// //               size="large"
// //               type="password"
// //               className="form_input"
// //             />
// //           </div>
// //           <div className="form_buttons">
// //             <Button
// //               onClick={doUserLogIn}
// //               type="primary"
// //               className="form_button"
// //               color={'#208AEC'}
// //               size="large"
// //             >
// //               Log In
// //             </Button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AdminProfile;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import BG from './assets/petuser.png';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:9003/petex/login', { email, password });
//       if (response.status === 200) {
//         navigate('/admindashboard'); // Redirect to dashboard or home page
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (error) {
//       setError('Error logging in');
//     }
//   };

//   return (
//     <>
//     <div style={{}}>
//       <div  className="backgroundContainer" style={{ backgroundImage: `url(${BG})`}}>
//       <div className='formContainer'>
//       <form onSubmit={handleSubmit} 
//       style={{backgroundColor:"transparent", width:"350px", height:"300px", marginLeft:"120%",borderRadius:"8px", marginTop:"10%", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)"}} >
//         <h2 style={{marginLeft:"5%"}}>Login</h2>
//         <p style={{marginLeft:"5%"}}>Email :</p>
//         <p><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} 
//           style={{marginLeft:"5%", width:"300px", height:"25px"}}/></p>
//         <p style={{marginLeft:"5%"}}>Password :</p>
//         <p><input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} 
//           style={{marginLeft:"5%", width:"300px", height:"25px"}}/></p>
//         <button type="submit"
//         style={{backgroundColor:"red", borderColor:"transparent", borderRadius:"6px", height:"35px", width:"100px", marginLeft:"5%", marginTop:"3%"}}>Login</button>
//         {error && <div style={{color:"red", marginTop:"10px", marginLeft:"5%"}}>{error}</div>}

//         {/* <div>
//           <p>
//         <Link to="/forgetvendor" style={{textDecoration:"none", color:"black", marginTop:"50px", marginLeft:"5%"}}>Forgot Password?</Link>
//         </p>
//       </div>
//       <div>
//         <Link to="/vendorregister"  style={{textDecoration:"none", color:"black", marginLeft:"5%"}}>Register</Link>
//       </div> */}
//       </form>
      
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default Login;


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

