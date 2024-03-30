// import React, { useState, useEffect } from 'react';
// import { Button, Divider, Input } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import Vaccination from './Vaccination';
// import Hospitalize from './Hospitalize';
// import HomeVisit from './HomeVisit';
// import Home from './components/Home.jsx';
// import DoctorReport from './DoctorReport.js';
// import BG from './DogBG.jpg'


// export const Doctorprofile = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loggedIn, setLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const [selectedOption, setSelectedOption] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('currentUser');
//     if (storedUser) {
//       setCurrentUser(JSON.parse(storedUser));
//       setLoggedIn(true);
//     } else {
//       const isLoggedIn = localStorage.getItem('isLoggedIn');
//       if (isLoggedIn === 'true') {
//         setLoggedIn(true);
//       }
//     }
//   }, []);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   const renderSelectedOption = () => {
//     switch (selectedOption) {
//       // Your cases...
//     }
//   };

//   const doUserLogIn = async () => {
//     const usernameValue = email;
//     const passwordValue = password;
//     try {
//       const response = await fetch('http://localhost:9005/petex/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: usernameValue, pwd: passwordValue }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed: Unexpected response');
//       }

//       const userData = await response.json();

//       if (userData && userData.email && userData.doctorName) {
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
//          <div style={{ display: 'flex', flexDirection: 'row', height: "100vh" }}>

//   <div className="sidebar" style={{ background: "rgb(89, 163, 181)", borderRadius: "6px", width: "15%", padding: "20px", overflowY: "auto" }}>
//     <ul style={{ listStyleType: 'none', padding: "0px", margin: "0px" }}>
//       <h2 style={{ marginTop: "5%" }}>Welcome!</h2>
//       <li style={{ marginTop: "20%" }}><a href="/" onClick={() => handleOptionClick('Home')} style={{ textDecoration: "none", color: "black" }}>Home</a></li>
//       <li style={{ marginTop: "20%" }}><a href="/vaccination" onClick={() => handleOptionClick('Vaccination Request')} style={{ textDecoration: "none", color: "black" }}>Vaccination Request</a></li>
//       <li style={{ marginTop: "20%" }}><a href="/hospitalization" onClick={() => handleOptionClick('Hospitalize')} style={{ textDecoration: "none", color: "black" }}>Hospitalize</a></li>
//       <li style={{ marginTop: "20%" }}><a href="/homevisit" onClick={() => handleOptionClick('Home Visit')} style={{ textDecoration: "none", color: "black" }}>Home Visit</a></li>
//       <li style={{ marginTop: "20%" }}><a href="/doctorreport" onClick={() => handleOptionClick('Doctor Report')} style={{ textDecoration: "none", color: "black" }}>Report</a></li>
//       <li style={{ marginTop: "20%" }}><a href="/appointmentslots" onClick={() => handleOptionClick('SlotAppointmentTable')} style={{ textDecoration: "none", color: "black" }}>Appointments</a></li>
//       {/* <li style={{ marginTop: "20%" }}><a href="/daycare" onClick={() => handleOptionClick('Daycare')} style={{ textDecoration: "none", color: "black" }}>Daycare</a></li> */}
//       {/* <li style={{ marginTop: "20%" }}><a href="/reportlost" onClick={() => handleOptionClick('ReportLost')} style={{ textDecoration: "none", color: "black" }}>Report Lost</a></li>
//       <li style={{ marginTop: "20%" }}><a href="#" onClick={() => handleOptionClick('History')} style={{ textDecoration: "none", color: "black" }}>History</a></li> */}
//       <div className="form_buttons">
//         <Button
//           onClick={doUserLogOut}
//           type="primary"
//           className="form_button"
//           color={'#208AEC'}
//           size="large"
//           style={{ marginTop: "10%" }}
//         >
//           Log Out
//         </Button>
//       </div>
//     </ul>
//   </div>
//   <div style={{ backgroundColor: "rgb(227, 228, 255)", borderRadius: "8px", width: "calc(85% - 20px)", padding: "20px", height:"auto" }}>
//   <h2 className="heading">{`Hello ${currentUser.doctorName}! How Can We Help You ?`}</h2>
//   <p>{`Your ID:${currentUser.doctId}`}</p>
//   <Divider />
//   <div style={{ opacity: "0.8", color: "black" }}>
//   <h4>{`Hello ${currentUser.doctorName}! `}</h4>
//   <br />
//   <h4>We are feeling proud to having a great experienced doctor like you. </h4>

 
// </div>

