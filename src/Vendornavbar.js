import React, { useState, useEffect } from 'react';
// import './Vendornavbar.css';
import Training22 from './VendorTrainingForm';
import GroomingForm from './GroomingForm';
import BreedPage from './BreedPage';
import HouseBourdForm from './HouseBourdForm';
import SellingReport from './RevenueGraph';
import VendorItemsForm from './VendorItemsForm';
import Grooming from './Grooming';
import HousingBourding from './HousingBourding';
import Shows from './Shows';
import PetTypesForm from './PetTypesForm';
import VendorProfilePage from './VendorProfilePage';
import VendorDaycareForm from './Vendordaycareform';
import VendorServicesList from './VendorServicesList';

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
      case 'VendorProfile':
        return <VendorProfilePage />;

      // case 'Offers':
      //   return <Shows />;
      
      case 'Vendor Items':
        return <VendorItemsForm />;
        case 'Pet Types':
        return <PetTypesForm />;
      case 'SellingReport':
        return <SellingReport />;
      case 'Housing Boarding':
        return <HousingBourding />;
      case 'Breeding':
        return <BreedPage />;
      case 'Grooming':
        return <Grooming />;
      case 'Training':
        return <Training22 />;
      case 'DayCare':
        return <VendorDaycareForm />;
      case 'VendorServices':
        return <VendorServicesList/>;
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
    <div className="containervendor">
      <style>
        {`
        .containervendor {
          display: flex;
        }
        
        .sidebar {
          height: 100vh;
          // width: ${sidebarOpen ? '193px' : '48px'};
          background-color: rgb(3, 55, 84);
          overflow-x: hidden;
          padding-top: 10px;
          margin-top: 0px;
          position: fixed;
        }
        
        .sidebar a {
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
        
        .sidebar a:hover {
          color: yellow;
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
          padding: 10px;
        }
        
       
        @media screen and (max-width: 768px) {
          .containervendor {
            flex-direction: column;
            align-items: stretch;
          }
        
          .sidebar {
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
      <div className="sidebar" style={{ width:'193px' }}>
  <div className="iconic">
    <a href="#" onClick={() => handleOptionClick('VendorProfile')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-user"></i> Profile</a>
    <a href="#" onClick={() => handleOptionClick('Vendor Items')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-cube"></i> Items</a>
    <a href="#" onClick={() => handleOptionClick('Pet Types')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-paw"></i> Pet Adoptions</a>
    <a href="#" onClick={() => handleOptionClick('SellingReport')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-chart-bar"></i> Selling Report</a>
    {/* <a href="#" onClick={() => handleOptionClick('Housing Boarding')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-home"></i> Housing Boarding</a> */}
    {/* <a href="#" onClick={() => handleOptionClick('Breeding')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-paw"></i> Breeding</a> */}
    {/* <a href="#" onClick={() => handleOptionClick('Grooming')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-cut"></i> Grooming</a> */}
    {/* <a href="#" onClick={() => handleOptionClick('Training')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-graduation-cap"></i> Training</a> */}
    <a href="#" onClick={() => handleOptionClick('DayCare')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-cut"></i>Services</a>
    <a href="#" onClick={() => handleOptionClick('VendorServices')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-cut"></i>List Of Services</a>
    <a href='/' style={{textDecoration:"none", color:"white"}}><i className="fa fa-sign-out-alt"></i> Logout</a>
  </div>
</div>
 
      <div className="content">
        <div className="navbar">
          <div className='builder' style={{ display: 'flex', padding: "24px" }}>
            <i className="fa fa-home" style={{ fontSize: '40px', color: 'yellow', marginRight: '20px' }}></i>
            <a href="#" style={{textDecoration:"none"}}><h3 style={{ color: 'white', paddingLeft: "0px" }}>Vendor Home</h3></a>
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
            <img src='https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_1280.jpg'style={{width:"100%"}}></img>
          </div>
        </div>
        )}
        {renderSelectedOption()}
      </div>
    </div>
  );
};

export default Vendornavbar;
