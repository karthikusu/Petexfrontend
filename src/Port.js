// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { getUserDetails } from "./Authstate";
// // import TrainerNav from "./Trainernav";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// function Profile() {
//   const [userProfile, setUserProfile] = useState([]);
//   const [showNestedCard, setShowNestedCard] = useState(false);
//   const [showNestedCard1, setShowNestedCard1] = useState(false);
//   const [showNestedCard2, setShowNestedCard2] = useState(false);
//   const [showNestedCard3, setShowNestedCard3] = useState(false);
//   const [showNestedCard4, setShowNestedCard4] = useState(false);
//   const user = getUserDetails();
//   const [inputData, setInputData] = useState([]);
//   const navigate = useNavigate();

//   function handleSubmit(event) {
//     event.preventDefault();
//     axios
//       .put(`http://localhost:9090/prava/user/${user.userId}`)
//       .then((res) => {
//         console.log(res); // Log the entire response for debugging
//         // Log the email specifically
//         console.log("Email updated:", res.data.email);
//         alert("Email updated successfully");
//         navigate("/Profile"); // Navigate to another route if needed
//       })
//       .catch((err) => {
//         console.error(err); // Log the error
//         alert("Error occurred while updating email. Please try again.");
//       });
//   }

//   const handleToggleNestedCard = () => {
//     setShowNestedCard(!showNestedCard);
//   };
//   const handleToggleNestedCard1 = () => {
//     setShowNestedCard1(!showNestedCard1);
//   };
//   const handleToggleNestedCard2 = () => {
//     setShowNestedCard2(!showNestedCard2);
//   };
//   const handleToggleNestedCard3 = () => {
//     setShowNestedCard3(!showNestedCard3);
//   };
//   const handleToggleNestedCard4 = () => {
//     setShowNestedCard4(!showNestedCard4);
//   };
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const userDetails = getUserDetails();
//     if (userDetails) {
//       fetch(`http://localhost:9090/prava/user/${userDetails.userId}`)
//         .then((response) => response.json())
//         .then((profileData) => {
//           setUserProfile(profileData);
//           console.log(profileData);
//         })
//         .catch((error) => {
//           console.error("Error fetching profile data:", error);
//         });
//     }
//   }, []);

//   return (
//     <>
//       {/* <TrainerNav /> */}
//       <div className="container-fluid" style={{ fontFamily: "sans-serif" }}>
//         <div className="row">
//           <div className="col-12">
//             <div className="container mx-auto">
//               {Object.keys(userProfile).length > 0 && (
//                 <div className="bg-white p-1 ">
//                   <div class="row">
//                     <div className="col-4">
//                       <div
//                         className=" col-xl-4 card p-1 mt-5  shadow bg-transparent "
//                         style={{
//                           width: " 23rem",
//                           height: "47rem",
//                           borderRadius: "2rem",
//                           borderColor: "lightgrey",
//                         }}
//                       >
//                         <div className="card-body">
//                           <div class="row">
//                             <div class="col-6">
//                               <p className="card-text">Personal information</p>
//                             </div>
//                             <div class=" text-primary col-3">
//                               ID: {userProfile.userId}
//                             </div>
//                             <div class="col-3">
//                               Edit
//                               <Link to="/create" className="">
//                                 <img
//                                   style={{ width: "2.5rem" }}
//                                   src="data:image/jpeg;base64,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"
//                                 />
//                               </Link>
//                             </div>
//                           </div>
//                           <br></br>
//                           <div className="row">
//                             <div className="col-4">
//                               <img
//                                 style={{ width: "5rem" }}
//                                 src="data:image/jpeg;base64,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"
//                               />
//                             </div>
//                             <p className=" col-8  text-primary">
//                               {userProfile.firstName} {userProfile.lastName}
//                               <br></br>
//                               <div className="row text-dark-emphasis">
//                                 <div className="col-6">
//                                   <h6><i class="fa-solid fa-graduation-cap text-warning"></i> {userProfile.specialization}</h6>
//                                 </div>
//                                 <div className="col-6">
//                                   <h6><i class="fa-solid fa-graduation-cap text-warning"></i> {userProfile.qualification}</h6>
//                                 </div>
//                               </div>
//                               <div className="row text-dark-emphasis">
//                                 <div className="col-6">
//                                   <h6>{userProfile.mobileNumber}</h6>
//                                 </div>
//                                 <div className="col-6">
//                                   <h6>{userProfile.state}</h6>
//                                 </div>
//                               </div>
//                             </p>
//                             <p>
//                               {" "}
//                               <img
//                                 style={{ width: "2rem" }}
//                                 src="data:image/png;base64,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"
//                               />
//                               {userProfile.address}
//                             </p>
//                           </div>
//                           <h6><i class="fa-solid fa-graduation-cap text-warning"></i> Languages Known</h6>

