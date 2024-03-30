import React, { useState, useEffect } from 'react';
import { Button, Divider, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

import DoctorReports from './DoctorReport';
import HomeVisit from './HomeVisit';
import Hospitalization from './Hospitalize';
import SlotAppointmentTable from './SlotAppointmentTable';
import Vaccination from './Vaccination';
import DoctorProfile from './DoctorProfile';

const Vendornavbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [imageVisible, setImageVisible] = useState(true); // Add state for image visibility

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // Hide the image when an option is selected
    setImageVisible(false);
  };

  const renderSelectedOption = () => {
    switch (selectedOption) {
      case 'Profile':
        return <DoctorProfile />;
      case 'Vaccination':
        return <Vaccination/>;
      case 'HomeVisit':
        return <HomeVisit/>;
      case 'Hospitalization':
        return <Hospitalization />;
      case 'Reports':
        return <DoctorReports/>;
      case 'Appointments':
        return <SlotAppointmentTable />;
    //   case 'Services':
    //     return <Services />;
    //   case 'Appointment':
    //     return <DrAppointment />;
    //   case 'Daycare':
    //     return <Daycare />;
    //   case 'Training':
    //     return <Training />;
    //   case 'History':
    //     return <History />;
    //   case 'VaccinationForm':
    //     return <VaccinationForm />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.getDate().toString().padStart(2, '0') + '-' + (currentTime.getMonth() + 1).toString().padStart(2, '0') + '-' + currentTime.getFullYear();
  const formattedTime = currentTime.getHours().toString().padStart(2, '0') + ':' + currentTime.getMinutes().toString().padStart(2, '0') + ':' + currentTime.getSeconds().toString().padStart(2, '0');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="containeruser">
      <style>
  {`
  .containeruser {
    display: flex;
  }
  
  .sidebaruser {
    height: 100vh;
    width: 193px; /* Set a fixed width for the sidebar */
    background-color: rgb(3, 55, 84);
    overflow-x: hidden;
    padding-top: 10px;
    margin-top: 0px;
    position: fixed;
  }
  
  .sidebaruser a {
    padding: 30px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #e9dada;
    font-weight: 600;
    display: block;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
    margin-top: 5px;
  }
  
  .sidebaruser a:hover {
    color: #e3fc04;
  }
  
  .iconic a:hover {
    background-color: #007bff;
    color: white;
    display: block;
    padding: 15px 20px;
    text-decoration: none;
  }
  
  .iconic a {
    color: #ebece2;
    display: block;
    padding: 15px 20px;
    text-decoration: none;
    transition: all 0.25s;
    font-size:20px;
  }
  
  .iconic a:hover i {
    transform: rotate(360deg);
    transition: all 0.25s;
  }
  
  .iconic a i {
    font-size: 20px;
    transition: all 0.25s;
  }
  .content {
    flex: 1;
    background-color: #f2f2f2;
    margin-left: 16%;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    background-color: rgb(3, 55, 84);
  }
  
  .navbar h3 {
    color: white;
    padding-left: 5px;
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
  
  .selected-option {
    padding: 20px;
  }
  
  
  @media screen and (max-width: 768px) {
    .containeruser {
      flex-direction: column;
      align-items: stretch;
    }
  
    .sidebaruser {
      width: 90%; 
      position: fixed; 
      z-index: 1; 
    }
  
    .content {
      margin-left: 193px;
    }
  }
  `}
</style>
      
      <div className="sidebaruser" style={{ width: '193px' }}>
  <div className="iconic">
    <a href="#" onClick={() => handleOptionClick('Profile')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-user"></i> Profile</a>
    <a href="#" onClick={() => handleOptionClick('Appointments')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-calendar-check"></i> Appointments</a>
    <a href="#" onClick={() => handleOptionClick('HomeVisit')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-home"></i> Home Visit</a>
    <a href="#" onClick={() => handleOptionClick('Hospitalization')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-hospital"></i> Hospitalization</a>
    <a href="#" onClick={() => handleOptionClick('Reports')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-file-alt"></i> Reports</a>
    <a href="#" onClick={() => handleOptionClick('Vaccination')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-syringe"></i> Vaccination Request</a>
    <a href='/' style={{textDecoration:"none", color:"white"}}><i className="fa fa-sign-out-alt"></i> Logout</a>
  </div>
</div>     
      <div className="content">
        <div className="navbar">
          <div className='builder' style={{ display: 'flex', padding: "24px" }}>
            <i className="fa fa-home" style={{ fontSize: '40px', color: 'yellow', marginRight: '20px' }}></i>
            <a href="#" style={{textDecoration:"none"}}><h3 style={{ color: 'white', paddingLeft: "0px" }}>Doctor Home</h3></a>
          </div>
          <div className="datetime" style={{ color: 'white' }}>
            <p><i className="fa fa-handshake" style={{ fontSize: '50px', marginRight: '20px', color: 'gold' }}></i></p>
            <p>Date: {formattedDate}
            <span style={{ marginLeft: '20px' }}> Time: {formattedTime}</span></p>
          </div>
        </div>
        {(imageVisible && (selectedOption === null || selectedOption === 'img')) && (
        <div className="selected-option">
          <div>
            <img src='https://wallpapers.com/images/high/1440p-disney-background-p2hc3ek94p3qzg6s.webp'style={{width:"100%"}}></img>
          </div>
        </div>
        )}
        {renderSelectedOption()}
      </div>
    </div>
  );
};

export default Vendornavbar;
