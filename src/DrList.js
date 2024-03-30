// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function DoctorsList() {
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     try {
//       const response = await axios.get('http://localhost:9005/petex/getAll');
//       setDoctors(response.data);
//     } catch (error) {
//       console.error('Error fetching doctors:', error);
//     }
//   };

//   return (
//     <div className="containerdoctor">
//       <div className="row">
//         {doctors.map(doctor => (
//           <div key={doctor.doctId} className="col-md-3 mb-4">
//             <div className="card h-100">
//               <div className="card-body">
//                 <h5 className="card-title">{doctor.doctorName}</h5>
//                 <p className="card-text">Qualification: {doctor.qualificationAndSpecialization}</p>
//                 <p className="card-text">Overall Experience: {doctor.overAllExperience}</p>
//                 <p className="card-text">Mobile Number: {doctor.mobileNumber}</p>
//                 <p className="card-text">Email: {doctor.email}</p>
//                 <p className="card-text">Registration Body: {doctor.registrationBody}</p>
//                 <Link to="/appointmentform"><button className="btn btn-primary">Book Appointment</button></Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DoctorsList;


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // // import Sidebar from "./Sidebar";
// // import './Drpriya.css';
// // function PetInfoForm1() {
// //   const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
// //   const [unavailableSlots, setUnavailableSlots] = useState([]);
// //   const [selectedDate, setSelectedDate] = useState(null);
// //   const [allTimeSlots] = useState([
// //     "10:00 AM", "10:20 AM", "10:40 AM",
// //     "11:00 AM", "11:20 AM", "11:40 AM",
// //     "12:00 PM", "12:20 PM", "12:40 PM",
// //     "2:00 PM", "2:20 PM", "2:40 PM",
// //     "3:00 PM", "3:20 PM", "3:40 PM",
// //     "4:00 PM", "4:20 PM", "4:40 PM",
// //     "5:00 PM", "5:20 PM"
// //   ]);
// //   const [formSubmitted, setFormSubmitted] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [bookedSlots, setBookedSlots] = useState([]);
// //   const [petName, setPetName] = useState("");
// //   const [petBreed, setPetBreed] = useState("");
// //   const [userEmail, setUserEmail] = useState("");
// //   const [userMobileNumber, setUserMobileNumber] = useState("");
// //   const [petDescription, setPetDescription] = useState("");
// //   const navigate=useNavigate();
// //   useEffect(() => {
// //     async function fetchBookedSlotsdata() {
// //       try {
// //         const response = await axios.get("http://localhost:2001/api/v1/checkAvailability", {
// //           params: { date: selectedDate }
// //         });

// //         const availableSlots = response.data;
// //         setUnavailableSlots(availableSlots);

// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     }

// //     if (selectedDate) {
// //       fetchBookedSlotsdata();
// //     }
// //   }, [selectedDate]);

// //   const handleSlotClick = (clickedTime) => {
// //     if (
// //       !formSubmitted &&
// //       !unavailableSlots.includes(clickedTime) &&
// //       !bookedSlots.some(
// //         (slot) => slot.time === clickedTime && slot.date === selectedDate
// //       )
// //     ) {
// //       setSelectedTimeSlot(clickedTime);
// //     }
// //   };

// //   const handleDateChange = (e) => {
// //     e.preventDefault();
// //     const selectedDate = e.target.value;
// //     const currentDate = new Date().toISOString().split('T')[0];

// //     if (selectedDate >= currentDate) {
// //       setSelectedDate(selectedDate);
// //     } else {
// //       alert("Please select a future date");
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!validateForm()) {
// //       return;
// //     }

// //     const pojoData = {
// //       bookingDate: selectedDate,
// //       bookingTime: selectedTimeSlot,
// //       petName: petName,
// //       petBreed: petBreed,
// //       userEmail: userEmail,
// //       userMobileNumber: userMobileNumber,
// //       typeOfService: e.target.typeOfService.value,
// //       petDescription: petDescription,
// //     };

// //     try {
// //       setLoading(true);
// //       const response = await axios.post('http://localhost:2001/api/v1/save', pojoData);
// //       const res = response.data;

// //       setBookedSlots((prevBookedSlots) => [...prevBookedSlots, res]);
// //       setFormSubmitted(true);
// //       setLoading(false);
// //       e.target.reset();

// //       if (res.statusCode === "OK") {
// //         setUnavailableSlots([]);
// //         setBookedSlots([]);
// //        navigate('/Payment',{state:{pojoData}});
// //       }
// //     } catch (error) {
// //       console.error("Error submitting form:", error);
// //       setLoading(false);
// //     }
// //   };

// //   const validateForm = () => {
// //     if (!petName || !petBreed || !userEmail || !userMobileNumber || !petDescription) {
// //       alert("All fields are required");
// //       return false;
// //     }

// //     if (!validateEmail(userEmail)) {
// //       alert("Invalid email format");
// //       return false;
// //     }

// //     if (!validateMobileNumber(userMobileNumber)) {
// //       alert("Invalid mobile number format");
// //       return false;
// //     }

// //     return true;
// //   };

// //   const validateEmail = (email) => {
// //     const re = /\S+@\S+\.\S+/;
// //     return re.test(email);
// //   };

// //   const validateMobileNumber = (mobileNumber) => {
// //     const re = /^\d{10}$/;
// //     return re.test(mobileNumber);
// //   };


// //   return (
// //     <>
// //     {/* <Sidebar/> */}
// //       <div className="DoctorProfileCard_card__EWnQO">
// //         <div className="DoctorProfileCard_profilePicBox__TG4pX">
// //           <img
// //             className="DoctorProfileCard_profilePic__rJCCa"
// //             src="https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
// //             height={180}
// //             width={180}
// //           />
// //           <img
// //             src="https://img.freepik.com/premium-vector/pet-clinic-logo-design_626969-91.jpg"
// //             alt="Pet Doctor"
// //             width={60}
// //             height={60}
// //             loading="lazy"
// //             fetchpriority="low"
// //             className="Vj lazy DoctorProfileCard_apolloLogo__RXK6M"
// //           />
// //         </div>
// //         <div className="DoctorProfileCard_info__Oiilv">
// //           <div className="DoctorProfileCard_row__ChdwW">
// //             <h1 className="td sd DoctorProfileCard_doctorName__3YCKI">Dr. Mishra</h1>
// //           </div>
// //           <div className="DoctorProfileCard_mobileRow__TKq2D">
// //             <h2 className="ud sd DoctorProfileCard_specialty__9MYzI Fd Nd" style={{ marginRight: "90%" }}>Petsurgern</h2>
// //             <div className="DoctorProfileCard_row__ChdwW">
// //               <h3 className="vd sd DoctorProfileCard_experience__mhy22 Gd Od">15+ years experience</h3>
// //               <p className="zd sd DoctorProfileCard_divider__Aj4Ns Hd Nd">|</p>
// //               <div className="DoctorProfileCard_recommendation__XSQno">
// //                 <img
// //                   src="https://images.apollo247.in/images/doctor-profile/recommended.svg?tr=w-50,q-80,f-webp,dpr-1,c-at_max"
// //                   alt="recommendation"
// //                   width={20}
// //                   height={20}
// //                   loading="lazy"
// //                   fetchpriority="low"
// //                   className="Vj lazy"
// //                 />
// //                 <h3 className="vd sd DoctorProfileCard_rating__fAnjp Kd Nd">Recommended by 100%</h3>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="DoctorProfileCard_infoText__WPFu4">
// //             <div className="DoctorProfileCard_infoImage__YqxdW">
// //               <img
// //                 src="https://images.apollo247.in/images/doctor-profile/education-light.svg?tr=w-60,q-80,f-webp,dpr-1,c-at_max"
// //                 alt="education"
// //                 width={24}
// //                 height={24}
// //                 loading="lazy"
// //                 fetchpriority="low"
// //                 className="Vj lazy"
// //               />
// //             </div>
// //             <h3 className="vd sd Gd Pd">MBBS; &nbsp;MCh (Vetonary)</h3>
// //           </div>
// //           <div className="DoctorProfileCard_infoText__WPFu4 DoctorProfileCard_languages__b2jER">
// //             <div className="DoctorProfileCard_infoImage__YqxdW">
// //               <img
// //                 src="https://images.apollo247.in/images/doctor-profile/languages.svg?tr=w-45,q-80,f-webp,dpr-1,c-at_max"
// //                 alt="language"
// //                 width={18}
// //                 height={18}
// //                 loading="lazy"
// //                 fetchpriority="low"
// //                 className="Vj lazy"
// //               />
// //             </div>
// //             <h3 className="vd sd Gd Pd">English, Hindi,Telugu</h3>
// //           </div>
// //           <div className="DoctorProfileCard_addressBox__OUwET">
// //             <div className="DoctorProfileCard_infoImage__YqxdW">
// //               <img
// //                 src="https://images.apollo247.in/images/doctor-profile/profile-location.svg?tr=w-60,q-80,f-webp,dpr-1,c-at_max"
// //                 alt="location"
// //                 width={24}
// //                 height={24}
// //                 loading="lazy"
// //                 fetchpriority="low"
// //                 className="Vj lazy"
// //               />
// //             </div>
// //             <div className="DoctorProfileCard_addressInfo__LQMf5">
// //               <div className="DoctorProfileCard_row__ChdwW">
// //                 <h3 className="vd sd DoctorProfileCard_clinicName__Y4amb Gd Nd">Pet Hospitals Jubilee Hills</h3>
// //               </div>
// //               <h4 className="wd sd DoctorProfileCard_address__sekEZ Hd Pd">Pet Hospitals Jubilee Hills, Rd Number 72, Opposite Bharatiya Vidya Bhavan School, Film Nagar Telangana </h4>
// //             </div>
// //           </div>
// //           <div className="DoctorProfileCard_recommendation__XSQno DoctorProfileCard_showOnMobile__4HL53">
// //             <img
// //               src="https://icons.veryicon.com/png/o/healthcate-medical/at-icon-library/popular-recommendation.png"
// //               alt="recommendation"
// //               width={20}
// //               height={20}
// //               loading="lazy"
// //               fetchpriority="low"
// //               className="Vj Uj"
// //             />
// //             <h3 className="vd sd DoctorProfileCard_rating__fAnjp Hd Nd">Recommended by 100%</h3>
// //           </div>
// //         </div>
// //       </div>
// // <br/>
// //      <div className="opconslut" style={{ border: "1px solid", width: "40%", marginLeft: "31%", display: "inline-block" }}>
// //         <form className="form-container" onSubmit={handleSubmit}>
// //           <div className="form-group booking-date-container">
// //             <label htmlFor="bookingDate">Booking Date:</label>
// //             <input
// //               type="date"
// //               id="bookingDate"
// //               name="bookingDate"
// //               onChange={handleDateChange}
// //             />
// //           </div>

// //          {allTimeSlots.map((time, index) => {
// //             const isUnavailable =
// //               unavailableSlots.includes(time) &&
// //               bookedSlots.some(
// //                 (slot) => slot.date === selectedDate && slot.time === time
// //               );

// //             return (
// //               <label
// //                 key={index}
// //                 className={`time-slot ${
// //                   isUnavailable
// //                     ? "unavailable"
// //                     : selectedTimeSlot === time
// //                     ? "selected"
// //                     : ""
// //                 }`}
// //               >
// //                 <input
// //                   type="radio"
// //                   className="option-input radio"
// //                   name="timeSlot"
// //                   onChange={() => handleSlotClick(time)}
// //                   disabled={isUnavailable}
// //                   checked={selectedTimeSlot === time}
// //                 />
// //                 {time}
// //               </label>
// //             );
// //           })}

// //           <div className="form-group">
// //             <label htmlFor="petName">Pet Name:</label>
// //             <input type="text" id="petName" name="petName" onChange={(e) => setPetName(e.target.value)} />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="petBreed">Pet Breed:</label>
// //             <input type="text" id="petBreed" name="petBreed" onChange={(e) => setPetBreed(e.target.value)} />
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="userEmail">User Email:</label>
// //             <input type="email" id="userEmail" name="userEmail" onChange={(e) => setUserEmail(e.target.value)} />
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="userMobileNumber">User Mobile Number:</label>
// //             <input type="tel" id="userMobileNumber" name="userMobileNumber" onChange={(e) => setUserMobileNumber(e.target.value)} />
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="typeOfService">Type of Service:</label>
// //             <select id="typeOfService" name="typeOfService">
// //               <option value="service">Select Consulting</option>
// //               <option value="Online Consulting">Online Consulting</option>
// //               <option value="Physical Consulting">Physical Consulting</option>
// //             </select>
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="petDescription">Pet Description:</label>
// //             <textarea
// //               id="petDescription"
// //               name="petDescription"
// //               defaultValue={""}
// //               onChange={(e) => setPetDescription(e.target.value)}
// //             />
// //           </div>

// //           <button type="submit" disabled={loading || formSubmitted || !selectedTimeSlot}>
// //             {loading ? "Submitting..." : "Submit"}
// //           </button>
// //         </form>
// //       </div>
// //     </>
// //   );
// // }


// // export default PetInfoForm1;


import React from "react";
// import Navpet from "./Navpet";
import { Link } from "react-router-dom";
// import Sidebar from "./Sidebar";
import CommonNav from './CommonNav';

function DrAppointment() {
  const onChange = () => {
    
  };
  return (
    <>
      {/* <Sidebar/> */}
      {/* <CommonNav/> */}
      <div className="bodybg" style={{backgroundColor:"whitesmoke"}}>
      <div style={{ display: "flex", marginLeft: "10%", marginTop: "0%" }}>
        <div
          className="card-bodyxyz"
          style={{
            border: "1px solid",
            width: "40%",
            marginTop: "1rem",
            borderRadius: "4rem",
            boxShadow: "revert-layer"
          }}
        >
          <div className="row">
            <div  style={{ display: "flex" }}>
              <div
                className="doctor-img"
                style={{
                  marginLeft: "1%",
                  marginTop: "1%",
                  margin: "2rem",
                  border: "2px",
                  borderRadius: "50%",
                  overflow: "hidden"
                }}
              >
                <img
                  src="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
                  width="100%"
                  height="100vh"
                  className="img-fluid"
                  borderRadius = "100%"
                  alt="Dr Madhu"
                  title="Dr Madhu"
                  
                  
                />
              </div>
              <div className="col-md-5 col-sm-8">
                <div style={{ paddingRight: 30 }}>
                  <h2 className="htitle">Dr Madhu</h2>
                  <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
                  <p className="doc-department">Consultant General Physician</p>
                  <p className="doc-experience">
                    Experience :<span className="notranslate"> 15</span>+ Years
                  </p>
                  <p className="doc-department">Timings : 10 AM - 6 PM</p>
                  <div>
                    
                      <Link to = "/drmadhu"><button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: "blue",
                          padding: "10px 20px",
                          color: "white",
                          borderRadius: "4px",
                          fontSize: "16px",
                          cursor: "pointer",
                          marginBottom : "5%"
                        }}
                      >
                        Click Here
                      </button></Link>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card-bodyxyz"
          style={{
            border: "1px solid",
            width: "40%",
            marginTop: "1rem",
            marginRight: "3%",
            marginLeft: "3%",
            borderRadius: "4rem",
            boxShadow: "revert-layer"
          }}
        >
          <div className="row">
            <div style={{ display: "flex" }}>
              <div
                className="doctor-img"
                style={{
                  marginLeft: "1%",
                  marginTop: "1%",
                  margin: "2rem",
                  border: "2px",
                  borderRadius: "50%",
                  overflow: "hidden"
                }}
              >
                <img
                  src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg"
                  width="100%"
                  height="100vh"
                  className="img-fluid"
                  alt="Dr Mishra"
                  title="Dr Mishra"
                />
              </div>
              <div className="col-md-5 col-sm-8">
                <div className="doc-info-cont" style={{ paddingRight: 30 }}>
                  <h2 className="htitle">Dr Mishra</h2>
                  <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
                  <p className="doc-department">Consultant General Physician</p>
                  <p className="doc-experience">
                    Experience :<span className="notranslate"> 15</span>+ Years
                  </p>
                  <p className="doc-department">Timings : 10 AM - 6 PM</p>
                  <div>
                    <Link to="/drmishra">
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: "blue",
                          padding: "10px 20px",
                          color: "white",
                          borderRadius: "4px",
                          fontSize: "16px",
                          cursor: "pointer",
                          marginBottom : "5%"
                        }}
                      >
                        Click Here
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "10%" }}>
        <div
          className="card-bodyxyz"
          style={{
            border: "1px solid",
            width: "40%",
            marginTop: "1rem",
            borderRadius: "4rem",
            boxShadow: "revert-layer"
          }}
        >
          <div className="row">
            <div  style={{ display: "flex" }}>
              <div
                className="doctor-img"
                style={{
                  marginLeft: "1%",
                  marginTop: "1%",
                  margin: "2rem",
                  border: "2px",
                  borderRadius: "50%",
                  overflow: "hidden"
                }}
              >
                <img
                  src="https://www.shutterstock.com/image-photo/profile-picture-smiling-young-caucasian-260nw-1954278664.jpg"
                  width="100%"
                  height="100vh"
                  className="img-fluid"
                  alt="Dr Nandana Jasti"
                  title="Dr Nandana Jasti"
                />
              </div>
              <div className="col-md-5 col-sm-8">
                <div className="doc-info-cont" style={{ paddingRight: 30 }}>
                 <h2 className="htitle">Dr Nandan Jasti</h2>
                  <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
                  <p className="doc-department">Consultant General Physician</p>
                  <p className="doc-experience">
                    Experience :<span className="notranslate"> 15</span>+ Years
                  </p>
                  <p className="doc-department">Timings : 10 AM - 6 PM</p>
                  <div>
                    <Link to="/drnandan">
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: "blue",
                          padding: "10px 20px",
                          color: "white",
                          borderRadius: "4px",
                          fontSize: "16px",
                          cursor: "pointer",
                          marginBottom : "5%",
                        }}
                      >
                        Click Here
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card-bodyxyz"
          style={{
            border: "1px solid",
            width: "40%",
            marginTop: "1rem",
            marginRight: "3%",
            marginLeft: "3%",
            borderRadius: "4rem",
            boxShadow: "revert-layer"
          }}
        >
          <div className="row">
            <div  style={{ display: "flex" }}>
              <div
                className="doctor-img"
                style={{
                  marginLeft: "1%",
                  marginTop: "1%",
                  margin: "2rem",
                  border: "2px",
                  borderRadius: "50%",
                  overflow: "hidden"
                }}
              >
                <img
                  src="https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
                  width="100%"
                  height="100vh"
                  className="img-fluid"
                  alt="Dr Priya"
                  title="Dr Priya"
                />
              </div>
              <div className="col-md-5 col-sm-8">
                <div className="doc-info-cont" style={{ paddingRight: 30 }}>
                  <h2 className="htitle">Dr Priya</h2>
                  <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
                  <p className="doc-department">Consultant General Physician</p>
                  <p className="doc-experience">
                    Experience :<span className="notranslate"> 15</span>+ Years
                  </p>
                  <p className="doc-department">Timings : 10 AM - 4 PM</p>
                  <div>
                    <Link to="/drpriya">
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: "blue",
                          padding: "10px 20px",
                          color: "white",
                          borderRadius: "4px",
                          fontSize: "16px",
                          cursor: "pointer",
                          marginBottom : "5%"
                        }}
                      >
                        Click Here
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div style={{ display: "flex", marginLeft: "10%" }}>
        <div
          className="card-bodyxyz"
          style={{
            border: "1px solid",
            width: "40%",
            marginTop: "1rem",
            borderRadius: "4rem",
            boxShadow: "revert-layer"
          }}
        >
          <div className="row">
            <div  style={{ display: "flex" }}>
              <div
                className="doctor-img"
                style={{
                  marginLeft: "1%",
                  marginTop: "1%",
                  margin: "2rem",
                  border: "2px",
                  borderRadius: "50%",
                  overflow: "hidden"
                }}
              >
                <img
                  src="https://as1.ftcdn.net/v2/jpg/02/25/70/72/1000_F_225707294_V0jKFrHm1Bm5mLQjTAhKFplaWQIgdHby.jpg"
                  width="100%"
                  height="100vh"
                  className="img-fluid"
                  borderRadius = "100%"
                  alt="Dr Roshan"
                  title="Dr Roshan"
                  
                  
                />
              </div>
              <div className="col-md-5 col-sm-8">
                <div className="doc-info-cont" style={{ paddingRight: 30 }}>
                <h2 className="htitle">Dr Rohan</h2>
                  <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
                  <p className="doc-department">Consultant General Physician</p>
                  <p className="doc-experience">
                    Experience :<span className="notranslate"> 15</span>+ Years
                  </p>
                  <p className="doc-department">Timings : 10 AM - 4 PM</p>
                  <div>
                    <Link to="/drrohan">
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: "blue",
                          padding: "10px 20px",
                          color: "white",
                          borderRadius: "4px",
                          fontSize: "16px",
                          cursor: "pointer",
                          marginBottom : "5%"
                        }}
                      >
                        Click Here
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card-bodyxyz"
          style={{
            border: "1px solid",
            width: "40%",
            marginTop: "1rem",
            marginRight: "3%",
            marginLeft: "3%",
            borderRadius: "4rem",
            boxShadow: "revert-layer"
          }}
        >
          <div className="row">
            <div  style={{ display: "flex" }}>
              <div
                className="doctor-img"
                style={{
                  marginLeft: "1%",
                  marginTop: "1%",
                  margin: "2rem",
                  border: "2px",
                  borderRadius: "50%",
                  overflow: "hidden"
                }}
              >
                <img
                  src="https://as1.ftcdn.net/v2/jpg/02/95/51/80/1000_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg"
                  width="100%"
                  height="100vh"
                  className="img-fluid"
                  alt="Dr Mahesh"
                  title="Dr Mahesh"
                />
              </div>
              <div className="col-md-5 col-sm-8">
                <div className="doc-info-cont" style={{ paddingRight: 30 }}>
                <h2 className="htitle">Dr Mahesh</h2>
                  <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
                  <p className="doc-department">Consultant General Physician</p>
                  <p className="doc-experience">
                    Experience :<span className="notranslate"> 15</span>+ Years
                  </p>
                  <p className="doc-department">Timings : 9 AM - 6 PM</p>
                  <div>
                    <Link to="/drmahesh">
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: "blue",
                          padding: "10px 20px",
                          color: "white",
                          borderRadius: "4px",
                          fontSize: "16px",
                          cursor: "pointer",
                          marginBottom : "5%"
                        }}
                      >
                        Click Here
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "10%" }}>
        <div
          className="card-bodyxyz"
          style={{
            border: "1px solid",
            width: "40%",
            marginTop: "1rem",
            borderRadius: "4rem",
            boxShadow: "revert-layer"
          }}
        >
          <div className="row">
            <div  style={{ display: "flex" }}>
              <div
                className="doctor-img"
                style={{
                  marginLeft: "1%",
                  marginTop: "1%",
                  margin: "2rem",
                  border: "2px",
                  borderRadius: "50%",
                  overflow: "hidden"
                }}
              >
                <img
                  src="https://as2.ftcdn.net/v2/jpg/02/69/98/99/1000_F_269989951_9Gf7PWaRtrpm2EochO3D5WVn22sFZbNZ.jpg"
                  width="100%"
                  height="100vh"
                  className="img-fluid"
                  alt="Dr Arjun"
                  title="Dr Arjun"
                />
              </div>
              <div className="col-md-5 col-sm-8">
                <div className="doc-info-cont" style={{ paddingRight: 30 }}>
                  <h2 className="htitle">Dr Arjun</h2>
                  <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
                  <p className="doc-department">Consultant General Physician</p>
                  <p className="doc-experience">
                    Experience :<span className="notranslate"> 15</span>+ Years
                  </p>
                  <p className="doc-department">Timings : 9 AM - 4 PM</p>
                  <div>
                    <Link to="/drarjun">
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: "blue",
                          padding: "10px 20px",
                          color: "white",
                          borderRadius: "4px",
                          fontSize: "16px",
                          cursor: "pointer",
                          marginBottom : "5%",
                        }}
                      >
                        Click Here
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card-bodyxyz"
          style={{
            border: "1px solid",
            width: "40%",
            marginTop: "1rem",
            marginRight: "3%",
            marginLeft: "3%",
            borderRadius: "4rem",
            boxShadow: "revert-layer"
          }}
        >
          <div className="row">
            <div  style={{ display: "flex" }}>
              <div
                className="doctor-img"
                style={{
                  marginLeft: "1%",
                  marginTop: "1%",
                  margin: "2rem",
                  border: "2px",
                  borderRadius: "50%",
                  overflow: "hidden"
                }}
              >
                <img
                  src="https://as2.ftcdn.net/v2/jpg/06/26/06/43/1000_F_626064398_MrAIqN3P1JKhtJeOI2aBmDtrNT0drPZK.webp"
                  width="100%"
                  height="100vh"
                  className="img-fluid"
                  alt="Dr Yogitha Pillay"
                  title="Dr Yogitha Pillay"
                />
              </div>
              <div className="col-md-5 col-sm-8">
                <div className="doc-info-cont" style={{ paddingRight: 30 }}>
            
              <h2 className="htitle">Dr Yogitha Pillay</h2>
                  <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
                  <p className="doc-department">Consultant General Physician</p>
                  <p className="doc-experience">
                    Experience :<span className="notranslate"> 15</span>+ Years
                  </p>
                  <p className="doc-department">Timings : 9 AM - 6 PM</p>
                  <div>
                    <Link to="/dryogitha">
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: "blue",
                          padding: "10px 20px",
                          color: "white",
                          borderRadius: "4px",
                          fontSize: "16px",
                          cursor: "pointer",
                          marginBottom : "5%"
                        }}
                      >
                        Click Here
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default DrAppointment;
