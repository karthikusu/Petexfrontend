import React from 'react';
import DoctorProfile from './DoctorProfile';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
    <div className="app-container">
      <div className="sidebar">
        <div className="logo">
          <h1>Vet Doctor</h1>
        </div>
        <ul>
          
          {/* <Link to="/doctorprofile"  style={{textDecoration:"none"}}><li>My Profile</li></Link>
          <li>Edit Profile</li> */}
          <Link to="/appointmentlist"  style={{textDecoration:"none"}}><li>Appointments</li></Link>
          <Link to="/homevisit"  style={{textDecoration:"none"}}><li>Home Visits</li></Link>
          <Link to="/vaccination"  style={{textDecoration:"none"}}><li>Vaccination Requests</li></Link>
          <Link to="/reports"  style={{textDecoration:"none"}}><li>Reports</li></Link>
          <Link to="/hospitalization"  style={{textDecoration:"none"}}><li>Hospitalization</li></Link>
          <Link to="/"  style={{textDecoration:"none"}}><li>Logout</li></Link>
        </ul>
      </div>
      <div className="main-content" style={{backgroundColor:"darkgrey"}}>
        <div className="header">
          <div className="profile">
                <div className="container-fluid mt-5">
    
    </div>
            {/* <DoctorProfile/> */}
          </div>
          
        </div>
        <div className="content">
          {/* Add the content for each dashboard section here */}
        </div>
      </div>
    </div>
    <style>
  {`
    .app-container {
      display: flex;
      height: 100vh;
      background-color: #f5f5f5;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      width: 250px;
      background-color: rgb(109, 95, 179);
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      border-bottom: 1px solid #7136a3;
    }

    .logo h1 {
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .sidebar ul {
      list-style: none;
      padding: 0;
      margin: 0;
      flex: 1;
    }

    .sidebar li {
      padding: 10px;
      color: #fff;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }

    .sidebar li:hover {
      background-color: #7136a3;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin-left: 1%;
      border-radius: 8px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .profile {
      display: flex;
      align-items: center;
    }

    .profile img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .info {
      margin-left: 20px;
    }

    .info h2 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
    }

    .notifications {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: #f04;
      border-radius: 50%;
      color: #fff;
      font-size: 1.2rem;
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .section {
      display: flex;
      flex-direction: column;
      background-color: #f5f5f5;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .section-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
    }

    .section-actions {
      display: flex;
      align-items: center;
    }

    .section-actions button {
      margin-left: 10px;
    }

    .section-content {
      display: flex;
      flex-direction: column;
    }

    .card {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 20px;
      margin-bottom: 20px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .card-title {
      font-size: 1.2rem;
      font-weight: bold;
      color: #333;
    }

    .card-actions {
      display: flex;
      align-items: center;
    }

    .card-actions button {
      margin-left: 10px;
    }

    .card-content {
      display: flex;
      flex-direction: column;
    }
  `}
</style>
    </>
  );
};


export default App;
  