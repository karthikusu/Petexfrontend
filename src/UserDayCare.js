// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function VendorCard({ vendor, onBookNow }) {
// //   return (
// //     <div style={{ width: '300px', margin: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
// //       <h5>{vendor.serviceType}</h5>
      
// //       <img src={`data:image/jpeg;base64,${vendor.image}`} alt="Service" style={{ width: "100%", height: "auto" }} />
// //       <h5>Type of pet : {vendor.petType}</h5>
// //       <p><b>Location: </b>{vendor.location}</p>
// //       <p><b>Description: </b>{vendor.description}</p>
// //       <p><b>Service Cost: </b>Rs.{vendor.serviceCost}</p>
// //       <button onClick={() => onBookNow(vendor.id)}>Book Now</button>
// //     </div>
// //   );
// // }

// // function BookingForm({ userDetails, vendorId, onBook, onClose, daycareDetails }) {
// //   const [formData, setFormData] = useState({
// //     petName: '',
// //     formDate: '',
// //     toDate: '',
// //     address: '',
// //     city: '',
// //     state: '',
// //     fullname: userDetails.fullname || '',
// //     email: userDetails.email || '',
// //     phno: userDetails.phno || '',
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Include userDetails along with form data
// //     const bookingData = { ...formData, userId: userDetails.userId, vendorId };
// //     // Call the onBook function with booking data
// //     onBook(bookingData);
// //   };

// //   const handleClose = () => {
// //     onClose();
// //   };


// //   return (
// //     <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.9)', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '400px', minHeight: '300px', maxHeight: '80vh', overflowY: 'auto' }}>
// //       <button onClick={handleClose} style={{ position: 'absolute', top: '5px', right: '5px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>✖</button>
// //       <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '20px' }}>
// //         <input type="text" name="petName" value={formData.petName} onChange={handleChange} placeholder="Pet Name" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
// //         <input type="date" name="formDate" value={formData.formDate} onChange={handleChange} placeholder="From Date" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
// //         <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} placeholder="To Date" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
// //         <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
// //         <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
// //         <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
// //         {/* Populate user details */}
// //         <input type="text" name="phno" value={formData.fullname} onChange={handleChange} placeholder="Name" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
// //         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
// //         <input type="tel" name="phno" value={formData.phno} onChange={handleChange} placeholder="Mobile" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
// //         <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '4px', background: '#007bff', color: '#fff', border: 'none', fontSize: '1rem', cursor: 'pointer' }}>Submit Booking</button>
// //       </form>
// //     </div>
// //   );
// // }

// // function App() {
// //   const [userDetails, setUserDetails] = useState({});
// //   const [vendorCards, setVendorCards] = useState([]);
// //   const [showForm, setShowForm] = useState(false);
// //   const [selectedVendorId, setSelectedVendorId] = useState(null);

// //   useEffect(() => {
// //     // Fetch user details from localStorage
// //     const userDetailsString = localStorage.getItem('userDetails');
// //     if (userDetailsString) {
// //       setUserDetails(JSON.parse(userDetailsString));
// //     }

// //     // Fetch vendor cards from backend
// //     axios.get('http://localhost:9039/api/daycare/all')
// //       .then(response => {
// //         setVendorCards(response.data);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching vendor cards:', error);
// //       });
// //   }, []);

// //   const handleBookNow = (vendorId) => {
// //     setSelectedVendorId(vendorId); // Update selectedVendorId with the clicked vendorId
// //     setShowForm(true);
// //   };

// //   const handleBook = (bookingData) => {
// //     // Send booking data to backend
// //     axios.post(`http://localhost:9036/book/save/${bookingData.userId}/${bookingData.vendorId}`, bookingData)
// //       .then(response => {
// //         console.log('Booking successful:', response.data);
// //         alert("Booked successfully");
// //         setShowForm(false);
// //         // Handle success
// //       })
// //       .catch(error => {
// //         console.error('Error booking:', error);
// //         // Handle error
// //       });
// //   };

// //   const handleCloseForm = () => {
// //     setShowForm(false);
// //   };

// //   return (
// //     <div style={{ position: 'relative' }}>
// //       {/* <h1>Vendor Cards</h1> */}
// //       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
// //         {vendorCards.map((vendor, index) => (
// //           <VendorCard key={index} vendor={vendor} onBookNow={handleBookNow} />
// //         ))}
// //       </div>
// //       {selectedVendorId && showForm &&
// //         <BookingForm userDetails={userDetails} vendorId={selectedVendorId} onBook={handleBook} onClose={handleCloseForm} />
// //       }
// //     </div>
// //   );
// // }

// // export default App;







