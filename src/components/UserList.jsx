import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Navbar, Nav, Image } from "react-bootstrap";
import './UserList.css'; // Import CSS file for styling
import PL from '../assets/petcare logo.jpg';

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); // State variable for error handling

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/getAll');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Error fetching users. Please try again later.'); // Set error state
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/users/delete/${id}`);
      setUsers(users.filter(user => user.id !== id)); // Remove the deleted user from state
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Error deleting user. Please try again later.'); // Set error state
    }
  };

  return (
    <div>
      <Navbar bg="light" variant="light" style={{backgroundColor:"darkmagenta"}}>
        <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center" }}>
          <Image src={PL} alt="IRCTC Logo" style={{ width: "40px", height: "40px", marginRight: "20px", borderRadius:"50%" }} />
          <a href='/' style={{textDecoration:"none", color:"white"}}>Home</a>
        </Navbar.Brand>
      </Navbar>

      <h1 style={{textAlign:"center", fontFamily:"revert-layer", color:"peru"}}>LIST OF ALL USERS</h1>
      {error && <p>{error}</p>} {/* Display error message if there's an error */}
      <table className="user-table">
        <thead>
          <tr>
            {/* <th>Id</th>
            <th>Pet Type</th>
            <th>Pet Name</th>
            <th>Breed</th>
            <th>Species</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Vaccinated</th>
            <th>Weight</th>
            <th>Colour</th>
            <th>Height</th>
            <th>Diseases</th> */}
            <th>User Name</th>
            <th>Mobile Number</th>
            <th>Alternate Mobile Number</th>
            <th>Email</th>
            {/* <th>Password</th> */}
            <th>Address</th>
            <th>Actions</th> {/* Column for delete and update buttons */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.userName}</td>
              <td>{user.mobileNumber}</td>
              <td>{user.alternativeNumber}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <button onClick={() => deleteUser(user.id)} style={{borderRadius:"6px", backgroundColor:"red"}}>Delete</button> {/* Button to delete the user */}
                <Link to={`/update/${user.id}`} ><button style={{borderRadius:"6px", backgroundColor:"seagreen"}}>Update</button></Link> {/* Button to navigate to update */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;