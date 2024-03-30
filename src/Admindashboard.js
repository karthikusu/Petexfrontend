// import React from "react";
// import Adminstyle from './AdminStyle';
// import RevenueGraph from "./RevenueGraph";
// import profile from './profile.gif';
// import Adminheader from './Adminheader'
// import { Link } from "react-router-dom";
// import Chart from 'chart.js/auto';

// import axios from 'axios';
// import { useState, useEffect, useRef } from 'react';



// const App = ({user}) => {
//   const [error, setError] = useState(null);
//   const [filteredData, setFilteredData] = useState([]);
//   const [formData, setFormData] = useState([]);
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Total Cost',
//         data: [],
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1,
//       },
//     ],
//   });

//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (formData.length === 0) {
//       axios.get('http://localhost:9011/petex/getAll')
//         .then(response => {
//           setFormData(response.data);
//           setFilteredData(response.data);
//         })
//         .catch(error => {
//           setError(error.message);
//           console.error('Error fetching data:', error);
//         });
//     }
//   }, [formData.length]);

//   useEffect(() => {
//     if (chartRef && chartRef.current) {
//       const ctx = chartRef.current.getContext('2d');
//       if (ctx) {
//         // Destroy existing chart if it exists
//         if (chartRef.current.chart) {
//           chartRef.current.chart.destroy();
//         }
//         // Create new chart
//         chartRef.current.chart = new Chart(ctx, {
//           type: 'line',
//           data: chartData,
//         });
//       }
//     }
//   }, [chartData]);
//   return (
//     <> <br/>
//     <div style={{marginLeft:"17%", marginRight:"-1.3%", marginTop:"1.5%"}}>
//     <Adminheader/></div>
//     <div className="container" id="container">
      
      
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }
//         body {
//           display: flex;
//           width: 100%;
//           height: auto;
//           align-items: center;
//           background: linear-gradient(rgb(255, 227, 255), rgb(232, 255, 239),rgb(153, 213, 255));
//           align-items: center;
//           justify-content: center;
//           margin-top:-3%;
//           margin-left:-1%;
//         }
//         #container {
//           display: flex;
//           flex-direction: column;
//           width: 200px;
//           height: 600px;
//           margin-right: 1000px;
//           margin-top: 0px;
//           border-radius: 10px;
//           background: #fff;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
//           transition: 1s;
//         }
//         body {
//           display: flex;
//           width: 100%;
//           height: auto;
//           align-items: center;
//           background: rgb(229, 219, 255);
//           align-items: center;
//           justify-content: center;
//         }
//         #container {
//           display: flex;
//           flex-direction: column;
//           width: 200px;
//           height: 700px;
//           margin-right: 1000px;
//           margin-top: -80px;
//           border-radius: 10px;
//           background: rgb(95, 138, 109);
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
//           transition: 1s;
//         }
//         #container.active {
//           display: flex;
//           width: 70px;
//         }
//         #container .brand {
//           display: flex;
//           width: 100%;
//           height: 40px;
//           padding: 0 10px;
//           margin: 10px 0;
//           align-items: center;
//           justify-content: space-between;
//         }
//         #container.active .brand {
//           width: 100%;
//           align-items: center;
//           justify-content: center;
//         }
//         #container .brand .logo {
//           display: flex;
//           width: 35px;
//           height: 35px;
//           border-radius: 50%;
//           align-items: center;
//           justify-content: center;
//         }
//         #container.active .brand .logo,
//         #container.active .brand h3,
//         #container.active .search #search,
//         #container.active .navbar ul li a span,
//         #container.active .user img,
//         #container.active .user .name {
//           display: none;
//         }
//         #container .brand .logo ion-icon {
//           display: flex;
//           color: #191919;
//           font-size: 20px;
//         }
//         #container .brand h3 {
//           display: flex;
//           font-size: 20px;
//           color: #191919;
//         }
//         #container .brand a {
//           display: flex;
//           width: 30px;
//           height: 30px;
//           align-items: center;
//           justify-content: center;
//         }
//         #container.active .brand a,
//         #container.active .brand a ion-icon {
//           display: flex;
//           width: 80%;
//         }
//         #container .brand a ion-icon {
//           display: flex;
//           color: #191919;
//           font-size: 30px;
//           background: transparent;
//         }
//         #container .navbar {
//           display: flex;
//           width: 90%;
//           height: auto;
//           margin: 10px 0;
//           align-items: center;
//           justify-content: center;
// 		  margin-top: -200px;
//         }
//         #container.active .navbar ul {
//           display: flex;
//           width: 90%;
//           align-items: center;
//           justify-content: center;
//         }
//         #container .navbar ul {
//           display: flex;
//           flex-direction: column;
//           height: 100%;
//           width: 100%;
//           align-items: flex-start;
//           justify-content: center;
//         }
//         #container .navbar ul li {
//           display: flex;
//           height: 40px;
//           width: 100%;
//           margin: 5px 0;
//           border-radius: 7px;
//         }
//         #container .navbar ul li a {
//           display: flex;
//           width: 100%;
//           height: 100%;
//           text-decoration: none;
//           border-radius: 7px;
//           align-items: center;
//           justify-content: left;
//         }
//         #container.active .navbar ul li a {
//           align-items: center;
//           justify-content: center;
//         }
//         #container .navbar ul li a span {
//           display: flex;
//           color: #191919;
//           font-size: 14px;
//           border-radius: 7px;
//         }
//         #container .navbar ul li a ion-icon {
//           display: flex;
//           font-size: 20px;
//           margin: 0 15px;
//           color: #191919;
          
