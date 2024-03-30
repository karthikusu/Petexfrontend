import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Report = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false); // State variable to control form visibility

  useEffect(() => {
    // Fetch reports only when showForm is true
    if (showForm) {
      fetchReports();
    }
  }, [showForm]); // Fetch reports whenever showForm changes

  const fetchReports = async () => {
    try {
      const response = await axios.get('http://localhost:9028/petex/getAllReport');
      setReports(response.data);
    } catch (error) {
      setError('Error fetching reports');
    }
  };

  const generatePDF = async () => {
    try {
      const response = await axios.get('http://localhost:9028/petex/pdf', {
        responseType: 'blob' // Specify responseType as 'blob' to handle binary data
      });

      // Create a Blob object from the binary data
      const blob = new Blob([response.data], { type: 'application/pdf' });

      // Create a URL for the Blob object
      const url = window.URL.createObjectURL(blob);

      // Create a link element and trigger a click event to download the PDF
      const link = document.createElement('a');
      link.href = url;
      link.download = 'report.pdf';
      document.body.appendChild(link);
      link.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      setError('Error generating PDF');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  const handleViewReports = () => {
    setShowForm(true); // Show the form when "View Reports" button is clicked
  };

  return (
    <div>
      <h2>Reports</h2>
      <button onClick={handleViewReports}>View Reports</button> {/* Trigger to fetch and display reports */}
      {showForm && ( // Show the form only when showForm is true
        <>
          {reports.length === 0 && !error && <p>No reports found</p>}
          {error && <p>{error}</p>}
          {reports.length > 0 && (
            <ul>
             {reports.length > 0 && (
  <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
    <thead>
      <tr>
        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2', color: 'black' }}>User Name</th>
        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2', color: 'black' }}>User Email</th>
        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2', color: 'black' }}>Address</th>
        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2', color: 'black' }}>Mobile Number</th>
        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2', color: 'black' }}>Pet Name</th>
        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2', color: 'black' }}>Pet Type</th>
        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2', color: 'black' }}>Pet Breed</th>
        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2', color: 'black' }}>Pet Colour</th>
        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2', color: 'black' }}>Date of lost</th>
      </tr>
    </thead>
    <tbody>
      {reports.map(report => (
        <tr key={report.petId}>
          <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{report.userName}</td>
          <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{report.userEmail}</td>
          <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{report.address}</td>
          <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{report.userMoblieNumber}</td>
          <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{report.petName}</td>
          <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{report.petType}</td>
          <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{report.petBreed}</td>
          <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{report.petColour}</td>
          <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{report.dateOfLost}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}

            </ul>
          )}

          <button onClick={generatePDF}>Generate PDF</button>

          {/* <form onSubmit={handleSubmit} style={formStyle}>
            <div style={formGroup}>
              <label htmlFor="userName">User Name:</label>
              <input type="text" id="userName" name="userName" style={inputStyle} />
            </div>

            <div style={formGroup}>
              <label htmlFor="userEmail">User Email:</label>
              <input type="email" id="userEmail" name="userEmail" style={inputStyle} />
            </div>

            <div style={formGroup}>
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" style={inputStyle} />
            </div>

            <div style={formGroup}>
              <label htmlFor="userMobileNumber">Mobile Number:</label>
              <input type="text" id="userMobileNumber" name="userMobileNumber" style={inputStyle} />
            </div>

            <div style={formGroup}>
              <label htmlFor="petName">Pet Name:</label>
              <input type="text" id="petName" name="petName" style={inputStyle} />
            </div>

            <div style={formGroup}>
              <label htmlFor="petType">Pet Type:</label>
              <input type="text" id="petType" name="petType" style={inputStyle} />
            </div>

            <div style={formGroup}>
              <label htmlFor="petBreed">Pet Breed:</label>
              <input type="text" id="petBreed" name="petBreed" style={inputStyle} />
            </div>

            <div style={formGroup}>
              <label htmlFor="petColour">Pet Colour:</label>
              <input type="text" id="petColour" name="petColour" style={inputStyle} />
            </div>

            <div style={formGroup}>
              <label htmlFor="dateOfLost">Date of Lost:</label>
              <input type="date" id="dateOfLost" name="dateOfLost" style={inputStyle} />
            </div>

            <button type="submit" style={buttonStyle}>Submit Report</button>
          </form> */}
          <link to="/"></link>
        </>
      )}
    </div>
  );
};

const formStyle = {
  backgroundColor: 'whitesmoke',
  padding: '20px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
  borderRadius: '5px'
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

export default Report;
