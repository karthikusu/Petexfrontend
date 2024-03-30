import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DayCareForm = () => {
  const [serviceCost, setServiceCost] = useState(0);
  const [serviceType, setServiceType] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!serviceCost || !serviceType || !location || !image) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('daycare', new Blob([JSON.stringify({
      serviceCost: serviceCost,
      serviceType: serviceType,
      location: location,
    })], { type: 'application/json' }));
    formDataToSend.append('image', image);

    try {
      const response = await axios.post('http://localhost:1116/api/daycare/save', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Data saved successfully', response.data);
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error saving data', error);
      setSubmitStatus('error');
    }
  };

  return (
<form onSubmit={handleSubmit} style={formStyle}>
      <label style={labelStyle}>
        Service Cost:
        <input type="number" name="serviceCost" value={serviceCost} onChange={(e) => setServiceCost(e.target.value)} style={inputStyle} />
      </label>
      <br />
      <label style={labelStyle}>
        Service Type:
        <select
          name="serviceType"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          style={inputStyle}
      >
          <option value="Walking">SpaBath</option>
          <option value="traing">Grooming</option>
          <option value="Task">HairCut</option>
          <option value="Meals">Stylish HairCut</option>
        </select>
      </label>
      <br />
      <label style={labelStyle}>
        Location:
        <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} style={inputStyle} />
      </label>
      <br />
      <label style={labelStyle}>
        Image:
        <input type="file" name="image" onChange={handleImageChange} style={inputStyle} />
      </label>
      <br />
      <button type="submit" style={buttonStyle}>Submit</button>
      <Link to="/">
        <button type="button" style={backButtonStyle}>Back</button>
      </Link>
      {submitStatus === "success" && (
        <div className="alert alert-success" role="alert">
          Data submitted successfully!
        </div>
      )}
      {submitStatus === "error" && (
        <div className="alert alert-danger" role="alert">
          Error submitting data. Please try again.
        </div>
      )}
    </form>
  );
};


const formStyle = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
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
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
const backButtonStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  };

export default DayCareForm;
