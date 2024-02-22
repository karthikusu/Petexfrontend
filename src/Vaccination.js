import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Vaccination.css';
const Vaccination = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:9011/petex/getAll');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleDelete = (customerId, customerName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${customerName}?`);
    if (confirmDelete) {
      try {
        axios.delete(`http://localhost:9011/petex/delete/${customerId}`);
        fetchData();
      } catch (error) {
        console.error('Error in deleting:', error);
      }
    }
  };

  return (
    <center >
      <div className="hsptl">
        <form >
          <table>
            <thead>
              <tr>
                <th colSpan={9}>
                  <h2> Vaccination</h2>
                </th>
              </tr>
              <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Customer Contact</th>
                <th>Date</th>
                <th>Time</th>
                <th>Description</th>
                <th colSpan={2}>Action</th>
                
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.customerId}>
                  <td>{item.customerId}</td>
                  <td>{item.customerName}</td>
                  <td>{item.customerEmail}</td>
                  <td>{item.customerPhno}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.description}</td>
                  <td>
                    {/* <div className="wrap">
                    <Link to={`/update/${item.customerId}`} > <button>Edit</button></Link>
                    </div> */}
                  </td>
                  <td>
                    <div className="wrap">
                    <button onClick={() => handleDelete(item.customerId, item.customerName)}>
Delete
</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </center>
        
  );
};

export default Vaccination;
