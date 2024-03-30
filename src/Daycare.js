import React from "react";
import { Link } from "react-router-dom";
import './Daycare.css'; // Import your CSS file for styling
import img1 from "./images/pet1.jpg";
import vendorimage from "./images/vendorimage2.jpg";
import vendorimage1 from "./images/vendorimages3.jpg";
import vendorimage2 from "./images/vendorimages4.jpg";
import vendorimage3 from "./images/vendorlionimage.jpg";
import vendorimage4 from "./images/vendorimage5.jpg";
import vendorimage5 from "./images/vendorimage6.webp";

function Daycare() {
  return (
    <>
      <div className="petday">
        <div className="pet-header">
          <h1><a href="/usernavbar" style={{textDecoration:"none", color:"black"}}>Home</a></h1>
          <img src="https://branition.com/assets/img/users/logos/7707-TVtrVNf.webp?v2" alt="" />
          <h1>Day Care</h1>
        </div>
      </div>

      <div>
        <img src={img1} alt="..." className="pet-image" />
      </div>

      <div className="why-choose-us">
        <h2>-----------WHY CHOOSE US------------</h2>
        <p>We Understand That Your Pets Are More Than Just Pets, They’re Family</p>
        <h2 style={{color:"black", textAlign:"left"}} >Description :</h2>
        <p>Day Care for pets is a great way for pet owners to provide their furry friends with a safe and fun environment while they are away from home. Day Care is a great option for busy pet owners who don't have the time to provide their pets with the care they need on a daily basis. Day Care typically consists of supervised activities and playtime that can help keep pets active and healthy while owners are away</p>
      </div>

      <div className="daycare-cards">
        <div className="daycare-card">
          <img src={vendorimage} alt="" />
          <div className="card-details">
            <h4>PETS HEAVEN</h4>
            <h6>City: Tirupati</h6>
            <h6>Price: 570/day</h6>
            <h6>Location <Link to="/Location">Tirupati</Link></h6>
            <div className="rating">
              <h6>Rating:</h6>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
            <Link to="/Bookfordaycare"><button className="styled-button">Book Now</button></Link>
          </div>
        </div>

        <div className="daycare-card">
          <img src={vendorimage1} alt="" />
          <div className="card-details">
            <h4>CARE PETS</h4>
            <h6>City: Tirupati</h6>
            <h6>Price: 700/day</h6>
            <h6>Location <Link to="/Location1">Tirupati</Link></h6>
            <div className="rating">
              <h6>Rating:</h6>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
            <Link to="/Bookfordaycare"><button className="styled-button">Book Now</button></Link>
          </div>
        </div>

        <div className="daycare-card">
          <img src={vendorimage2} alt="" />
          <div className="card-details">
            <h4>PETS CARE</h4>
            <h6>City: Kukatpalli</h6>
            <h6>Price: 570/day</h6>
            <h6>Location <Link to="/Location2">Kukatpalli</Link></h6>
            <div className="rating">
              <h6>Rating:</h6>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
            <Link to="/Bookfordaycare"><button className="styled-button">Book Now</button></Link>
          </div>
        </div>

        <div className="daycare-card">
          <img src={vendorimage3} alt="" />
          <div className="card-details">
            <h4>PETS HEAVEN</h4>
            <h6>City: Tirupati</h6>
            <h6>Price: 570/day</h6>
            <h6>Location <Link to="/Location">Tirupati</Link></h6>
            <div className="rating">
              <h6>Rating:</h6>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
            <Link to="/Bookfordaycare"><button className="styled-button">Book Now</button></Link>
          </div>
        </div>

        <div className="daycare-card">
          <img src={vendorimage4} alt="" />
          <div className="card-details">
            <h4>CARE PETS</h4>
            <h6>City: Tirupati</h6>
            <h6>Price: 700/day</h6>
            <h6>Location <Link to="/Location1">Tirupati</Link></h6>
            <div className="rating">
              <h6>Rating:</h6>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
            <Link to="/Bookfordaycare"><button className="styled-button">Book Now</button></Link>
          </div>
        </div>

        <div className="daycare-card">
          <img src={vendorimage5} alt="" />
          <div className="card-details">
            <h4>PETS CARE</h4>
            <h6>City: Kukatpalli</h6>
            <h6>Price: 570/day</h6>
            <h6>Location <Link to="/Location2">Kukatpalli</Link></h6>
            <div className="rating">
              <h6>Rating:</h6>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
            <Link to="/Bookfordaycare"><button className="styled-button">Book Now</button></Link>
          </div>
        </div>
        {/* Repeat similar structure for other daycare cards */}
      </div>
    </>
  );
}

export default Daycare;
