import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import BG from './images/Fundingdetailspage.jpg';

const FundingDetailsPage = () => {
    const [fundingDetails, setFundingDetails] = useState({
      donorName: '',
      email: '',
      mobileNumber: '',
      petName:'',
      reasonForFunding:'',
      donationAmount: ''
    });
    const [error, setError] = useState('');

    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFundingDetails({
        ...fundingDetails,
        [name]: value
      });
    };
  
    const generatePDF = async () => {
      try {
        const pdfContent = `
        ${fundingDetails.donorId}
          Donor Name: ${fundingDetails.donorName}
          Email: ${fundingDetails.email}
          Mobile Number: ${fundingDetails.mobileNumber}
          Pet Name: ${fundingDetails.petName}
          Reason For Funding: ${fundingDetails.reasonForFunding}

          Donation Amount: ${fundingDetails.donationAmount}
        
        `;
        console.log('PDF Content:', pdfContent);
        // Send PDF content to the server
        const response =     await axios.get('http://localhost:9037/petex/generateAndSendPdf', { email: fundingDetails.email, pdfContent });
        console.log('PDF generation and email sending response:', response.data);
    console.log('PDF sent successfully to', fundingDetails.email);
    navigate("/");
  } catch (error) {
    console.error('Error generating PDF or sending email:', error);
    setError('Error generating PDF or sending email');
  }
};
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:9037/petex/api/funding', fundingDetails);
        console.log('Funding details submitted successfully:', response.data);
        await generatePDF();
        setFundingDetails({
          DonorName: '',
          email: '',
          mobileNumber: '',
          petName:'',
          reasonForFunding:'',
          donationAmount: ''
        });
        alert('Funding details submitted successfully!');
      } catch (error) {
        console.error('Error submitting funding details:', error);
        setError('Error submitting funding details');
      }
    };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', backgroundImage:`url(${BG})`, backgroundSize:"cover" }}>
    <img
      src= ""
      alt="Background Image"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        objectFit: 'cover',
      }}
    />
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Funding Details</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
         

        <label htmlFor="donorName">Donor Name:</label>
<input
  type="text"
  id="donorName"
  name="donorName"
  value={fundingDetails.donorName}
  onChange={handleChange}
  style={inputStyle}
  required
/>


          <div style={formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={fundingDetails.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={formGroup}>
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={fundingDetails.mobileNumber}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroup}>
            <label htmlFor="petName">Pet Name:</label>
            <input
              type="text"
              id="petName"
              name="petName"
              value={fundingDetails.petName}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={formGroup}>
            <label htmlFor="reasonForFunding">Reason For Funding:</label>
            <input
              type="text"
              id="reasonForFunding"
              name="reasonForFunding"
              value={fundingDetails.reasonForFunding}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>



          <div style={formGroup}>
            <label htmlFor="donationAmount">Donation Amount:</label>
            <input
              type="text"
              id="donationAmount"
              name="donationAmount"
              value={fundingDetails.donationAmount}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <button type="submit" style={buttonStyle}>Submit</button>
          
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  "@media (max-width: 600px)": {
    padding: "0 10px"
  }
};

const cardStyle = {
  backgroundColor: "whitesmoke",
  padding: "20px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
  borderRadius: "5px",
  transition: "box-shadow 0.3s ease",
  width: "400px",
  "@media (max-width: 600px)": {
    width: "100%"
  }
};

const formStyle = {
  marginBottom: "15px",
  "@media (max-width: 600px)": {
    width: "100%"
  }
};

const formGroup = {
  marginBottom: "15px",
  "@media (max-width: 600px)": {
    flexDirection: "column"
  }
};

const inputStyle = {
  padding: "8px",
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid #ccc",
  borderRadius: "5px",
  "@media (max-width: 600px)": {
    width: "100%"
  }
};

const headingStyle = {textAlign: "center",
  color: "#007bff"
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default FundingDetailsPage;