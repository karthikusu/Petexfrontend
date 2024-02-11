import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Petcare from '../assets/petcare logo.jpg';
import cart from '../assets/shopping-cart.gif';
import profile from '../assets/profile.gif';
import homegif from '../assets/home.gif';
import about from '../assets/information.gif';
import NavigationBarstyle from './NavigationBarstyle.css';

function NavigationBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // Define your 'items' array here
  const items = [
    { name: 'Cat', url: '/item1' },
    { name: 'Dog', url: '/item2' },
    { name: 'Rabit', url: '/item1' },
    { name: 'Goat', url: '/item2' },
    { name: 'Sheap', url: '/item1' },
    { name: 'Poultry', url: '/item2' },
    { name: 'Elephant', url: '/item1' },
    { name: 'Birds', url: '/item2' },
    { name: 'Toys', url: '/item1' },
    { name: 'Food', url: '/item2' },
    { name: 'Cloths', url: '/item1' },
    { name: 'Grooming', url: '/item2' },
    { name: 'Health & Care', url: '/item1' },
    { name: 'Vet care', url: '/item2' },
    // Add more items as needed
  ];

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (type) => {
    switch (type) {
      case 'Doctor':
      case 'Vendor':
      case 'Admin':
      case 'User':
        window.location.href = '/login'; // Navigate to respective login page
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
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'darkmagenta' }}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{marginLeft:"-20px"}}>
          <img src={Petcare} alt="Petcare Logo" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
        </Link>
        
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{marginLeft:"40px"}}>
                <img src={homegif} alt="Home" style={{ height: "30px", width: "30px", borderRadius: "50%" }} />
                <b style={{color:"white", marginLeft:"10px"}}>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile" style={{marginLeft:"40px"}}>
                <img src={profile} alt="Profile" style={{ height: "30px", width: "30px", borderRadius: "50%" }} />
                <b style={{color:"white", marginLeft:"10px"}}>Profile</b>
              </Link>
            </li>

            <form className="form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()} style={{ marginLeft: "90px" }}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search for products, brands and more"
            value={searchTerm}
            onChange={handleSearch}
            style={{ width: "300px" }}
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
              <Link className="nav-link" to="/cart" style={{marginLeft:"40px"}}>
                <img src={cart} alt="Cart" style={{ height: "30px", width: "30px", borderRadius: "50%" }} />
                <b style={{color:"white", marginLeft:"10px"}}>Cart</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{marginLeft:"40px"}}>
                <img src={about} alt="About" style={{ height: "30px", width: "30px", borderRadius: "50%" }} />
                <b style={{color:"white", marginLeft:"10px"}}>About</b>
              </Link>
            </li>
          </ul>
          <div className="nav-item dropdown" style={{marginLeft:"40px"}}>
        <button
              className="btn btn-outline-success my-2 my-sm-0 dropdown-toggle"
              onClick={handleDropdownClick}
              style={{color:"white"}}
          >
          Login
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
