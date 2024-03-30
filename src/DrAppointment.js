// import React from "react";

// import { Link } from "react-router-dom";

// function DrAppointment() {
//   const onChange = () => {
    
//   };
//   return (
//     <>
      
//       <div style={{ display: "flex", marginLeft: "15%", marginTop: "2%" }}>
//         <div
//           className="card-body"
//           style={{
//             border: "1px solid",
//             width: "50%",
//             marginTop: "1rem",
//             borderRadius: "4rem",
//             boxShadow: "revert-layer"
//           }}
//         >
//           <div className="row">
//             <div className="col-md-2 col-sm-4" style={{ display: "flex" }}>
//               <div
//                 className="doctor-img"
//                 style={{
//                   marginLeft: "1%",
//                   marginTop: "1%",
//                   margin: "2rem",
//                   border: "2px",
//                   borderRadius: "50%",
//                   overflow: "hidden"
//                 }}
//               >
//                 <img
//                   src="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
//                   width="100%"
//                   height="200vh"
//                   className="img-fluid"
//                   borderRadius = "100%"
//                   alt="Dr Madhu"
//                   title="Dr Madhu"
                  
                  
//                 />
//               </div>
//               <div className="col-md-5 col-sm-8">
//                 <div className="doc-info-cont" style={{ paddingRight: 30 }}>
//                   <h2 className="htitle">Dr Madhu</h2>
//                   <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
//                   <p className="doc-department">Consultant General Physician</p>
//                   <p className="doc-experience">
//                     Experience :<span className="notranslate"> 15</span>+ Years
//                   </p>
//                   <p className="doc-department">Timings : 10 AM - 6 PM</p>
//                   <div>
                    
