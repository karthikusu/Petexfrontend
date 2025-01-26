import React, { useState } from 'react';
import axios from 'axios';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    address: '',
    userMoblieNumber: '',
    petName: '',
    petType: '',
    petBreed: '',
    petColour: '',
    dateOfLost: ''
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validateForm = () => {
    const newErrors = {};
      if (!formData.userName) {
      newErrors.userName = 'User Name is required';
    }
      if (!formData.userEmail) {
      newErrors.userEmail = 'User Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.userEmail)) {
      newErrors.userEmail = 'Please enter a valid email address';
    }

    if (!formData.address) {
      newErrors.address = 'Address is required';
    }
  
if (!formData.userMoblieNumber) {
    newErrors.userMoblieNumber = 'Mobile Number is required';
  } else if (!/^[6-9]\d{9}$/.test(formData.userMoblieNumber)) {
    newErrors.userMoblieNumber = 'Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9';
  }
  
  
    if (!formData.petName) {
      newErrors.petName = 'Pet Name is required';
    }
  
    if (!formData.petType) {
      newErrors.petType = 'Pet Type is required';
    }
  
    if (!formData.petBreed) {
      newErrors.petBreed = 'Pet Breed is required';
    }
  
    if (!formData.petColour) {
      newErrors.petColour = 'Pet Colour is required';
    }
  
    if (!formData.dateOfLost) {
      newErrors.dateOfLost = 'Date of Lost is required';
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:9028/petex/reportSave', formData);
        console.log('Report submitted successfully:', response.data);
        // Optionally, you can reset the form after submission
        setFormData({
          userName: '',
          userEmail: '',
          address: '',
          userMoblieNumber: '',
          petName: '',
          petType: '',
          petBreed: '',
          petColour: '',
          dateOfLost: ''
        });
      } catch (error) {
        console.error('Error submitting report:', error);
      }
    }
  };

  return (
    <>
    
    <div style={{backgroundColor:"rgb(201, 184, 255)", position:"absolute", width:"100%", marginTop:"0%"}}>
    <form onSubmit={handleSubmit} style={formStyle}>
      <h1 style={{ textAlign: "center" }}>Report Lost</h1>
      <div style={formGroup}>
        <label htmlFor="userName">User Name:</label>
        <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} style={inputStyle} />
        {errors.userName && <span style={{ color: 'red' }}>{errors.userName}</span>}
      </div>

      <div style={formGroup}>
        <label htmlFor="userEmail">User Email:</label>
        <input type="email" id="userEmail" name="userEmail" value={formData.userEmail} onChange={handleChange} style={inputStyle} />
        {errors.userEmail && <span style={{ color: 'red' }}>{errors.userEmail}</span>}
      </div>

      <div style={formGroup}>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} style={inputStyle} />
        {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
      </div>

      <div style={formGroup}>
        <label htmlFor="userMobileNumber">Mobile Number:</label>
        <input type="text" id="userMoblieNumber" name="userMoblieNumber" value={formData.userMoblieNumber} onChange={handleChange} style={inputStyle} />
        {errors.userMoblieNumber && <span style={{ color: 'red' }}>{errors.userMoblieNumber}</span>}
      </div>

      <div style={formGroup}>
        <label htmlFor="petName">Pet Name:</label>
        <input type="text" id="petName" name="petName" value={formData.petName} onChange={handleChange} style={inputStyle} />
        {errors.petName && <span style={{ color: 'red' }}>{errors.petName}</span>}
      </div>

      <div style={formGroup}>
        <label htmlFor="petType">Pet Type:</label>
        <input type="text" id="petType" name="petType" value={formData.petType} onChange={handleChange} style={inputStyle} />
        {errors.petType && <span style={{ color: 'red' }}>{errors.petType}</span>}
      </div>

      <div style={formGroup}>
        <label htmlFor="petBreed">Pet Breed:</label>
        <input type="text" id="petBreed" name="petBreed" value={formData.petBreed} onChange={handleChange} style={inputStyle} />
        {errors.petBreed && <span style={{ color: 'red' }}>{errors.petBreed}</span>}
      </div>

      <div style={formGroup}>
        <label htmlFor="petColour">Pet Colour:</label>
        <input type="text" id="petColour" name="petColour" value={formData.petColour} onChange={handleChange} style={inputStyle} />
        {errors.petColour && <span style={{ color: 'red' }}>{errors.petColour}</span>}
      </div>

      <div style={formGroup}>
        <label htmlFor="dateOfLost">Date of Lost:</label>
        <input type="date" id="dateOfLost" name="dateOfLost" value={formData.dateOfLost} onChange={handleChange} style={inputStyle} />
        {errors.dateOfLost && <span style={{ color: 'red' }}>{errors.dateOfLost}</span>}
      </div>

      <button type="submit" style={buttonStyle}>Submit Report</button>
    </form>
    </div>
    </>
  );
};

const formStyle = {
  backgroundColor: 'whitesmoke',
  padding: '20px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
  borderRadius: '5px',
  width:"50%",
  marginLeft: "10%",
  marginTop:"2%",
  opacity: 0.8
};

const formGroup = {
  marginBottom: '15px'
};

const inputStyle = {
  padding: '8px',
  width: '100%',
  boxSizing: 'border-box',
  border: '1px solid #ccc',
  borderRadius: '5px'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default ReportForm;
