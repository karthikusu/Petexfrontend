// import React, { useState, useEffect } from "react";
// import "./VeterinaryDoctorDashboard.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import DoctorsTable from "./DoctorsTable";
// import './DoctorRegistration.css'; // Import CSS file here
// import BG2 from './vetdoctorbg.jpg';

// const VeterinaryDoctorDashboard = () => {
//   const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const formattedDateTime = currentDateTime.toLocaleString();

//   return (
//     <div style={{ backgroundImage: `url(${BG2})` }}>
//       {/* Navbar */}
//       <div className="navbar-container">
//         <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
//           <div>
//             <img
//               src="https://indnone.com/wp-content/uploads/2023/07/DOCTOR-003.jpg"
//               height={100}
//               width={100}
//               className="navbar-logo"
//             />
//           </div>

//           <a className="navbar-brand" href="/" style={{marginLeft:"100px"}}>
//             Veterinary Doctor Dashboard
//           </a>

//           <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:"100px"}}>
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <p className="navbar-date-time">
//                   Current Date and Time: <span>{formattedDateTime}</span>
//                 </p>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/" style={{marginLeft:"100px", fontSize:"20px"}}>
//                   Logout
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
      

//       {/* Sidebar */}
//       <div className="container-fluid">
//         <div className="row">
//           <nav className="col-md-2 d-none d-md-block bg-secondary sidebar">
//             <div className="sidebar-sticky">
//               <ul className="nav flex-column">
//                 <li className="nav-item">
//                   {/* <span className="nav-link">YourDoctorID</span> */}
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/">
//                     Edit Profile
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/DoctorAppointment.js">
//                     Reports
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/appointmentlist">
//                     Appointments
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/vaccination">
//                     Vaccination Requests
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/homevisit">
//                     Home Visits
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/hospitalization">
//                     Hospitalized
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           <iframe src="" title="doctor" name="petex" id="dashboard-iframe"></iframe>
//           {/* Content Section */}
//           <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
//             {/* Your main content goes here */}
            
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VeterinaryDoctorDashboard;
