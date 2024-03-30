import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Petcare from '../assets/petcare logo.jpg';
import cart from '../assets/shopping-cart.gif';
import profile from '../assets/profile.gif';
import homegif from '../assets/home.gif';
import about from '../assets/information.gif';
import './NavigationBarstyle.css';

function NavigationBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // Define your 'items' array here
  const items = [
    { name: 'Cat', url: '/pets' },
    { name: 'Dog', url: '/pets' },
    { name: 'Rabit', url: '/pets' },
    { name: 'Goat', url: '/pets' },
    { name: 'Sheap', url: '/pets' },
    { name: 'Poultry', url: '/pets' },
    { name: 'Elephant', url: '/pets' },
    { name: 'Birds', url: '/pets' },
    { name: 'Toys', url: '/pets' },
    { name: 'Food', url: '/pets' },
    { name: 'Cloths', url: '/pets' },
    { name: 'Grooming', url: '/pets' },
    { name: 'Health & Care', url: '/userprofilelogin' },
    { name: 'Vet care', url: '/userprofilelogin' },
    {name: 'User', url: '/userprofilelogin'},
    // Add more items as needed
  ];

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (type) => {
    switch (type) {
      case 'Doctor':
        window.location.href = '/doctorlogin';
        break;
      case 'Vendor':
        window.location.href = '/vendorprofilelogin';
        break;
      case 'Admin':
        window.location.href = '/adminlogin';
        break;
      case 'User':
        window.location.href = '/userprofilelogin';
        break;
      default:
        break;
    }
  };
  

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredItems(filteredItems);
  };

  const handleItemClick = (url) => {
    window.location.href = url;
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "rgb(31, 26, 58)", height:"80px"
    }}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{marginLeft:"0px"}}>
          <img src={Petcare} alt="Petcare Logo" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
        </Link>
        
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{marginLeft:"50px"}}>
                <img src={homegif} alt="Home" style={{ height: "30px", width: "30px", borderRadius: "50%" }} />
                <b style={{color:"white", marginLeft:"10px"}}>Home</b>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/signupoptions" style={{marginLeft:"40px"}}>
                <img src={profile} alt="Profile" style={{ height: "30px", width: "30px", borderRadius: "50%" }} />
                <b style={{color:"white", marginLeft:"10px"}}>SignUp</b>
              </Link>
            </li> */}
               <li className="nav-item">
              <Link className="nav-link" to="/contactus" style={{marginLeft:"50px"}}>
                <img src={cart} alt="Cart" style={{ height: "30px", width: "30px", borderRadius: "50%" }} />
                <b style={{color:"white", marginLeft:"10px"}}>Contact</b>
              </Link>
            </li>

            <form className="form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()} style={{ marginLeft: "30px" }}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for products, brands and more"
            value={searchTerm}
            onChange={handleSearch}
            style={{ width: "300px", marginLeft:"40px" }}
          />
        </form>
        {searchTerm && (
          <ul className="navbar-nav mr-auto" style={{ position: 'absolute', top: '60px', left: '480px', zIndex: '999', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', padding: '10px' }}>
            {filteredItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link"
                  href={item.url}
                  onClick={() => handleItemClick(item.url)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}

         
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus" style={{marginLeft:"60px"}}>
                <img src={about} alt="About" style={{ height: "30px", width: "30px", borderRadius: "50%" }} />
                <b style={{color:"white", marginLeft:"10px"}}>About</b>
              </Link>
            </li>
            
          </ul>
          <div className="nav-item dropdown" style={{marginLeft:"60px"}}>
        <button
              className="btn btn-outline-success my-2 my-sm-0 dropdown-toggle"
              onClick={handleDropdownClick}
              style={{color:"white"}}
              
          ><img src={profile} alt="Profile" style={{ height: "30px", width: "30px", borderRadius: "50%" }} />
          <b>SignIn</b>
        </button>
        {showDropdown && (
        <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item" onClick={() => handleOptionClick('Doctor')}>Doctor</button>
            <button className="dropdown-item" onClick={() => handleOptionClick('Vendor')}>Vendor</button>
            <button className="dropdown-item" onClick={() => handleOptionClick('Admin')}>Admin</button>
            <button className="dropdown-item" onClick={() => handleOptionClick('User')}>User</button>
        </div>
        )}
        </div>

        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
