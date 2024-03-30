// import "./Adoption.css"; 
// import React, { useState } from 'react';
// import Sidebar from "./Sidebar";
// import axios from "axios";

// function Adoption() {
//   const [formData, setFormData] = useState({
//     petName: '',
//     petBreed: '',
//     email: '',
//     password: '',
//     contactNumber: '',
//     city: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted:", formData);
//       axios.post('http://localhost:9000/petex/save', formData)
//         .then(response => {
//           console.log(response.data);
//           alert("Form submitted successfully.");
//           window.location.assign("/Pets"); 
//         })
//         .catch(error => {
//           console.error('Error saving data:', error);
//           alert("Failed to submit form.");
//         });
//     } else {
//       console.log("Form validation failed.");
//     }
//   };
  
//   const validateForm = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const { email, contactNumber } = formData;

//     if (!formData.petName || !formData.petBreed || !formData.email || !formData.password || !formData.contactNumber || !formData.city) {
//       alert("All fields are required.");
//       return false;
//     }

//     if (!emailRegex.test(email)) {
//       alert("Please enter a valid email address.");
//       return false;
//     }

//     if (contactNumber.length !== 10 || isNaN(contactNumber)) {
//       alert("Please enter a valid 10-digit contact number.");
//       return false;
//     }

//     return true; 
//   };

//   return (
//     <>
//     <Sidebar/>
//     <div className="adoption-main" style={{marginTop: "-1%"}}>
//       <form className="adoption-form" style={{ marginLeft: "60%" }} onSubmit={handleSubmit}>
//         <h2 className="form-heading" style={{ color: "blue" }}>Adopt Me</h2>
//         <div className="Adopt">
//           <div className="form-group">
//             <label htmlFor="petName" className="form-label">Pet Name:</label>
//             <input type="text" className="form-control" id="petName" name="petName" value={formData.petName} onChange={handleChange} />
//           </div>

//           <div className="form-group">
//             <label htmlFor="petBreed" className="form-label">Pet Breed:</label>
//             <input type="text" className="form-control" id="petBreed" name="petBreed" value={formData.petBreed} onChange={handleChange} />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email" className="form-label">Email address:</label>
//             <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password" className="form-label">Password:</label>
//             <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
//           </div>

//           <div className="form-group">
//             <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
//             <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
//           </div>

//           <div className="form-group">
//             <label htmlFor="city" className="form-label">City:</label>
//             <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} />
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </div>
//       </form>
//     </div>
//     </>
//   );
// }

// export default Adoption;






import "./Adoption.css"; 
import React, { useState } from 'react';
// import Sidebar from "./Sidebar";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'; // Import toast

function Adoption() {
  const [formData, setFormData] = useState({
    petname: '',
    petBreed: '',
    emailaddress: '',
    password: '',
    contactNumber: '',
    city: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear the error message when the user starts typing again
    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      axios.post('http://localhost:9008/petex/save', formData)
        .then(response => {
          console.log(response.data);
          toast.success('Form submitted successfully!', {
            autoClose: 10000 // 10 seconds
          }); // Display success toast
          setTimeout(() => {
            window.location.assign("/assistance");
          }, 10000); // 10 seconds
        })
        .catch(error => {
          console.error('Error saving data:', error);
        });
    } else {
      console.log("Form validation failed.");
    }
  };
  
  
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const { petname, petBreed, emailaddress, password, contactNumber, city } = formData;
    const errors = {};

    if (!petname || !petname.match(/^[A-Za-z]+$/)) {
      errors.petname = 'Please enter a valid pet name ';
    }

    if (!petBreed || !petBreed.match(/^[A-Za-z\s]+$/)) {
      errors.petBreed = 'Please enter a valid pet breed ';
    }

    if (!emailaddress || !emailRegex.test(emailaddress)) {
      errors.emailaddress = 'Please enter a valid email address.';
    }

    if (!password || !password.match(passwordRegex)) {
      errors.password = 'Password should be (Abc@1)';
    }

    if (!contactNumber || contactNumber.length !== 10 || isNaN(contactNumber)) {
      errors.contactNumber = 'Please enter a valid 10-digit contact number.';
    }

    if (!city) {
      errors.city = 'Please enter a city.';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0; 
  };

  return (
    <>
    {/* <Sidebar/> */}
    <div className="adoption-main" style={{marginTop: "1%",backgroundColor:"rgb(145, 154, 186)"}}>
      <form className="adoption-form" style={{ marginLeft: "10%" }} onSubmit={handleSubmit}>
        <h2 className="form-heading" style={{ color: "White" }}>Adopt Me</h2>
        <div className="Adopt">
          <div className="form-group">
            <label htmlFor="petname" className="form-label">Pet Name:</label>
            <input type="text" className="form-control" id="petname" name="petname" value={formData.petname} onChange={handleChange} />
            {formErrors.petname && <span className="error" style={{ color : "red"}}>{formErrors.petname}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="petBreed" className="form-label">Pet Breed:</label>
            <input type="text" className="form-control" id="petBreed" name="petBreed" value={formData.petBreed} onChange={handleChange} />
            {formErrors.petBreed && <span className="error"style={{ color : "red"}}>{formErrors.petBreed}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="emailaddress" className="form-label">Email address:</label>
            <input type="email" className="form-control" id="emailaddress" name="emailaddress" value={formData.emailaddress} onChange={handleChange} />
            {formErrors.emailaddress && <span className="error"style={{ color : "red"}}>{formErrors.emailaddress}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
            {formErrors.password && <span className="error"style={{ color : "red"}}>{formErrors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
            <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
            {formErrors.contactNumber && <span className="error"style={{ color : "red"}}>{formErrors.contactNumber}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="city" className="form-label">City:</label>
            <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} />
            {formErrors.city && <span className="error"style={{ color : "red"}}>{formErrors.city}</span>}
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      <ToastContainer /> 
    </div>
    </>
  );
}

export default Adoption;
