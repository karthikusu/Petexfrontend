// import React, { useState } from "react";
// // import Sidebar from "./Sidebar";
// import Commonnav from './CommonNav';

// function Sales() {
//   const [formData, setFormData] = useState({
//     petId: '',
//     petType: '',
//     petBreed: '',
//     petName: '',
//     height: '',
//     weight: '',
//     color: '',
//     caretakerName: '',
//     mobile: '',
//     email: '',
//     address: '',
//     date: ''
//   });

//   const [formErrors, setFormErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     setFormErrors({
//       ...formErrors,
//       [name]: ''
//     });
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (!formData.petId) {
//       errors.petId = 'Please enter Pet ID';
//     }
//     if (!formData.petType) {
//       errors.petType = 'Please enter Pet Type';
//     }
//     if (!formData.petBreed) {
//       errors.petBreed = 'Please enter Pet Breed';
//     }
//     if (!formData.petName) {
//       errors.petName = 'Please enter Pet Name';
//     }
//     if (!formData.height) {
//       errors.height = 'Please enter Pet Height';
//     }
//     if (!formData.weight) {
//       errors.weight = 'Please enter Pet Weight';
//     }
//     if (!formData.color) {
//       errors.color = 'Please enter Pet Color';
//     }
//     if (!formData.caretakerName) {
//       errors.caretakerName = 'Please enter Caretaker Name';
//     }
//     if (!formData.mobile) {
//       errors.mobile = 'Please enter Mobile';
//     } else if (!/^\d{10}$/.test(formData.mobile)) {
//       errors.mobile = 'Mobile number must be 10 digits';
//     }
//     if (!formData.email) {
//       errors.email = 'Please enter Email';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Please enter a valid Email';
//     }
//     if (!formData.address) {
//       errors.address = 'Please enter Address';
//     }
//     if (!formData.date) {
//       errors.date = 'Please select a Date';
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const isValid = validateForm();

//     if (isValid) {
//       // Form submission logic
//       console.log('Form submitted successfully!');
//     }
//   };

//   return (
//     <>
//     {/* <Sidebar/> */}
//     <Commonnav/>
//     <div className="bodybg" style={{backgroundColor:"seagreen", position:"absolute", width:"100%"}}>
//       <div className="Sales" style={{ marginLeft: "30%", border: "1px ", width: "40%", marginTop: "1%"}}>
//         <div style={{backgroundColor:"whitesmoke", width:"100%",borderRadius:"8px"}}>
//         <form onSubmit={handleFormSubmit}>
//           <div className="Repoet" >
//             <h2 style={{textAlign:"center"}}>Purchase Here</h2>
//            <p> <label htmlFor="petId" className="fbel" style={{marginLeft:"5%"}}>Pet Id :</label></p>
//             <input
//               type="text"
//               className="fotrol"
//               id="petId"
//               name="petId"
//               value={formData.petId}
//               onChange={handleInputChange}
//               style={{ width: "90%", marginLeft:"5%" }}
//             />
//             <br />
//             {formErrors.petId && <span className="error" style={{ color: "red" }}>{formErrors.petId}</span>}
//           </div>
//           <div>
//             <p><label htmlFor="petType" className="form-labe2" style={{marginLeft:"5%"}}>Pet Type :</label></p>
//             <input
//               type="text"
//               className="forol"
//               id="petType"
//               name="petType"
//               value={formData.petType}
//               onChange={handleInputChange}
//               style={{ width: "90%", marginLeft:"5%" }}
//             />
//             <br />
//             {formErrors.petType && <span className="error" style={{ color: "red" }}>{formErrors.petType}</span>}
//           </div>
//           <div>
//            <p><label htmlFor="petBreed" className="fobe" style={{marginLeft:"5%"}}>Pet Breed :</label></p>
//             <input
//               type="text"
//               className="forol"
//               id="petBreed"
//               name="petBreed"
//               value={formData.petBreed}
//               onChange={handleInputChange}
//               style={{ width: "90%", marginLeft:"5%" }}       
//             />
//             <br />
//             {formErrors.petBreed && <span className="error" style={{ color: "red" }}>{formErrors.petBreed}</span>}
//           </div>
//           <div>
//             <p><label htmlFor="petName" className="fob" style={{marginLeft:"5%"}}>Pet Name :</label></p>
//             <input
//               type="text"
//               className="forl"
//               id="petName"
//               name="petName"
//               value={formData.petName}
//               onChange={handleInputChange}
//               style={{ width: "90%", marginLeft:"5%" }}
//             />
//             <br />
//             {formErrors.petName && <span className="error" style={{ color: "red" }}>{formErrors.petName}</span>}
//           </div>
//           <div>
//            <p> <label htmlFor="height" className="fore" style={{marginLeft:"5%"}}>Pet Height :</label></p>
//             <input
//               type="text"
//               className="forrol"
//               id="height"
//               name="height"
//               value={formData.height}
//               onChange={handleInputChange}
//               style={{ width: "90%", marginLeft:"5%" }}
//             />
//             <br />
//             {formErrors.height && <span className="error" style={{ color: "red" }}>{formErrors.height}</span>}
//           </div>
//           <div>
//             <p><label htmlFor="weight" className="fom-la" style={{marginLeft:"5%"}}>Pet Weight :</label></p>
//             <input
//               type="text"
//               className="forol"
//               id="weight"
//               name="weight"
//               value={formData.weight}
//               onChange={handleInputChange}
//               style={{ width: "90%", marginLeft:"5%" }}
//             />
//             <br />
//             {formErrors.weight && <span className="error" style={{ color: "red" }}>{formErrors.weight}</span>}
//           </div>
//           <div>
//             <p><label htmlFor="color" className="forlb" style={{marginLeft:"5%"}}>Pet Color :</label></p>
//             <input
//               type="text"
//               className="formol"
//               id="color"
//               name="color"
//               value={formData.color}
//               onChange={handleInputChange}
//               style={{ width: "90%", marginLeft:"5%" }}
//             />
//             <br />
//             {formErrors.color && <span className="error" style={{ color: "red" }}>{formErrors.color}</span>}
//           </div>
//           <div>
//             <p><label htmlFor="caretakerName" className="foabe" style={{marginLeft:"5%"}}>Caretaker Name :</label></p>
//             <input
//               type="text"
//               className="frmtrol"
//               id="caretakerName"
//               name="caretakerName"
//               value={formData.caretakerName}
//               onChange={handleInputChange}
//               style={{ width: "90%", marginLeft:"5%" }}
//             />
//             <br />
//             {formErrors.caretakerName && <span className="error" style={{ color: "red" }}>{formErrors.caretakerName}</span>}
//           </div>
//           <div>
//             <p><label htmlFor="mobile" className="fo-la" style={{marginLeft:"5%"}}>Mobile :</label></p>
//             <input
//               type="text"
//               className="for-cl"
//               id="mobile"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleInputChange}
//               style={{ width: "90%", marginLeft:"5%" }}
//             />
//             <br />
//             {formErrors.mobile && <span className="error" style={{ color: "red" }}>{formErrors.mobile}</span>}
//           </div>
//           <div>
//             <p><label htmlFor="email" className="foabe" style={{marginLeft:"5%"}}>Email :</label></p>
//             <input
//               type="text"
//               className="forcntl"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               style={{ width: "90%", marginLeft:"5%" }}
//             />
//             <br />
//             {formErrors.email && <span className="error" style={{ color: "red" }}>{formErrors.email}</span>}
//           </div>
//           <div>
//             <p><label htmlFor="address" className="fo-la" style={{marginLeft:"5%"}}>Address :</label></p>
//             <textarea
//               className="for-cl"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               style={{ width: "90%", marginLeft:"5%" }}
//             />
//             <br />
//             {formErrors.address && <span className="error" style={{ color: "red" }}>{formErrors.address}</span>}
//           </div>
//           <div>
//             <p><label htmlFor="date1" className="form" style={{marginLeft:"5%"}}>Date :</label></p>
//             <input
//               type="date"
//               className="forcntl"
//               id="date"
//               name="date"
//               value={formData.date}
//               onChange={handleInputChange}
//               style={{ width: "90%", marginLeft:"5%" }}
//             />
//             <br />
//             {formErrors.date && <span className="error" style={{ color: "red" }}>{formErrors.date}</span>}
//           </div>
//           <br />
//           <button type="submit" className="btn btn-primary1" style={{marginLeft:"40%"}}>Submit</button>
//         </form>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Sales;


import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function Purchase() {
  const [petType, setPetType] = useState('');
  const [petname, setPetname] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [color, setColor] = useState('');
  const [email, setEmail] = useState('');
  const [phno, setPhno] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!petType.trim()) {
      setErrorMessage('Pet Type is required.');
      return false;
    }
    if (!petname.trim()) {
      setErrorMessage('Pet Name is required.');
      return false;
    }
    if (!petType.match(/^[A-Za-z\s]+$/)) {
      setErrorMessage('Pet Type should contain only alphabetic characters.');
      return false;
    }
    if (!petname.match(/^[A-Za-z\s]+$/)) {
      setErrorMessage('Pet Name should contain only alphabetic characters.');
      return false;
    }
    if (!gender) {
      setErrorMessage('Gender is required.');
      return false;
    }
    if (isNaN(weight) || weight <= 0) {
      setErrorMessage('Weight should be a positive number.');
      return false;
    }
    if (isNaN(height) || height <= 0) {
      setErrorMessage('Height should be a positive number.');
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setErrorMessage('Invalid email address.');
      return false;
    }
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phno.match(phonePattern)) {
      setErrorMessage('Mobile number should contain only 10 digits and start with 6, 7, 8, or 9.');
      return false;
    }
    const addressPattern = /^[a-zA-Z0-9\s]{10,}$/;
    if (!address.match(addressPattern)) {
      setErrorMessage('Address should contain at least 10 characters, including alphabets and numbers.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const data = {
        petType,
        petname,
        gender,
        weight: parseFloat(weight),
        height: parseFloat(height),
        color,
        email,
        phno: parseInt(phno),
        address
      };

      try {
        const response = await fetch('http://localhost:9018/petex/sales', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          toast.success('Purchase data saved successfully.');
          setTimeout(() => {
            window.location.assign('/'); // Redirect to the homepage
          }, 5000); // Wait for 5 seconds before redirecting
        } else {
          const errorMessage = await response.text();
          throw new Error(errorMessage || 'Purchase data could not be saved.');
        }
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage(error.message);
      }
    }
  };


  return (
    <>
    <style>
      {
        `
        .purchase-container{
          background-image: url(https://storage.googleapis.com/pai-images/7908a670bf544ee8af335af797592930.jpeg);
          background-repeat: no-repeat;
          background-size: cover;
          height: 170vh;
          margin-top:10%;
      }
        `
      }
    </style>
    <div className="purchase-container" style={{ marginTop : "10%", marginTop : "-4%"}}>
      
      <form onSubmit={handleSubmit} style={{ marginLeft : "10%", marginTop : "4%", color : "black"}}>
      <h2 style={{ color : "white", marginLeft : "10%"}}>Purchase Form</h2>
        <p><label htmlFor="petType">Pet Type:</label></p>
        <input type="text" id="petType" value={petType} onChange={(e) => setPetType(e.target.value)} required style={{ width : "40%"}}/><br /><br />

        <p><label htmlFor="petname">Pet Name:</label></p>
        <input type="text" id="petname" value={petname} onChange={(e) => setPetname(e.target.value)} required style={{ width : "40%"}}/><br /><br />

        <p><label htmlFor="gender" >Gender:</label></p>
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required style={{ width : "40%"}}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select><br /><br />

        <p><label htmlFor="weight">Weight (kg):</label></p>
        <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} min="0" step="0.01" required style={{ width : "40%"}}/><br /><br />

        <p><label htmlFor="height">Height (in):</label></p>
        <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} min="0" step="0.01" required style={{ width : "40%"}}/><br /><br />

        <p><label htmlFor="color">Color:</label></p>
        <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)} required style={{ width : "40%"}} /><br /><br />

        <p><label htmlFor="email">Email:</label></p>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width : "40%"}} /><br /><br />

        <p><label htmlFor="phno">Phone Number:</label></p>
        <input type="tel" id="phno" value={phno} onChange={(e) => setPhno(e.target.value)} required style={{ width : "40%"}}/><br /><br />

        <p><label htmlFor="address">Address:</label></p>
        <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required style={{ width : "40%", height : "5.5vh"}} /><br /><br />

        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
      <ToastContainer />


    </div>
    </>
  );
}

export default Purchase;