//                       <Link to = "Drmadhu"><button
//                         type="submit"
//                         className="btn"
//                         style={{
//                           backgroundColor: "blue",
//                           padding: "10px 20px",
//                           color: "white",
//                           borderRadius: "4px",
//                           fontSize: "16px",
//                           cursor: "pointer",
//                           marginBottom : "5%"
//                         }}
//                       >
//                         Click Here
//                       </button></Link>
                  
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className="card-body"
//           style={{
//             border: "1px solid",
//             width: "50%",
//             marginTop: "1rem",
//             marginRight: "3%",
//             marginLeft: "3%",
//             borderRadius: "4rem",
//             boxShadow: "revert-layer"
//           }}
//         >
//           <div className="row">
//             <div className="col-md-2 col-sm-4" style={{ display: "flex" }}>
//               <div
//                 className="doctor-img"
//                 style={{
//                   marginLeft: "1%",
//                   marginTop: "1%",
//                   margin: "2rem",
//                   border: "2px",
//                   borderRadius: "50%",
//                   overflow: "hidden"
//                 }}
//               >
//                 <img
//                   src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg"
//                   width="100%"
//                   height="200vh"
//                   className="img-fluid"
//                   alt="Dr Mishra"
//                   title="Dr Mishra"
//                 />
//               </div>
//               <div className="col-md-5 col-sm-8">
//                 <div className="doc-info-cont" style={{ paddingRight: 30 }}>
//                   <h2 className="htitle">Dr Mishra</h2>
//                   <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
//                   <p className="doc-department">Consultant General Physician</p>
//                   <p className="doc-experience">
//                     Experience :<span className="notranslate"> 15</span>+ Years
//                   </p>
//                   <p className="doc-department">Timings : 10 AM - 6 PM</p>
//                   <div>
//                     <Link to="Drmishra">
//                       <button
//                         type="submit"
//                         className="btn"
//                         style={{
//                           backgroundColor: "blue",
//                           padding: "10px 20px",
//                           color: "white",
//                           borderRadius: "4px",
//                           fontSize: "16px",
//                           cursor: "pointer",
//                           marginBottom : "5%"
//                         }}
//                       >
//                         Click Here
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div style={{ display: "flex", marginLeft: "15%" }}>
//         <div
//           className="card-body"
//           style={{
//             border: "1px solid",
//             width: "50%",
//             marginTop: "1rem",
//             borderRadius: "4rem",
//             boxShadow: "revert-layer"
//           }}
//         >
//           <div className="row">
//             <div className="col-md-2 col-sm-4" style={{ display: "flex" }}>
//               <div
//                 className="doctor-img"
//                 style={{
//                   marginLeft: "1%",
//                   marginTop: "1%",
//                   margin: "2rem",
//                   border: "2px",
//                   borderRadius: "50%",
//                   overflow: "hidden"
//                 }}
//               >
//                 <img
//                   src="https://www.shutterstock.com/image-photo/profile-picture-smiling-young-caucasian-260nw-1954278664.jpg"
//                   width="100%"
//                   height="200vh"
//                   className="img-fluid"
//                   alt="Dr Nandana Jasti"
//                   title="Dr Nandana Jasti"
//                 />
//               </div>
//               <div className="col-md-5 col-sm-8">
//                 <div className="doc-info-cont" style={{ paddingRight: 30 }}>
//                  <h2 className="htitle">Dr Nandan Jasti</h2>
//                   <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
//                   <p className="doc-department">Consultant General Physician</p>
//                   <p className="doc-experience">
//                     Experience :<span className="notranslate"> 15</span>+ Years
//                   </p>
//                   <p className="doc-department">Timings : 10 AM - 6 PM</p>
//                   <div>
//                     <Link to="Drnandhan">
//                       <button
//                         type="submit"
//                         className="btn"
//                         style={{
//                           backgroundColor: "blue",
//                           padding: "10px 20px",
//                           color: "white",
//                           borderRadius: "4px",
//                           fontSize: "16px",
//                           cursor: "pointer",
//                           marginBottom : "5%",
//                         }}
//                       >
//                         Click Here
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className="card-body"
//           style={{
//             border: "1px solid",
//             width: "50%",
//             marginTop: "1rem",
//             marginRight: "3%",
//             marginLeft: "3%",
//             borderRadius: "4rem",
//             boxShadow: "revert-layer"
//           }}
//         >
//           <div className="row">
//             <div className="col-md-2 col-sm-4" style={{ display: "flex" }}>
//               <div
//                 className="doctor-img"
//                 style={{
//                   marginLeft: "1%",
//                   marginTop: "1%",
//                   margin: "2rem",
//                   border: "2px",
//                   borderRadius: "50%",
//                   overflow: "hidden"
//                 }}
//               >
//                 <img
//                   src="https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
//                   width="100%"
//                   height="200vh"
//                   className="img-fluid"
//                   alt="Dr Priya"
//                   title="Dr Priya"
//                 />
//               </div>
//               <div className="col-md-5 col-sm-8">
//                 <div className="doc-info-cont" style={{ paddingRight: 30 }}>
//                   <h2 className="htitle">Dr Priya</h2>
//                   <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
//                   <p className="doc-department">Consultant General Physician</p>
//                   <p className="doc-experience">
//                     Experience :<span className="notranslate"> 15</span>+ Years
//                   </p>
//                   <p className="doc-department">Timings : 10 AM - 4 PM</p>
//                   <div>
//                     <Link to="Drpriya">
//                       <button
//                         type="submit"
//                         className="btn"
//                         style={{
//                           backgroundColor: "blue",
//                           padding: "10px 20px",
//                           color: "white",
//                           borderRadius: "4px",
//                           fontSize: "16px",
//                           cursor: "pointer",
//                           marginBottom : "5%"
//                         }}
//                       >
//                         Click Here
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//       <div style={{ display: "flex", marginLeft: "15%" }}>
//         <div
//           className="card-body"
//           style={{
//             border: "1px solid",
//             width: "50%",
//             marginTop: "1rem",
//             borderRadius: "4rem",
//             boxShadow: "revert-layer"
//           }}
//         >
//           <div className="row">
//             <div className="col-md-2 col-sm-4" style={{ display: "flex" }}>
//               <div
//                 className="doctor-img"
//                 style={{
//                   marginLeft: "1%",
//                   marginTop: "1%",
//                   margin: "2rem",
//                   border: "2px",
//                   borderRadius: "50%",
//                   overflow: "hidden"
//                 }}
//               >
//                 <img
//                   src="https://as1.ftcdn.net/v2/jpg/02/25/70/72/1000_F_225707294_V0jKFrHm1Bm5mLQjTAhKFplaWQIgdHby.jpg"
//                   width="100%"
//                   height="200vh"
//                   className="img-fluid"
//                   borderRadius = "100%"
//                   alt="Dr Roshan"
//                   title="Dr Roshan"
                  
                  
//                 />
//               </div>
//               <div className="col-md-5 col-sm-8">
//                 <div className="doc-info-cont" style={{ paddingRight: 30 }}>
//                 <h2 className="htitle">Dr Rohan</h2>
//                   <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
//                   <p className="doc-department">Consultant General Physician</p>
//                   <p className="doc-experience">
//                     Experience :<span className="notranslate"> 15</span>+ Years
//                   </p>
//                   <p className="doc-department">Timings : 10 AM - 4 PM</p>
//                   <div>
//                     <Link to="Drrohan">
//                       <button
//                         type="submit"
//                         className="btn"
//                         style={{
//                           backgroundColor: "blue",
//                           padding: "10px 20px",
//                           color: "white",
//                           borderRadius: "4px",
//                           fontSize: "16px",
//                           cursor: "pointer",
//                           marginBottom : "5%"
//                         }}
//                       >
//                         Click Here
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className="card-body"
//           style={{
//             border: "1px solid",
//             width: "50%",
//             marginTop: "1rem",
//             marginRight: "3%",
//             marginLeft: "3%",
//             borderRadius: "4rem",
//             boxShadow: "revert-layer"
//           }}
//         >
//           <div className="row">
//             <div className="col-md-2 col-sm-4" style={{ display: "flex" }}>
//               <div
//                 className="doctor-img"
//                 style={{
//                   marginLeft: "1%",
//                   marginTop: "1%",
//                   margin: "2rem",
//                   border: "2px",
//                   borderRadius: "50%",
//                   overflow: "hidden"
//                 }}
//               >
//                 <img
//                   src="https://as1.ftcdn.net/v2/jpg/02/95/51/80/1000_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg"
//                   width="100%"
//                   height="200vh"
//                   className="img-fluid"
//                   alt="Dr Mahesh"
//                   title="Dr Mahesh"
//                 />
//               </div>
//               <div className="col-md-5 col-sm-8">
//                 <div className="doc-info-cont" style={{ paddingRight: 30 }}>
//                 <h2 className="htitle">Dr Mahesh</h2>
//                   <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
//                   <p className="doc-department">Consultant General Physician</p>
//                   <p className="doc-experience">
//                     Experience :<span className="notranslate"> 15</span>+ Years
//                   </p>
//                   <p className="doc-department">Timings : 9 AM - 6 PM</p>
//                   <div>
//                     <Link to="Drmahesh">
//                       <button
//                         type="submit"
//                         className="btn"
//                         style={{
//                           backgroundColor: "blue",
//                           padding: "10px 20px",
//                           color: "white",
//                           borderRadius: "4px",
//                           fontSize: "16px",
//                           cursor: "pointer",
//                           marginBottom : "5%"
//                         }}
//                       >
//                         Click Here
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div style={{ display: "flex", marginLeft: "15%" }}>
//         <div
//           className="card-body"
//           style={{
//             border: "1px solid",
//             width: "50%",
//             marginTop: "1rem",
//             borderRadius: "4rem",
//             boxShadow: "revert-layer"
//           }}
//         >
//           <div className="row">
//             <div className="col-md-2 col-sm-4" style={{ display: "flex" }}>
//               <div
//                 className="doctor-img"
//                 style={{
//                   marginLeft: "1%",
//                   marginTop: "1%",
//                   margin: "2rem",
//                   border: "2px",
//                   borderRadius: "50%",
//                   overflow: "hidden"
//                 }}
//               >
//                 <img
//                   src="https://as2.ftcdn.net/v2/jpg/02/69/98/99/1000_F_269989951_9Gf7PWaRtrpm2EochO3D5WVn22sFZbNZ.jpg"
//                   width="100%"
//                   height="200vh"
//                   className="img-fluid"
//                   alt="Dr Arjun"
//                   title="Dr Arjun"
//                 />
//               </div>
//               <div className="col-md-5 col-sm-8">
//                 <div className="doc-info-cont" style={{ paddingRight: 30 }}>
//                   <h2 className="htitle">Dr Arjun</h2>
//                   <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
//                   <p className="doc-department">Consultant General Physician</p>
//                   <p className="doc-experience">
//                     Experience :<span className="notranslate"> 15</span>+ Years
//                   </p>
//                   <p className="doc-department">Timings : 9 AM - 4 PM</p>
//                   <div>
//                     <Link to="Drarjun">
//                       <button
//                         type="submit"
//                         className="btn"
//                         style={{
//                           backgroundColor: "blue",
//                           padding: "10px 20px",
//                           color: "white",
//                           borderRadius: "4px",
//                           fontSize: "16px",
//                           cursor: "pointer",
//                           marginBottom : "5%",
//                         }}
//                       >
//                         Click Here
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className="card-body"
//           style={{
//             border: "1px solid",
//             width: "50%",
//             marginTop: "1rem",
//             marginRight: "3%",
//             marginLeft: "3%",
//             borderRadius: "4rem",
//             boxShadow: "revert-layer"
//           }}
//         >
//           <div className="row">
//             <div className="col-md-2 col-sm-4" style={{ display: "flex" }}>
//               <div
//                 className="doctor-img"
//                 style={{
//                   marginLeft: "1%",
//                   marginTop: "1%",
//                   margin: "2rem",
//                   border: "2px",
//                   borderRadius: "50%",
//                   overflow: "hidden"
//                 }}
//               >
//                 <img
//                   src="https://as2.ftcdn.net/v2/jpg/06/26/06/43/1000_F_626064398_MrAIqN3P1JKhtJeOI2aBmDtrNT0drPZK.webp"
//                   width="100%"
//                   height="200vh"
//                   className="img-fluid"
//                   alt="Dr Yogitha Pillay"
//                   title="Dr Yogitha Pillay"
//                 />
//               </div>
//               <div className="col-md-5 col-sm-8">
//                 <div className="doc-info-cont" style={{ paddingRight: 30 }}>
            
//               <h2 className="htitle">Dr Yogitha Pillay</h2>
//                   <p className="doc-department">Vetonary, MD (Internal Medicine)</p>
//                   <p className="doc-department">Consultant General Physician</p>
//                   <p className="doc-experience">
//                     Experience :<span className="notranslate"> 15</span>+ Years
//                   </p>
//                   <p className="doc-department">Timings : 9 AM - 6 PM</p>
//                   <div>
//                     <Link to="Dryogitha">
//                       <button
//                         type="submit"
//                         className="btn"
//                         style={{
//                           backgroundColor: "blue",
//                           padding: "10px 20px",
//                           color: "white",
//                           borderRadius: "4px",
//                           fontSize: "16px",
//                           cursor: "pointer",
//                           marginBottom : "5%"
//                         }}
//                       >
//                         Click Here
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DrAppointment;