// // //Second 2nd ********************************* code*************




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function VendorCard({ vendor, onBookNow }) {
//   return (
//     <div style={{ width: '300px', margin: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//       <h5>{vendor.serviceType}</h5>
      
//       <img src={`data:image/jpeg;base64,${vendor.image}`} alt="Service" style={{ width: "100%", height: "auto" }} />
//       <h5>Type of pet : {vendor.petType}</h5>
//       <p><b>Location: </b>{vendor.location}</p>
//       <p><b>Description: </b>{vendor.description}</p>
//       <p><b>Service Cost: </b>Rs.{vendor.serviceCost}</p>
//       <button onClick={() => onBookNow(vendor.id)}>Book Now</button>
//     </div>
//   );
// }

// function BookingForm({ userDetails, vendorId, onBook, onClose, daycareDetails }) {
//   const [formData, setFormData] = useState({
//     petName: '',
//     formDate: '',
//     toDate: '',
//     address: '',
//     city: '',
//     state: '',
//     fullname: userDetails.fullname || '',
//     email: userDetails.email || '',
//     phno: userDetails.phno || '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Include userDetails along with form data
//     const bookingData = { ...formData, userId: userDetails.userId, vendorId };
//     // Call the onBook function with booking data
//     onBook(bookingData);
//   };

//   const handleClose = () => {
//     onClose();
//   };


//   return (
//     <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.9)', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '400px', minHeight: '300px', maxHeight: '80vh', overflowY: 'auto' }}>
//       <button onClick={handleClose} style={{ position: 'absolute', top: '5px', right: '5px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>✖</button>
//       <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '20px' }}>
//         <input type="text" name="petName" value={formData.petName} onChange={handleChange} placeholder="Pet Name" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
//         <input type="date" name="formDate" value={formData.formDate} onChange={handleChange} placeholder="From Date" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
//         <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} placeholder="To Date" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
//         <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
//         <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
//         <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
//         {/* Populate user details */}
//         <input type="text" name="phno" value={formData.fullname} onChange={handleChange} placeholder="Name" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
//         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
//         <input type="tel" name="phno" value={formData.phno} onChange={handleChange} placeholder="Mobile" style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }} />
//         <button type="submit" style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '4px', background: '#007bff', color: '#fff', border: 'none', fontSize: '1rem', cursor: 'pointer' }}>Submit Booking</button>
//       </form>
//     </div>
//   );
// }

// function App() {
//   const [userDetails, setUserDetails] = useState({});
//   const [vendorCards, setVendorCards] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedVendorId, setSelectedVendorId] = useState(null);

//   useEffect(() => {
//     // Fetch user details from localStorage
//     const userDetailsString = localStorage.getItem('userDetails');
//     if (userDetailsString) {
//       setUserDetails(JSON.parse(userDetailsString));
//     }

//     // Fetch vendor cards from backend
//     axios.get('http://localhost:9039/api/daycare/all')
//       .then(response => {
//         setVendorCards(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching vendor cards:', error);
//       });
//   }, []);

//   const handleBookNow = (vendorId) => {
//     console.log("Selected Vendor ID:", vendorId); // Add this line
//     setSelectedVendorId(vendorId);
//     setShowForm(true);
//   };
  
  

//   const handleBook = (bookingData) => {
//     // Send booking data to backend
//     axios.post(`http://localhost:9036/book/save/${bookingData.userId}/${bookingData.vendorId}`, bookingData)
//       .then(response => {
//         console.log('Booking successful:', response.data);
//         alert("Booked successfully");
//         setShowForm(false);
//         // Handle success
//       })
//       .catch(error => {
//         console.error('Error booking:', error);
//         // Handle error
//       });
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//   };

//   return (
//     <div style={{ position: 'relative' }}>
//       {/* <h1>Vendor Cards</h1> */}
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//         {vendorCards.map((vendor, index) => (
//           <VendorCard key={index} vendor={vendor} onBookNow={handleBookNow} />
//         ))}
//       </div>
//       {selectedVendorId && showForm &&
//   <BookingForm
//     userDetails={userDetails}
//     vendorId={selectedVendorId} // Pass the selected vendorId here
//     onBook={handleBook}
//     onClose={handleCloseForm}
//   />
// }

//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DayCareCards = () => {
  const [daycareServices, setDaycareServices] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9039/api/daycare/all');
        setDaycareServices(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 
 
 
  const handleBookNow = async (daycareId) => {
    try {
      const response = await axios.get(`http://localhost:9039/api/daycare/${daycareId}`);
      if (response.status === 200) {
        const daycareDetails = await response.data;
        localStorage.setItem('daycareDetails', JSON.stringify(daycareDetails));
        navigate('/Bookfordaycare');
      } else {
        console.error("Failed to fetch test report data");
      }
    } catch (error) {
      console.error("Error in fetching test report data:", error);
    }
  };
  

  const renderCards = () => {
    return daycareServices.map(service => (
        <div key={service.daycareId} style={cardStyle}>
        <img src={`data:image/jpeg;base64,${service.image}`} alt="Service" style={imageStyle} />
        <div style={contentStyle}>
          <h3>{service.serviceType}</h3>
          <p>Cost: RS.{service.serviceCost}</p>
          <p>{service.location}</p>
          <p>{service.description}</p>
          <button onClick={() => handleBookNow(service.daycareId)} style={buttonStyle}>Book Now</button>
        </div>
      </div>
    ));
  };

  return <div style={containerStyle}>{renderCards()}</div>;
};

// Define inline styles for cards, content, and button
const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const cardStyle = {
  maxWidth: '300px',
  margin: '20px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

const contentStyle = {
  padding: '20px',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default DayCareCards;