//         }
//         #container .navbar ul li a:hover,
//         #container .navbar ul li a:hover span,
//         #container .navbar ul li a:hover ion-icon {
//           font-weight: bold;
//           color: deepskyblue;
//           background: green;
        
//         }
//         #container .user {
//           display: flex;
//           width: 50px;
//           height: 70px;
//           background: #f1f1f1;
//           align-items: center;
//           justify-content: center;
//         }
//         #container.active .user {
//           width: 80%;
//           height: 100%;
//           margin: 10% 0;
//           border-radius: 10px;
//         }
//         #container .user img {
//           display: flex;
//           width: 30px;
//           height: 30px;
//           margin: 10px 0;
//           margin-left: 10px;
//           border-radius: 5px;
//         }
//         #container .user .name {
//           display: flex;
//           flex-direction: column;
//           width: 90px;
//           height: 60%;
//           padding: 5px;
//           margin: 0 10px;
//         }
//         #container .user .name h5 {
//           display: flex;
//           font-size: 12px;
//         }
//         #container .user .name span {
//           display: flex;
//           font-size: 10px;
//         }
//         #container .user a {
//           display: flex;
//           height: 40px;
//           width: 40px;
//           align-items: center;
//           justify-content: center;
//           border-radius: 7px;
//         }
//         #container .user a ion-icon {
//           display: flex;
//           color: #f20505;
//           font-size: 30px;
//         }
//         #container .search {
//           display: flex;
//           width: 90%;
//           height: 40px;
//           margin: 10px 0;
//           border: none;
//           border-radius: 6px;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
//           margin-right: 0;
//         }
//         .notification-icon {
//           margin-right: 8px;
//         }
//       `}</style>
     
//       <div className="brand" >
//         <div className="Admindata" style={{marginLeft:"220px", marginTop:"200%", display:"flex"}}>
//           <Adminstyle/>
//           <p style={{marginLeft:"10%"}}>
//           <RevenueGraph/></p>
//            {/* <div style={{ marginTop: '20px' }}>
//           <canvas ref={chartRef}></canvas>
//         </div> */}
          
//         </div>
//         <div className="logo">
//         </div>
//       </div>
//       <div className="navbar" >
//         <ul style={{color:"white"}}>
//           {/* <Link to="/AdminProfile" style={{textDecoration:"none", color:"white"}}><p><img src={profile} style={{height:"50px", width:"50px", borderRadius:"50%", marginRight:"2%"}}/>Admin</p></Link> */}
//           <a href="#" id="toggle"></a>
//           <li >
//             <a href="/sellingreport">
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <span style={{color:"white", fontSize:"18px",marginTop:"-30%"}}>Selling Report</span>
//               </div>
//             </a>
//           </li>
//           <li>
//             <a href="/user">
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <span style={{color:"white",fontSize:"18px",marginTop:"-50%"}}>Users</span>
//               </div>
//             </a>
//           </li>
//           <li>
//             <a href="/vendor">
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <span style={{color:"white",fontSize:"18px",marginTop:"-30%"}}>Vendors</span>
//               </div>
//             </a>
//           </li>
//           <li>
//             <a href="/appointmentlist">
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <span style={{color:"white",fontSize:"18px",marginTop:"-30%"}}>Appointments</span>
//               </div>
//             </a>
//           </li>
//           <li>
//             <a href="/doctors">
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <span style={{color:"white",fontSize:"18px",marginTop:"-30%"}}>Doctors</span>
//               </div>
//             </a>
//           </li>
//           <li>
//             <a href="/reportlost">
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <span style={{color:"white",fontSize:"18px",marginTop:"-30%"}}>Report Lost</span>
//               </div>
//             </a>
//           </li>
//           <li>
//             <a href="/">
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <span style={{color:"white",fontSize:"18px",marginTop:"-30%"}}>LOGOUT</span>
//               </div>
//             </a>
//           </li>
//         </ul>
//       </div>
      
        
       
