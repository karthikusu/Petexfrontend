// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import CommonNav from './VendorNav';

// const HouseBourdForm = () => {
//   const [serviceData, setServiceData] = useState({
//     serviceCost: 0,
//     serviceType: '',
//     location: '',
//   });

//   const handleChange = (e) => {
//     setServiceData({ ...serviceData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!serviceData.serviceCost || !serviceData.serviceType || !serviceData.location) {
//         alert('Please fill in all fields before submitting.');
//         return;
//       }

//     try {
//       const response = await axios.post('http://localhost:1115/house/board/save', serviceData);
//       console.log(response.data);
//       alert('Data submitted successfully!');
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   return (
//     <>
//     <CommonNav/>
//     <form onSubmit={handleSubmit} style={formStyle}>
//       <label style={labelStyle}>
//         Service Cost:
//         <input type="number" name="serviceCost" value={serviceData.serviceCost} onChange={handleChange} style={inputStyle} />
//       </label>
//       <br />
//       <label style={labelStyle}>
//         Service Type:
//         <select
//           name="serviceType"
//           value={serviceData.serviceType}
//           onChange={handleChange}
//           style={inputStyle}
//         >
//           <option value="SpaBath">SpaBath</option>
//           <option value="Grooming">Grooming</option>
//           <option value="HairCut">HairCut</option>
//           <option value="Stylish">Stylish HairCut</option>
//           <option value="Anti-Thick">Anti_thick treatment</option>
//           <option value="BodyMassage">BodyMassage</option>
//           <option value="Mats">Mats Removal</option>
//         </select>
//       </label>
//       <br />
//       <label style={labelStyle}>
//         Location:
//         <input type="text" name="location" value={serviceData.location} onChange={handleChange} style={inputStyle} />
//       </label>
//       <br />
//       <button type="submit" style={buttonStyle}>Submit</button>
//    <Link to="/houseboarding"  > <button type="button"  style={backButtonStyle}>Back</button></Link>
//     </form>
//     </>
//   );
// };


// const formStyle = {
//   maxWidth: '400px',
//   margin: 'auto',
//   padding: '20px',
//   backgroundColor: '#f4f4f4',
//   borderRadius: '8px',
// };

// const labelStyle = {
//   display: 'block',
//   marginBottom: '10px',
//   fontSize: '16px',
//   fontWeight: 'bold',
// };

// const inputStyle = {
//   width: '100%',
//   padding: '8px',
//   marginBottom: '10px',
//   boxSizing: 'border-box',
// };

// const buttonStyle = {
//   backgroundColor: '#4CAF50',
//   color: 'white',
//   padding: '10px 15px',
//   border: 'none',
//   borderRadius: '4px',
//   cursor: 'pointer',
// };
// const backButtonStyle = {
//     backgroundColor: '#333',
//     color: 'white',
//     padding: '10px 15px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginRight: '10px',
//   };

// export default HouseBourdForm;


import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CommonNav from './VendorNav';

const HouseBourdForm = () => {
  const [serviceData, setServiceData] = useState({
    serviceCost: 0,
    serviceType: '',
    location: '',
  });

  const handleChange = (e) => {
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!serviceData.serviceCost || !serviceData.serviceType || !serviceData.location) {
        alert('Please fill in all fields before submitting.');
        return;
      }

    try {
      const vendorDetails = JSON.parse(localStorage.getItem('vendorDetails'));
      if (!vendorDetails || !vendorDetails.vendorId) {
          throw new Error('Vendor details not found');
      }
  
      const vendorId = vendorDetails.vendorId;
      const response = await axios.post(`http://localhost:1115/house/board/save/${vendorId}`, serviceData);
      console.log(response.data);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <>
    <CommonNav/>
    <form onSubmit={handleSubmit} style={formStyle}>
      <label style={labelStyle}>
        Service Cost:
        <input type="number" name="serviceCost" value={serviceData.serviceCost} onChange={handleChange} style={inputStyle} />
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
          <option value="SpaBath">SpaBath</option>
          <option value="Grooming">Grooming</option>
          <option value="HairCut">HairCut</option>
          <option value="Stylish">Stylish HairCut</option>
          <option value="Anti-Thick">Anti_thick treatment</option>
          <option value="BodyMassage">BodyMassage</option>
          <option value="Mats">Mats Removal</option>
        </select>
      </label>
      <br />
      <label style={labelStyle}>
        Location:
        <input type="text" name="location" value={serviceData.location} onChange={handleChange} style={inputStyle} />
      </label>
      <br />
      <button type="submit" style={buttonStyle}>Submit</button>
   <Link to="/houseboarding"  > <button type="button"  style={backButtonStyle}>Back</button></Link>
    </form>
    </>
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

export default HouseBourdForm;