//                           <div className="row">
//                             <div className="col-4">
//                               <div className="card">
//                                 <div className="text-center">
//                                   {" "}
//                                   <img
//                                     style={{ width: "1.5rem" }}
//                                     src="https://cdn-icons-png.freepik.com/256/9463/9463151.png"
//                                   />
//                                   {userProfile.language1}
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="col-4">
//                               <div className="card">
//                                 <div className="text-center">
//                                   {" "}
//                                   <img
//                                     style={{ width: "1.5rem" }}
//                                     src="https://cdn-icons-png.freepik.com/256/9463/9463151.png"
//                                   />
//                                   {userProfile.language2}
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="col-4">
//                               <div className="card">
//                                 <div className="text-center">
//                                   {" "}
//                                   <img
//                                     style={{ width: "1.5rem" }}
//                                     src="https://cdn-icons-png.freepik.com/256/9463/9463151.png"
//                                   />
//                                   {userProfile.language3}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <br></br>
//                           <h6><i class="fa-solid fa-graduation-cap text-warning"></i> Expertise In Subjects</h6>
//                           <div className="row">
//                             <div className="col-4">
//                               <div className="card">
//                                 <div className="text-center">
//                                   {" "}
//                                   <img
//                                     style={{ width: "1.5rem" }}
//                                     src="https://cdn-icons-png.freepik.com/256/9463/9463151.png"
//                                   />
//                                   {userProfile.subject1}
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="col-4">
//                               <div className="card">
//                                 <div className="text-center">
//                                   {" "}
//                                   <img
//                                     style={{ width: "1.5rem" }}
//                                     src="https://cdn-icons-png.freepik.com/256/9463/9463151.png"
//                                   />
//                                   {userProfile.subject2}
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="col-4">
//                               <div className="card">
//                                 <div className="text-center">
//                                   {" "}
//                                   <img
//                                     style={{ width: "1.5rem" }}
//                                     src="https://cdn-icons-png.freepik.com/256/9463/9463151.png"
//                                   />
//                                   {userProfile.subject3}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <br></br>

//                           <hr></hr>

//                           <p>Email Id:</p>

//                           <i class="fa-solid fa-envelope text-warning"></i>
//                           <p class="text-primary">{userProfile.email}</p>
//                           <hr></hr>

//                           <h6>Skills</h6>

//                           <br></br>

//                           <div className="d-flex justify-content-between">
//                             <div className="card">Communication skills</div>

//                             <div className="card">Class Management</div>
//                           </div>

//                           <br></br>

//                           <div className="d-flex justify-content-between">
//                             <div className="card">Fluent English </div>

//                             <div className="card">Education Teaching</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-8 p-2">
//                       <div class=" container-fluid ">
//                         <div
//                           className=" col-xl-8  bg-success-subtle card p-1 mt-5 ml-3"
//                           style={{ width: " 45rem", height: "7rem" }}
//                         >
//                           <div class="row">
//                             <div class="col-2 ms-5 p-2">
//                               <img
//                                 style