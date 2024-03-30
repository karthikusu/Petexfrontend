import React from 'react';

const Sidebar = ({ handleOptionClick }) => {
  return (
    <>
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
  `}
  </style>
    <div className="sidebaruser" style={{ width: '193px' }}>
      <div className="icons">
        <a href="/usernavbar"  style={{ textDecoration: "none", color: "white" }}><i className="fa fa-percent"></i> Profile</a>
        <a href="/usernavbar"  style={{ textDecoration: "none", color: "white" }}><i className="fa fa-cube"></i> Items</a>
        <a href="/usernavbar"  style={{ textDecoration: "none", color: "white" }}><i className="fa fa-chart-bar"></i> Pet Types</a>
        <a href="/usernavbar"  style={{ textDecoration: "none", color: "white" }}><i className="fa fa-building"></i>Assistance</a>
        <a href="/usernavbar"  style={{ textDecoration: "none", color: "white" }}><i className="fa fa-handshake"></i> Services</a>
        <a href="/usernavbar"  style={{ textDecoration: "none", color: "white" }}><i className="fa fa-cut"></i>Book Appointment</a>
        <a href="/usernavbar"  style={{ textDecoration: "none", color: "white" }}><i className="fa fa-graduation-cap"></i> Vaccination</a>
        <a href="/usernavbar"  style={{ textDecoration: "none", color: "white" }}><i className="fa fa-graduation-cap"></i> Home Visit</a>
        <a href="/usernavbar"  style={{ textDecoration: "none", color: "white" }}><i className="fa fa-graduation-cap"></i> Hospitalization</a>
        <a href="/usernavbar" onClick={() => handleOptionClick('History')} style={{ textDecoration: "none", color: "white" }}><i className="fa fa-sign-out-alt"></i> History</a>
      </div>
    </div>
    </div>
    </>
  );
};

export default Sidebar;
