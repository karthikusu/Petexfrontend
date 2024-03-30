// import React from "react";
// // import Navpet from "./Navpet";
// import { useState } from "react";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import Sidebar from "./Sidebar";


// function Funding(){
//   const [selectedDuration, setSelectedDuration] = useState('');
//   const [formErrors, setFormErrors] = useState({});
//   const [selectedDate, setSelectedDate] = useState('');

//   const handleDurationChange = (event) => {
//     setSelectedDuration(event.target.value);
//     setFormErrors((prevErrors) => ({ ...prevErrors, duration: '' }));
//   };

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//     setFormErrors((prevErrors) => ({ ...prevErrors, date: '' }));
//   };

//   const validateForm = (selectedDuration, selectedDate) => {
//     const errors = {};

//     if (!selectedDuration) {
//       errors.duration = 'Please select a duration';
//     }

//     if (!selectedDate) {
//       errors.date = 'Please choose a date';
//     }

//     return errors;
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validateForm(selectedDuration, selectedDate);

//     if (Object.keys(validationErrors).length === 0) {
//       toast.success('Booking successful!', {
//         position: 'top-right',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     } else {
//       setFormErrors(validationErrors);
//     }
//   };

//     return(
//         <>
//         {/* <Sidebar/> */}
//         <div className="Fund" style={{marginLeft : "2%", marginTop : "-1%"}}>
//             <img src="https://images.pexels.com/photos/6995180/pexels-photo-6995180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ width : "100%", marginTop : "1%", borderRadius : "2rem"}} alt=".."/>
//         </div>
//         <div className="Readmore" style={{ marginTop : "5rem", marginLeft : "2%"}}>
//         <div class="service-item bg-light d-flex p-4" style={{ display : "flex"}}>
//                         <div>
//                             <h1 class="text-uppercase mb-3" style={{ marginLeft : "10%", fontSize : "4rem"}}>Funding</h1>
//                             <p style={{ width : "40%", marginLeft : "3%", textAlign : "center"}}> Many advocates of animal rights oppose the assignment of moral value and fundamental protections on the basis of species membership alone they consider this idea, known as speciesism, a prejudice as irrational as any other they maintain that animals should not be viewed as property or used as food, clothing,<br/>
//                             </p>
                            
//                         </div>
//                         <div>
//                             <img style={{ width : "250%",border : "1px solid", borderRadius : "5rem", height : '70vh', marginRight : "10%", marginLeft : "-170%"}} src="https://images.pexels.com/photos/8078361/pexels-photo-8078361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."/>
//                         </div>
//                     </div>
//                     <br/>
//                     </div>

//                     <p style={{ marginLeft : "4%", marginRight : "5%"}}> <span style={{ marginLeft : "2%", fontSize : "2rem"}}>Our</span> pet care service provides various forms of care for pets, including feeding, exercise, grooming, and overall well-being. This type of service can be provided in the pet owner's home or at a facility, such as a pet hotel or boarding kennel. We also offer additional services such as training, transportation, and medical care. We are specialize in caring for a specific type of animal, such as cats or dogs, while others may be able to care for a variety of different types of pets. The level of our care and type of services offered will vary depending on the specific pet care service.

// This Pet care services can be a great option for busy pet owners who are unable to provide the necessary care for their pets due to work or other commitments. They can also be a helpful resource for pet owners who are traveling and need someone to look after their pets while they are away.

// There is often ask some questions about the pet care 
// service and we always try to give all the answer of their questions. Before taking services it is important to know about the service process and its advantages or disadvantages. Here is some questions and answers we set as standard.</p>
//         <br/>
        
//         <div style={{ display : "flex", marginLeft : "2%"}}>
//             <div>
//             <img src="https://images.pexels.com/photos/4021803/pexels-photo-4021803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
//            style={{ marginLeft : "2%", width : "90%" , border : "1px solid", borderRadius : "5rem"}} alt=".."/>
//            </div>
           
//            <div>
//            <br/><br/><br/><br/>
//            <img src="Scanner.JPEG" style={{ marginLeft : "-10%"}}/>
//            <br/><br/>
//     <button         onClick={handleFormSubmit}
//     style={{ width : "50%", height : "50px", borderRadius : "2rem", marginLeft : "20%",backgroundColor : "darkmagenta", color : "white", fontSize : "1.5rem"}}>Scan Here</button>

//            </div>
//         </div>
//         </>
//     )
// }
// export default Funding;

import React, { useState } from 'react';
import axios from 'axios';
import BG2 from './vetdoctorbg.jpg';

const FundingDetailsPage = () => {
    const [fundingDetails, setFundingDetails] = useState({
      customerName: '',
      email: '',
      mobileNumber: '',
      donationAmount: ''
    });
    const [error, setError] = useState('');
  
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
        ${fundingDetails.customerId}
          Customer Name: ${fundingDetails.customerName}
          Email: ${fundingDetails.email}
          Mobile Number: ${fundingDetails.mobileNumber}
          Donation Amount: ${fundingDetails.donationAmount}
          Date: ${fundingDetails.date}
          Time: ${fundingDetails.time}
        `;
        // Send PDF content to the server
        await axios.get('http://localhost:9035/petex/generateAndSendPdf', { email: fundingDetails.email, pdfContent });
        console.log('PDF sent successfully to', fundingDetails.email);
      } catch (error) {
        setError('Error generating PDF or sending email');
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:9035/petex/Save', fundingDetails);
        console.log('Funding details submitted successfully:', response.data);
        await generatePDF();
        setFundingDetails({
          customerName: '',
          email: '',
          mobileNumber: '',
          donationAmount: ''
        });
        alert('Funding details submitted successfully!');
      } catch (error) {
        console.error('Error submitting funding details:', error);
        setError('Error submitting funding details');
      }
    };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
    <img
      src= {BG2}
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
         

          <div style={formGroup}>
            <label htmlFor="customerName">Customer Name:</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={fundingDetails.customerName}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

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
          {/* <button type="button" onClick={generatePDF} style={{ ...buttonStyle, marginLeft: '10px' }}>Generate PDF</button> */}
          </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
      </div>
    </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const cardStyle = {
  backgroundColor: 'whitesmoke',
  padding: '20px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
  borderRadius: '5px',
  transition: 'box-shadow 0.3s ease',
  width: '400px',
};

const formStyle = {
  marginBottom: '15px'
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

const headingStyle = {
  textAlign: 'center',
  color: '#007bff',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default FundingDetailsPage;

