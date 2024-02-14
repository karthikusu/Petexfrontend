import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateUser2() {
  const { id } = useParams(); // Get the user id from the URL params
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    userName: '',
    mobileNumber: '',
    alternativeNumber: '',
    email: '',
    address: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/users/get/${id}`);
      setFormData({
        fullName: response.data.userName,
        email: response.data.mobileNumber,
        phoneNo: response.data.alternativeNumber,
        source: response.data.email,
        destination: response.data.address,
      });
    } catch (error) {
      console.error('Error fetching user:', error);
      setError('Error fetching user. Please try again later.');
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/users/update/${id}`, formData);
      navigate('/listuser'); // Navigate back to user list after successful update
    } catch (error) {
      console.error('Error updating user:', error);
      setError('Error updating user. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'whitesmoke', height: '600px' }}>
  <h1 style={{ marginTop: "20px" }}>Update User</h1>
  {error && <p>{error}</p>}
  <form onSubmit={updateUser} style={{ backgroundColor: "seagreen", marginLeft: "50px", marginRight: "50px", borderRadius: "8px", height: "500px", boxShadow: "5px 10px 5px rgba(0, 0.6, 0, 0.7)" }}>
    <div className="row">
    <div style={{ paddingTop: "10px" }}>
      <p> <label style={{ marginRight: "10px", marginRight:"180px" }}>User Name:</label></p>
        <p><input type="text" className="form-control" placeholder="Enter user name" name="userName" 
         style={{width:"300px", height:"25px", marginLeft:"50px"}}
         value={formData.source} onChange={handleChange} /></p>
      </div>
      <div>
      <p> <label style={{ marginRight: "10px", marginRight:"150px" }}>Mobile Number:</label></p>
        <p><input type="number" className="form-control" placeholder="Enter mobile number" name="mobileNumber" 
         style={{width:"300px", height:"25px", marginLeft:"50px"}}
         value={formData.source} onChange={handleChange} /></p>
      </div>
    </div>
    <div className="row" >
        <p> <label style={{ marginRight: "10px", marginRight:"90px" }}>Alternate Mobile Number:</label></p>
        <p><input type="number" className="form-control" placeholder="Enter alternate number" name="alternativeNumber" 
         style={{width:"300px", height:"25px", marginLeft:"50px"}}
         value={formData.source} onChange={handleChange} /></p>
       <p> <label style={{ marginRight: "10px", marginRight:"200px" }}>Email  Id:</label></p>
        <p><input type="email" className="form-control" placeholder="Enter email" name="email" 
         style={{width:"300px", height:"25px", marginLeft:"50px"}}
         value={formData.source} onChange={handleChange} /></p>
    </div>
    <div className="row">
      <div>
      <p> <label style={{ marginRight: "10px", marginRight:"200px" }}>Address:</label></p>
        <p><input type="text" className="form-control" placeholder="Enter address" name="address" 
         style={{width:"300px", height:"25px", marginLeft:"50px"}}
         value={formData.source} onChange={handleChange} /></p>
      </div>
    </div>
    <button type="submit" className="btn btn-primary" 
    style={{ marginTop: "10px", borderRadius: "6px", backgroundColor:"red", height:"30px", fontSize:"15px" }}>Update User</button>
  </form>
</div>


  );
}

export default UpdateUser2;