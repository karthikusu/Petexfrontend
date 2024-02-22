import React, { useState } from 'react';
import './VendorRegister.css'; // Import CSS file here
import BG2 from '../assets/vendorloginbg.gif';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {
  const [establishmentName, setEstablishmentName] = useState('');
  const [contactperson, setContactperson] = useState('');
  const [address, setAddress] = useState('');
  const [phno , setPhno] = useState('');
  const [alternativemobilenumber, setAlternativemobilenumber] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [url, setUrl] = useState('');
  const [typeofvendor, setTypeofvendor] = useState('');
  const [featuredListings, setFeaturedListings] = useState('');
  const [paymentmodes, setPaymentmodes] = useState('');
  const [estsince, setEstsince] = useState('');
  const [socialmedia, setSocialmedia] = useState('');

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: '' }); // Clear error message when user types in the input field
    switch (name) {
        case 'establishmentName':
            // Validate pet name (only letters)
            if (!/^[a-zA-Z ]*$/.test(value)) {
              setErrors({ ...errors, [name]: 'Only letters are allowed name' });
            }
            setEstablishmentName(value);
            break;
      case 'contactperson':
        // Validate pet name (only letters)
        if (!/^[a-zA-Z ]*$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only letters are allowed for contact person name' });
        }
        setContactperson(value);
        break;
      case 'address':
        // Validate breed (only letters)
        if (!/^[a-zA-Z ]*$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only letters are allowed for address' });
        }
        setAddress(value);
        break;

        case 'phno':
        // Validate phone number (only digits)
        if (!/^\d+$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only digits are allowed for phone number' });
        }
        setPhno(value);
        break;
      case 'alternativemobilenumber':
        // Validate alternative phone number (only digits)
        if (!/^\d+$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only digits are allowed for alternative phone number' });
        }
        setAlternativemobilenumber(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'pwd':
        setPwd(value);
        break;
      case 'confirmPwd':
        setConfirmPwd(value);
        break;
      case 'url':
        // Validate species (only letters)
        if (!/^[a-zA-Z ]*$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only letters are allowed for url' });
        }
        setUrl(value);
        break;

        case 'typeofvendor':
            // Validate pet name (only letters)
        if (!/^[a-zA-Z ]*$/.test(value)) {
            setErrors({ ...errors, [name]: 'Only letters are allowed name' });
        }
        setTypeofvendor(value);
        break;

        case 'featuredListings':
                // Validate pet name (only letters)
        if (!/^[a-zA-Z ]*$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only letters are allowed name' });
        }
        setFeaturedListings(value);
        break;
        case 'paymentmodes':
        setPaymentmodes(value);
        break;
        case 'estsince':
                        // Validate phone number (only digits)
        if (!/^\d+$/.test(value)) {
        setErrors({ ...errors, [name]: 'Only digits are allowed for phone number' });
        }
        setEstsince(value);
        break;
      
    //   case 'fullname':
    //     // Validate fullname (only letters)
    //     if (!/^[a-zA-Z ]*$/.test(value)) {
    //       setErrors({ ...errors, [name]: 'Only letters are allowed for full name' });
    //     }
    //     setFullname(value);
    //     break;
      
      case 'socialmedia':
        // Validate city (only letters)
        if (!/^[a-zA-Z ]*$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only letters are allowed for city' });
        }
        setSocialmedia(value);
        break;
      default:
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!establishmentName) newErrors.establishmentName = 'establishment name is required';
    if (!contactperson) newErrors.contactperson = 'contact person name  is required';
    if (!estsince) newErrors.estsince = 'estsince is required';
    if (!socialmedia) newErrors.socialmedia = 'socialmedia is required';
    if (!pwd) newErrors.pwd = 'Vaccination status is required';
    if (!confirmPwd) newErrors.confirmPwd = 'Weight is required';
    if (!url) newErrors.url = 'Colour is required';
    if (!typeofvendor) newErrors.typeofvendor = 'Height is required';
    if (!featuredListings) newErrors.featuredListings = 'Disease status is required';
    if (!paymentmodes) newErrors.paymentmodes = 'User Name is required';
    if (!phno) {
      newErrors.phno = 'Mobile Number is required';
    } else if (!/^\d+$/.test(phno)) {
      newErrors.phno = 'Mobile Number must contain only digits';
    } else if (phno.length !== 10 || !/[6-9]/.test(phno.charAt(0))) {
      newErrors.phno = 'Mobile Number must start with 6, 7, 8, or 9 and should be 10 digits';
    }
    
    if (!alternativemobilenumber) {
      newErrors.alternativemobilenumber = 'Alternative Number is required';
    } else if (!/^\d+$/.test(alternativemobilenumber)) {
      newErrors.alternativemobilenumber = 'Alternative Number must contain only digits';
    } else if (alternativemobilenumber.length !== 10 || !/[6-9]/.test(alternativemobilenumber.charAt(0))) {
      newErrors.alternativemobilenumber = 'Alternative Number must start with 6, 7, 8, or 9 and should be 10 digits';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!pwd) {
      newErrors.pwd = 'Password is required';
    } else if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(pwd))) {
      newErrors.pwd = 'Password must be 7 to 15 characters with at least one numeric digit and a special character';
    }
    if (!confirmPwd) {
      newErrors.confirmPwd = 'Confirm Password is required';
    } else if (pwd !== confirmPwd) {
      newErrors.confirmPwd = 'Passwords do not match';
    }
    if (!address) {
      newErrors.address = 'address is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      try {
        const response = await axios.post('http://localhost:9001/petex/vendorsignup', {
          establishmentName,
          contactperson,
          address,
          phno,
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
        });
        console.log('Registration successful:', response.data);
        navigate("/"); // Redirect after successful registration
      } catch (error) {
        console.error('Registration failed:', error);
        // Handle error, such as displaying an error message to the user
      }
    }
  };

  return (
    <div className='backgroundContainer2' style={{ backgroundImage: `url(${BG2})`, height: "1000px" }}>
      <div className='formContainer2'>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'transparent', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width: "700px", marginLeft: "10%", marginTop: "2%", color: "white", height: "820px" }}>
          <h2>Registration</h2>

          {/* First row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
            <label>Establishment Name:</label>
            <input
                type="text"
                placeholder='Enter Establishmen name'
                name="establishmentName"
                value={establishmentName}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.establishmentName && <span style={{ color: 'red' }}>{errors.establishmentName}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "8%" }}>
              <label>Contact person:</label>
              <input
                type="text"
                placeholder='Enter contact person name'
                name="contactperson"
                value={contactperson}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.contactperson && <span style={{ color: 'red' }}>{errors.contactperson}</span>}
            </div>
          </div>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Mobile Number:</label>
              <input
                type="text"
                placeholder='Enter your mobile number'
                name="phno"
                value={phno}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.phno && <span style={{ color: 'red' }}>{errors.phno}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label>Alternative Number:</label>
              <input
                type="text"
                placeholder='Enter your alternative number'
                name="alternativemobilenumber"
                value={alternativemobilenumber}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.alternativemobilenumber && <span style={{ color: 'red' }}>{errors.alternativemobilenumber}</span>}
            </div>
          </div>

          {/* Eighth row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Email:</label>
              <input
                type="email"
                placeholder='Enter your email address'
                name="email"
                value={email}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label>Password:</label>
              <input
                type="password"
                placeholder='Enter your password'
                name="pwd"
                value={pwd}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.pwd && <span style={{ color: 'red' }}>{errors.pwd}</span>}
            </div>
          </div>

          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Confirm Password:</label>
              <input
                type="password"
                placeholder='Re-enter your password'
                name="confirmPwd"
                value={confirmPwd}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.confirmPwd && <span style={{ color: 'red' }}>{errors.confirmPwd}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label>Address:</label>
              <input
                type="text"
                placeholder='Enter your city'
                name="address"
                value={address}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
            </div>
          </div>

          {/* Fourth row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Url:</label>
              <input
                type="text"
                placeholder='Enter url'
                name="url"
                value={url}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.url && <span style={{ color: 'red' }}>{errors.url}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "8%" }}>
              <label>Type Of Vendor:</label>
              <input
                type="text"
                placeholder='Enter type of vendor'
                name="typeofvendor"
                value={typeofvendor}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.typeofvendor && <span style={{ color: 'red' }}>{errors.typeofvendor}</span>}
            </div>
          </div>

          {/* Fifth row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Featured Listings:</label>
              <input
                type="text"
                placeholder='Enter Featured listings'
                name="featuredListings"
                value={featuredListings}
                onChange={handleChange}
                style={{ width: '110%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.featuredListings && <span style={{ color: 'red' }}>{errors.featuredListings}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
            <label htmlFor="disabledSelect" className="form-label"  style={{marginLeft:"5%"}}>Payment Modes :</label>
              <select id="disabledSelect" className="form-select" name="paymentmodes" value={paymentmodes} onChange={handleChange} style={{ width: "330px", height: "35px", borderRadius: '4px', border: '1px solid #ccc',marginLeft:"5%", marginTop:"-5%" }}>
                <option value="">Select</option>
                <option value="Dogs">Debit card</option>
                <option value="Horses">Credit card</option>
                <option value="Birds">UPI</option>

              </select>
              {errors.paymentmodes && <span style={{ color: 'red' }}>{errors.paymentmodes}</span>}
            </div>
          </div>

          {/* Sixth row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Established since:</label>
              <input
                type="number"
                placeholder='Enter est since'
                name="estsince"
                value={estsince}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.estsince && <span style={{ color: 'red' }}>{errors.estsince}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label>Social Media:</label>
              <input
                type="text"
                placeholder='Enter social media'
                name="socialmedia"
                value={socialmedia}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.socialmedia && <span style={{ color: 'red' }}>{errors.socialmedia}</span>}
            </div>
          </div>

          {/* Seventh row of input fields */}
          
          {/* Ninth row of input fields */}
          

          {/* Submit button */}
          <div style={{ marginTop: '20px' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '150px', padding: '10px', borderRadius: '6px', border: 'none', backgroundColor: '#1e88e5', cursor: 'pointer', marginLeft:"280px"}}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
