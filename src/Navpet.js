// Navpet.js

import React from "react";
import { Link } from "react-router-dom";
import { getPetDetails } from "./components/Authstate";

function Navpet() {

  const pet=getPetDetails();
  return (
    <>
      <style>
        {`
          /* Your CSS styles here */
          .Nav-list {
            list-style-type: none;
            list-style-position: inside;
            display: flex;
            margin: 0;
            padding: 0px;
            background-color: darkmagenta;
            position: sticky;
            top: 0;
            z-index: 999;
          }
          
          .nav-item {
            margin-right: 7%;
            font-size: 16px;
            position: relative;
          }
          
          .Nav {
            color: rgb(225, 220, 230);
            text-decoration: none;
            padding: 5px;
            display: block;
          }
          
          .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            box-shadow: 0 8px 10px #f50e0e33;
            width:120px;
            height: 5px;
            z-index: 4;
            margin-top: 1px;
            margin-left:3%;
            text-align: center;
            font-size: 1rem;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          }
          
          .dropdown-content a {
            padding: 10px;
            display: block;
            color: black;
            text-decoration: none;
            background-color: white;
          }
          
          .nav-item:hover .dropdown-content {
            display: block;
          }
          
          .dropdown-content a:hover {
            background-color: darkmagenta;
            color: #f9f9f9;
          }
        `}
      </style>

      <div className="bg-container">
        <ul className="Nav-list" >
          <li className="nav-item" >
            <Link to="/userhome" className="Nav">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="#" className="Nav">
              Items
            </Link>

            <div className="dropdown-content">
              <Link to="/Items">
                <a href="#">Food</a>
              </Link>
              <Link to="/Accessories">
                <a href="#">Clothing</a>
              </Link>
              <Link to="/Accessories">
                <a href="#">Toys</a>
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="#" className="Nav">
              Assistance
            </Link>

            <div className="dropdown-content">
              <Link to="/Funding">
                <a href="#">Funding</a>
              </Link>
              <Link to="/Reportlost">
                <a href="#">Report Lost</a>
              </Link>
              <Link to="/Adoption">
                <a href="#">Adoption</a>
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/PetProfile" className="Nav">
              Pet Profile
            </Link>
          </li>

          <li className="nav-item">
            <Link to="#" className="Nav">
              Miscellaneous
            </Link>

            <div className="dropdown-content">
              <Link to="/Sales">
                <a href="#">Sales</a>
              </Link>
              <Link to="/Purchases">
                <a href="#">Purchases</a>
              </Link>
              <Link to="/Shows">
                <a href="#">Shows</a>
              </Link>
            </div>
          </li>

          <li className="nav-item">
            <Link to="/DrAppointment" className="Nav">
              Dr Appointment
            </Link>
          </li>

          {/* <li className="nav-item">
            <p> {pet.fullname}</p>
          </li> */}

          <li className="nav-item">
            <Link to="/Signout" className="Nav">
              Signout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navpet;