//     </div>
//     </>
    
//   );
// };

// export default App;

import React from "react";
import Adminstyle from './AdminStyle';
import RevenueGraph from "./RevenueGraph";
import profile from './profile.gif';
import Adminheader from './Adminheader'
import { Link } from "react-router-dom";
import Chart from 'chart.js/auto';
// import './Adminnavbar.css';



import axios from 'axios';
import { useState, useEffect, useRef } from 'react';



const App = ({user}) => {
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [formData, setFormData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Total Cost',
        data: [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  const chartRef = useRef(null);

  useEffect(() => {
    if (formData.length === 0) {
      axios.get('http://localhost:9011/petex/getAll')
        .then(response => {
          setFormData(response.data);
          setFilteredData(response.data);
        })
       
    }
  }, [formData.length]);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Destroy existing chart if it exists
        if (chartRef.current.chart) {
          chartRef.current.chart.destroy();
        }
        // Create new chart
        chartRef.current.chart = new Chart(ctx, {
          type: 'line',
          data: chartData,
        });
      }
    }
  }, [chartData]);
  return (
    <> <br/>
    <div style={{marginLeft:"17%", marginRight:"-1.3%", marginTop:"1.5%"}}>
    <Adminheader/></div>
    <div className="container" id="container">
      
      
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          display: flex;
          width: 100%;
          height: auto;
          align-items: center;
          background: white;
          align-items: center;
          justify-content: center;
          margin-top:-3%;
          margin-left:-1%;
        }
        #container {
          display: flex;
          flex-direction: column;
          width: 200px;
          height: 600px;
          margin-right: 1000px;
          margin-top: 0px;
          border-radius: 10px;
          background: whitesmoke;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
          transition: 1s;
        }
        body {
          display: flex;
          width: 100%;
          height: auto;
          align-items: center;
          background: whitesmoke;
          align-items: center;
          justify-content: center;
        }
        #container {
          display: flex;
          flex-direction: column;
          width: 200px;
          height: 700px;
          margin-right: 1000px;
          margin-top: -80px;
          border-radius: 10px;
          
          align-items: center;
          justify-content: center;
          box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
          transition: 1s;
        }
        #container.active {
          display: flex;
          width: 70px;
        }
        #container .brand {
          display: flex;
          width: 100%;
          height: 40px;
          padding: 0 10px;
          margin: 10px 0;
          align-items: center;
          justify-content: space-between;
        }
        #container.active .brand {
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        #container .brand .logo {
          display: flex;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
        }
        #container.active .brand .logo,
        #container.active .brand h3,
        #container.active .search #search,
        #container.active .navbar ul li a span,
        #container.active .user img,
        #container.active .user .name {
          display: none;
        }
        #container .brand .logo ion-icon {
          display: flex;
          color: #191919;
          font-size: 20px;
        }
        #container .brand h3 {
          display: flex;
          font-size: 20px;
          color: #191919;
        }
        #container .brand a {
          display: flex;
          width: 30px;
          height: 30px;
          align-items: center;
          justify-content: center;
        }
        #container.active .brand a,
        #container.active .brand a ion-icon {
          display: flex;
          width: 80%;
        }
        #container .brand a ion-icon {
          display: flex;
          color: #191919;
          font-size: 30px;
          background: transparent;
        }
        #container .navbar {
          display: flex;
          width: 90%;
          height: auto;
          margin: 10px 0;
          align-items: center;
          justify-content: center;
		  margin-top: -200px;
        }
        #container.active .navbar ul {
          display: flex;
          width: 90%;
          align-items: center;
          justify-content: center;
        }
        #container .navbar ul {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          align-items: flex-start;
          justify-content: center;
        }
        #container .navbar ul li {
          display: flex;
          height: 40px;
          width: 100%;
          margin: 5px 0;
          border-radius: 7px;
        }
        #container .navbar ul li a {
          display: flex;
          width: 100%;
          height: 100%;
          text-decoration: none;
          border-radius: 7px;
          align-items: center;
          justify-content: left;
        }
        #container.active .navbar ul li a {
          align-items: center;
          justify-content: center;
        }
        #container .navbar ul li a span {
          display: flex;
          color: #191919;
          font-size: 14px;
          border-radius: 7px;
        }
        #container .navbar ul li a ion-icon {
          display: flex;
          font-size: 20px;
          margin: 0 15px;
          color: #191919;
          
        }
        #container .navbar ul li a:hover,
        #container .navbar ul li a:hover span,
        #container .navbar ul li a:hover ion-icon {
          font-weight: bold;
          color: deepskyblue;
          background: green;
        
        }
        #container .user {
          display: flex;
          width: 50px;
          height: 70px;
          background: #f1f1f1;
          align-items: center;
          justify-content: center;
        }
        #container.active .user {
          width: 80%;
          height: 100%;
          margin: 10% 0;
          border-radius: 10px;
        }
        #container .user img {
          display: flex;
          width: 30px;
          height: 30px;
          margin: 10px 0;
          margin-left: 10px;
          border-radius: 5px;
        }
        #container .user .name {
          display: flex;
          flex-direction: column;
          width: 90px;
          height: 60%;
          padding: 5px;
          margin: 0 10px;
        }
        #container .user .name h5 {
          display: flex;
          font-size: 12px;
        }
        #container .user .name span {
          display: flex;
          font-size: 10px;
        }
        #container .user a {
          display: flex;
          height: 40px;
          width: 40px;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
        }
        #container .user a ion-icon {
          display: flex;
          color: #f20505;
          font-size: 30px;
        }
        #container .search {
          display: flex;
          width: 90%;
          height: 40px;
          margin: 10px 0;
          border: none;
          border-radius: 6px;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
          margin-right: 0;
        }
        .notification-icon {
          margin-right: 8px;
        }

        .adminnavbar{
          width: 20px;
          margin-left: 175px;
          
      }
      .datetime {
          display: flex;
          align-items: center;
          font-size: larger;   
      }
      
      .datetime p {
          margin: 0;
          font-weight: bold;
      }
      
       a {
          text-decoration: none;
          font-size: 10px;
          color: #fdfafa;
          font-weight: 800;
          border: none;
          text-align: left;
          cursor: pointer;
          outline: none;
          justify-content: space-between; 
          display: block;   
      
        }
      
      
      
      .adminsidebar {
      
          height: 1000px;
          position: fixed;
          top: 0;
          left: 2px;
          background-color: #09015f;
          overflow-x: hidden;
          padding-top: 60px;
          margin-top: 0px;
           width: 198px;    
       
      }
      
      
      .adminsidebar a {
          padding: 30px 8px 16px 26px;
          text-decoration: none;
          font-size: 20px;
          color: #eee8e8;
          font-weight: 700;
          display: block;
          border: none;
          width: 130%;
          text-align: left;
          cursor: pointer;
          outline: none;
          margin-top: 0px;
        }
      .adminsidebar a:hover{
          color: #ff7070;
      }
      .iconic i{
          color: #f64e67;
      }
      
       
        .adminsidebar a:nth-child(3) {
          margin-top: 30px; 
        }
      
      `}</style>
     
      <div className="brand" >
        <div className="Admindata" style={{marginLeft:"213px", marginTop:"220%", display:"flex"}}>
          <Adminstyle/>
         
           {/* <div style={{ marginTop: '20px' }}>
          <canvas ref={chartRef}></canvas>
        </div> */}
          
        </div>
        <div className="logo">
        </div>
      </div>
      <div className="adminsidebar" >
        <div className="iconic">
          <a href="/user"><i className="fa fa-home"></i> Users</a>
          <a href="/vendor"><i className="fa fa-store"></i> Vendors</a>
          <a href="/doctors"><i className="fa fa-hospital"></i> Doctors</a>
          <a href="/appointmentslots"><i className="fa fa-calendar-check"></i> Appointments</a>
          <a href="/Sellingreport"><i className="fa fa-chart-line"></i> Selling Reports</a>
          <a href="/homepage"><i className="fa fa-sign-out-alt"></i> Logout</a>
        </div>
      </div>
        
       
    </div>
    </>
    
  );
};

export default App;

