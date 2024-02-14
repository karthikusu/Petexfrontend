import React from 'react';
import { Link } from 'react-router-dom';

function RabitNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'darkmagenta' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default RabitNavBar;
