import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BG2 from '../assets/CowBGAdopt.jpg';
import './VendorRegister.css';

const NewRegister = () => {
  const [formValues, setFormValues] = useState({
    establishmentName: '',
    contactperson: '',
    address: '',
    phno: '',
    alternativemobilenumber: '',
    email: '',
    pwd: '',
    confirmPwd: '',
    url: '',
    typeofvendor: '',
    featuredListings: '',
    paymentmodes: '',
    estsince: '',
    socialmedia: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation for text fields
    if (!/^[a-zA-Z\s]*$/.test(formValues.establishmentName)) {
      newErrors.establishmentName = 'Only letters and spaces are allowed for Establishment Name';
    }
    if (!/^[a-zA-Z\s]*$/.test(formValues.contactperson)) {
      newErrors.contactperson = 'Only letters and spaces are allowed for Contact Person';
    }
    if (!/^[a-zA-Z\s]*$/.test(formValues.address)) {
      newErrors.address = 'Only letters and spaces are allowed for Address';
    }
    if (!/^[a-zA-Z\s]*$/.test(formValues.typeofvendor)) {
      newErrors.typeofvendor = 'Only letters and spaces are allowed for Type of Vendor';
    }
    if (!/^[a-zA-Z\s]*$/.test(formValues.featuredListings)) {
      newErrors.featuredListings = 'Only letters and spaces are allowed for Featured Listings';
    }
    if (!/^[a-zA-Z\s]*$/.test(formValues.paymentmodes)) {
      newErrors.paymentmodes = 'Only letters and spaces are allowed for Payment Modes';
    }
    if (!/^[a-zA-Z\s]*$/.test(formValues.socialmedia)) {
      newErrors.socialmedia = 'Only letters and spaces are allowed for Social Media';
    }

    // Validation for phone numbers
    if (!/^[6-9]\d{9}$/.test(formValues.phno)) {
      newErrors.phno = 'Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9';
    }
    if (!/^[6-9]\d{9}$/.test(formValues.alternativemobilenumber)) {
      newErrors.alternativemobilenumber = 'Please enter a valid 10-digit alternative phone number starting with 6, 7, 8, or 9';
    }

    // Validation for email
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formValues.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validation for password
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(formValues.pwd)) {
      newErrors.pwd = 'Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character';
    }

    // Validation for confirm password
    if (formValues.confirmPwd !== formValues.pwd) {
      newErrors.confirmPwd = 'Passwords do not match';
    }

    // Validation for establishment year
    if (!/^\d{4}$/.test(formValues.estsince)) {
      newErrors.estsince = 'Please enter a valid 4-digit establishment year';
    }

    // Validation for URL
    if (!/^https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/.test(formValues.url)) {
      newErrors.url = 'Please enter a valid URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      try {
        const response = await axios.post('http://localhost:9001/petex/vendorsignup', formValues);
        console.log('Registration successful:', response.data);
        alert('Registration successful');
        navigate("/vendorprofilelogin");
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  };

  const {
    establishmentName,
    contactperson,
    address,
    phno,
    alternativemobilenumber,
    email,
    pwd,
    confirmPwd,
    url,
    typeofvendor,
    featuredListings,
    paymentmodes,
    estsince,
    socialmedia,
  } = formValues;

  return (
    <div className='backgroundContainer2' style={{backgroundImage: `url(${BG2})`, position:"absolute", width:"100%"}}>
      <div className='formContainer2'>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'transparent', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width: "700px", marginLeft: "10%", marginTop: "2%", color: "black", height: "absolute" }}>
          <h2>Registration</h2>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label htmlFor="establishmentName">Establishment Name:</label>
              <input
                type="text"
                placeholder='Enter Establishment name'
                name="establishmentName"
                id="establishmentName"
                value={establishmentName}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.establishmentName && <span style={{ color: 'red' }}>{errors.establishmentName}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "8%" }}>
              <label htmlFor="contactperson">Contact person:</label>
              <input
                type="text"
                placeholder='Enter contact person name'
                name="contactperson"
                id="contactperson"
                onChange={handleChange}
                value={contactperson}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.contactperson && <span style={{ color: 'red' }}>{errors.contactperson}</span>}
            </div>
          </div>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label htmlFor="phno">Mobile Number:</label>
              <input
                type="text"
                placeholder='Enter your mobile number'
                name="phno"
                id="phno"
                onChange={handleChange}
                value={phno}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.phno && <span style={{ color:'red' }}>{errors.phno}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label htmlFor="alternativemobilenumber">Alternative Number:</label>
              <input
                type="text"
                placeholder='Enter your alternative number'
                name="alternativemobilenumber"
                id="alternativemobilenumber"
                value={alternativemobilenumber}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.alternativemobilenumber && <span style={{ color: 'red' }}>{errors.alternativemobilenumber}</span>}
            </div>
          </div>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder='Enter your email address'
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                placeholder='Enter your password'
                name="pwd"
                id="pwd"
                value={pwd}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.pwd && <span style={{ color: 'red' }}>{errors.pwd}</span>}
            </div>
          </div>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label htmlFor="confirmPwd">Confirm Password:</label>
              <input
                type="password"
                placeholder='Re-enter your password'
                name="confirmPwd"
                id="confirmPwd"
                value={confirmPwd}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.confirmPwd && <span style={{ color: 'red' }}>{errors.confirmPwd}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                placeholder='Enter your city'
                name="address"
                id="address"
                value={address}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
            </div>
          </div>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label htmlFor="url">URL:</label>
              <input
                type="text"
                placeholder='Enter URL (e.g., http://www.example.com)'
                name="url"
                id="url"
                value={url}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.url && <span style={{ color: 'red' }}>{errors.url}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "8%" }}>
              <label htmlFor="typeofvendor">Type Of Vendor:</label>
              <input
                type="text"
                placeholder='Enter type of vendor'
                name="typeofvendor"
                id="typeofvendor"
                value={typeofvendor}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.typeofvendor && <span style={{ color: 'red' }}>{errors.typeofvendor}</span>}
            </div>
          </div>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label htmlFor="featuredListings">Featured Listings:</label>
              <input
                type="text"
                placeholder='Enter featured listings'
                name="featuredListings"
                id="featuredListings"
                value={featuredListings}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.featuredListings && <span style={{ color: 'red' }}>{errors.featuredListings}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label htmlFor="paymentmodes">Payment Modes:</label>
              <select
                name="paymentmodes"
                id="paymentmodes"
                value={paymentmodes}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              >
                <option>credit card</option>
                <option>debitcard</option>
                </select>
              {errors.paymentmodes && <span style={{ color: 'red' }}>{errors.paymentmodes}</span>}
            </div>
          </div>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label htmlFor="estsince">Establishment Since:</label>
              <input
                type="text"
                placeholder='Enter establishment since year'
                name="estsince"
                id="estsince"
                value={estsince}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.estsince && <span style={{ color: 'red' }}>{errors.estsince}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "8%" }}>
              <label htmlFor="socialmedia">Social Media:</label>
              <input
                type="text"
                placeholder='Enter social media'
                name="socialmedia"
                id="socialmedia"
                value={socialmedia}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.socialmedia && <span style={{ color: 'red' }}>{errors.socialmedia}</span>}
            </div>
          </div>

          <button type="submit" style={{ background: '#4CAF50', color: 'white', padding: '10px', borderRadius: '4px', cursor: 'pointer', border: 'none' }}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewRegister;