// </div>
//             {renderSelectedOption()}
//           </div>
//         </>
//       ) : (
//         <div style={{backgroundImage: `url(${BG})`, height:"100vh", backgroundSize:"cover", backgroundAttachment:"fixed"}}>
//         <div className="container" style={{ width:"350px", height:"380px", marginLeft:"10%",borderRadius:"8px", marginTop:"8%", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)", position:"fixed"}}>
//           <h2 className="heading" style={{color:"white"}}>{'Doctor Login'}</h2>
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
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//               placeholder="Password"
//               size="large"
//               type="password"
//               className="form_input"
//               style={{marginTop:"2%"}}
//             />
//           </div>
//           <div className="form_buttons">
//             <Button
//               onClick={doUserLogIn}
//               type="primary"
//               className="form_button"
//               color={'#208AEC'}
//               size="large"
//               style={{marginTop:"5%"}}
//             >
//               Log In
//             </Button>
//             <a href="/forgetdoctor" style={{textDecoration:"none", color:"white"}}>Forget Password ?</a>
//             <p style={{color:"white",marginTop:"2%"}}>Don't Have An Account ?</p>
//             <a href="/doctorregistration" style={{textDecoration:"none", color:"white",marginTop:"2%"}}>Register Here</a>
//           </div>
//         </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Doctorprofile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [editedDetails, setEditedDetails] = useState(null);
  const [editableField, setEditableField] = useState(null);

  useEffect(() => {
    // Fetch doctor details from localStorage
    const loggedInDoctor = JSON.parse(localStorage.getItem('loggedInDoctor'));
    if (loggedInDoctor) {
      setDoctorDetails(loggedInDoctor);
      setEditedDetails({ ...loggedInDoctor }); // Initialize editedDetails with the fetched doctor details
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails({ ...editedDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:9005/petex/update/${doctorDetails.doctId}`, editedDetails);
      if (response.status === 200) {
        // Update doctor details in localStorage and state
        localStorage.setItem('loggedInDoctor', JSON.stringify(editedDetails));
        setDoctorDetails(editedDetails);
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };
  const handleFieldClick = (field) => {
    setEditableField(field);
  };

  return (
    <>
    <style>
      {
        `
        .profile-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        
        .profile-fields {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .profile-field {
          display: flex;
          flex-direction: column;
        }
        
        .profile-field label {
          font-weight: bold;
          margin-bottom: 5px;
        }
        
        .profile-field input {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        
        .profile-field.editable input {
          border-color: blue; /* Example color when field is editable */
        }
        
        button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        button:hover {
          background-color: #0056b3;
        }
        
        `
      }
    </style>
    <div className="profile-container">
      <h2>Doctor Profile</h2>
      {doctorDetails && (
        <form onSubmit={handleSubmit}>
          <div className={`profile-field ${editableField === 'doctorName' ? 'editable' : ''}`}>
            <label>Name:</label>
            <input type="text" name="doctorName" value={editedDetails.doctorName} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'email' ? 'editable' : ''}`}>
            <label>Email:</label>
            <input type="email" name="email" value={editedDetails.email} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'qualificationAndSpecialization' ? 'editable' : ''}`}>
            <label>Qualification & Specialization:</label>
            <input type="text" name="qualificationAndSpecialization" value={editedDetails.qualificationAndSpecialization} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'overAllExperience' ? 'editable' : ''}`}>
            <label>Overall Experience:</label>
            <input type="text" name="overAllExperience" value={editedDetails.overAllExperience} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'mobileNumber' ? 'editable' : ''}`}>
            <label>Mobile Number:</label>
            <input type="text" name="mobileNumber" value={editedDetails.mobileNumber} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'medicalBoard' ? 'editable' : ''}`}>
            <label>Medical Board:</label>
            <input type="text" name="medicalBoard" value={editedDetails.medicalBoard} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'registrationBody' ? 'editable' : ''}`}>
            <label>Registration Body:</label>
            <input type="text" name="registrationBody" value={editedDetails.registrationBody} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'clinicName' ? 'editable' : ''}`}>
            <label>Clinic name:</label>
            <input type="text" name="clinicName" value={editedDetails.clinicName} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'discription' ? 'editable' : ''}`}>
            <label>Discription :</label>
            <input type="text" name="discription" value={editedDetails.discription} onChange={handleChange} />
          </div>
          {/* Add input fields for other details similarly */}
          <button type="submit">Update Profile</button>
        </form>
      )}
    </div>
    </>
  );
};

export default Profile;

