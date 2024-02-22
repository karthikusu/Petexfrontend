import React from 'react';
import './Admin.css';

const Vendordashboard = () => {
  return (
    <div>
      <section id="sidebar">
        <a href="#" className="brand" style={{backgroundColor:"darkmagenta"}}>
          <i className='bx bxs-smile' ></i>
          <span className="text" style={{color:"white"}}>PETEX</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className='bx bxs-dashboard'></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-shopping-bag-alt'></i>
              <span className="text">Offers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-doughnut-chart'></i>
              <span className="text">Items</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-message-dots'></i>
              <span className="text">Selling Report</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bxs-group'></i>
              <span className="text">Services</span>
            </a>
          </li>
          <li>
            <a href="/" className="logout">
              <i className='bx bxs-log-out-circle'></i>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>

      <section id="content">
        {/* <nav>
          <i className='bx bx-menu'></i>
          <a href="#" className="nav-link">Categories</a>
          <a href="#" className="profile">
          </a>
        </nav> */}

        <main>
          <div className="head-title">
            <div className="left">
              <h1> Vendor Dashboard</h1>
            </div>
          </div>

          <ul className="box-info">
            <li>
              <i className='bx bxs-calendar-check'  style={{marginRight:"10px"}}></i>
              <span className="text"  >
                <h3 style={{marginTop:"-25px"}}>1020</h3>
                <p>New Order</p>
              </span>
            </li>
            <li>
              <i className='bx bxs-group'></i>
              <span className="text">
                <h3>50</h3>
                <p>visit</p>
              </span>
            </li>
            <li>
              <i className='bx bxs-dollar-circle'></i>
              <span className="text">
                <h3>2500</h3>
                <p>Total Sales</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <a href=""><h3>Orders Received</h3></a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Order id</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>001</p>
                    </td>
                    <td>04-01-2024</td>
                    <td><span className="status completed">Completed</span></td>
                  </tr>
                  <tr>
                    <td>
                      <p>002</p>
                    </td>
                    <td>04-01-2024</td>
                    <td><span className="status pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <p>003</p>
                    </td>
                    <td>04-01-2024</td>
                    <td><span className="status process">Process</span></td>
                  </tr>
                  <tr>
                    <td>
                      <p>004</p>
                    </td>
                    <td>04-01-2024</td>
                    <td><span className="status pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <p>005</p>
                    </td>
                    <td>04-01-2024</td>
                    <td><span className="status completed">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Vendordashboard;
