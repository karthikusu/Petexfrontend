import React, { useState } from 'react';
import axios from 'axios';

const DayCareForm = () => {
  const [serviceData, setServiceData] = useState({
    serviceCost: 0,
    serviceType: '',
    petType: '',
    location: '',
    description: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData({ ...serviceData, [name]: value });
    validateInput(name, value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setServiceData({ ...serviceData, file: file });
  };

  const validateInput = (name, value) => {
    let error = '';
    switch (name) {
      case 'serviceCost':
        if (!value || isNaN(value) || parseInt(value) < 1) {
          error = 'Service cost must be a number greater than or equal to 1.';
        }
        break;
      case 'description':
        if (!value || value.length < 8 || value.length > 100) {
          error = 'Description must be between 8 and 50 characters.';
        }
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('file', serviceData.file);
      formData.append('serviceCost', serviceData.serviceCost);
      formData.append('serviceType', serviceData.serviceType);
      formData.append('petType', serviceData.petType);
      formData.append('location', serviceData.location);
      formData.append('description', serviceData.description);
  
      // Retrieve vendorId from localStorage
      const vendorDetails = JSON.parse(localStorage.getItem('vendorDetails'));
      if (!vendorDetails || !vendorDetails.vendorId) {
        throw new Error('Vendor details not found');
      }
  
      const vendorId = vendorDetails.vendorId;
      formData.append('vendorId', vendorId);
  
      const response = await axios.post(`http://localhost:9039/api/daycare/save/${vendorId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert("Data submitted successfully");
      
      // Clear the form data after successful submission
      setServiceData({
        serviceCost: 0,
        serviceType: '',
        petType: '',
        location: '',
        description: '',
        file: null,
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h1 style={{textAlign:"center"}}>Add Services</h1>
      <label style={labelStyle}>
        Service Cost:
        <input type="number" name="serviceCost" value={serviceData.serviceCost} onChange={handleChange} style={inputStyle} />
        {errors.serviceCost && <span style={{ color: 'red' }}>{errors.serviceCost}</span>}
      </label>
      <br />
      <label style={labelStyle}>
        Service Type:
        <select
          name="serviceType"
          value={serviceData.serviceType}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select</option>
          <option value="Daycare">Daycare</option>
          <option value="Grooming">Grooming</option>
          <option value="Breeding">Breeding</option>
          <option value="Nutrition">Nutrition</option>
          <option value="Housing and Boarding">Housing and Boarding</option>
          <option value="Training">Training</option>
        </select>
      </label>
      <br />
      <label style={labelStyle}>
        Pet Type:
        <select
          name="petType"
          value={serviceData.petType}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select</option>
          <option value="Bird">Bird</option>
          <option value="Camel">Camel</option>
          <option value="Cat">Cat</option>
          <option value="Dog">Dog</option>
          <option value="Elephant">Elephant</option>
          <option value="Goat">Goat</option>
          <option value="Horse">Horse</option>
          <option value="Rabbit">Rabbit</option>
          <option value="Sheep">Sheep</option>
        </select>
      </label>
      <br></br>
      <label style={labelStyle}>
        Image:
        <input type="file" name="file" onChange={handleFileChange} style={inputStyle} />
      </label>
      <br />
      <label style={labelStyle}>
        Description:
        <input type="text" name="description" value={serviceData.description} onChange={handleChange} style={inputStyle} />
        {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
      </label>
      <br />
      <label style={labelStyle}>
        Location:
        <input type="text" name="location" value={serviceData.location} onChange={handleChange} style={inputStyle} />
      </label>
      <br />
      <button type="submit" style={buttonStyle}>Save</button>
    </form>
  );
};

// Define inline styles
const formStyle = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const labelStyle = {
  display: 'block',
  marginBottom: '10px',
  fontSize: '16px',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginBottom: '10px',
  boxSizing: 'border-box',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default DayCareForm;
