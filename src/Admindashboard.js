import React from "react";
// import RecentOrders from './RecentOrders';
import Adminstyle from './AdminStyle';
import RevenueGraph from "./RevenueGraph";

const App = () => {
  return (
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
          height: 100vh;
          align-items: center;
          background: #d9ecf5;
          align-items: center;
          justify-content: center;
        }
        #container {
          display: flex;
          flex-direction: column;
          width: 200px;
          height: 700px;
          margin-right: 1000px;
          margin-top: 50px;
          border-radius: 10px;
          background: #fff;
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
          background: #f1f1f1;
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
      `}</style>
      <div className="brand">
	  <div className="Admindata" style={{marginLeft:"200px", marginTop:"200px"}}>
		<Adminstyle/>
		<RevenueGraph/>
		</div>
          <div className="logo">
           
          </div>
          
        </div>
        <div className="navbar">
          <ul>
		  <h3>ADMIN DASHBOARD</h3>
          <a href="#" id="toggle">
           
          </a>
            <li>
              <a href="/orders">
              <div style={{ display: 'flex', alignItems: 'center' }}>    
                <span>Orders</span></div>
              </a>
            </li>
            <li>
              <a href="/user">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Users</span></div>
              </a>
            </li>
            <li>
              <a href="/vendor">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Vendors</span></div>
              </a>
            </li>
            <li>
              <a href="/appointmentlist">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>Appointments</span></div>
              </a>
            </li>
            <li>
              <a href="/doctors">
              <div style={{ display: 'flex', alignItems: 'center' }}>             
                <span>Doctors</span></div>
              </a>
            </li>
            <li>
              <a href="#">
              <div style={{ display: 'flex', alignItems: 'center' }}>
               
                <span>Donatations</span></div>
              </a>
            </li>
            <li>
              <a href="#">
              <div style={{ display: 'flex', alignItems: 'center' }}>
              
                <span>LOGOUT</span></div>
              </a>
            </li>
          </ul>
        </div>

        <a href="#">
         
        </a>
		
      </div>
	  
  );
};

export default App;
