import React, { useState } from 'react';
import './DoctorRegistration.css'; // Import CSS file here
import BG2 from './vetdoctorbg.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DoctorRegistration() {
  const [doctorName, setDoctorName] = useState('');
  const [qualificationAndSpecialization, setQualificationAndSpecialization] = useState('');
  const [overAllExperience, setOverAllExperience] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationBody, setRegistrationBody] = useState('');
  const [medicalBoard, setMedicalBoard] = useState('');
  const [discription, setDiscription] = useState('');
  const [clinicName, setClinicName] = useState('');
//   const [otp, setOtp] = useState('');

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: '' }); // Clear error message when user types in the input field
    switch (name) {
      case 'doctorName':
        setDoctorName(value.replace(/[^a-zA-Z\s]/g, '')); // Accepts only letters and spaces
        break;
      case 'qualificationAndSpecialization':
        setQualificationAndSpecialization(value);
        break;
      case 'overAllExperience':
        setOverAllExperience(value.replace(/[^0-9]/g, '')); // Accepts only numbers
        break;
      case 'mobileNumber':
        setMobileNumber(value.replace(/[^0-9]/g, '').slice(0, 10)); // Accepts only numbers and limits to 10 digits
        break;
      case 'email':
        setEmail(value);
        break;
      case 'pwd':
        setPwd(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      case 'registrationBody':
        setRegistrationBody(value);
        break;
      case 'medicalBoard':
        setMedicalBoard(value);
        break;
      case 'discription':
        setDiscription(value);
        break;
      case 'clinicName':
        setClinicName(value);
        break;
    //   case 'otp':
    //     setOtp(value);
    //     break;
      default:
        // Handle other input fields
        break;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    // Add validation rules here
    if (!doctorName.trim()) {
      newErrors.doctorName = 'Doctor name is required';
    }
    if (!qualificationAndSpecialization.trim()) {
      newErrors.qualificationAndSpecialization = 'Qualification and specialization are required';
    }
    if (!overAllExperience.trim()) {
      newErrors.overAllExperience = 'Overall experience is required';
    }
    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      newErrors.mobileNumber = 'Invalid mobile number';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!pwd.trim()) {
      newErrors.pwd = 'Password is required';
    }
    if (pwd.trim() !== confirmPassword.trim()) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!registrationBody.trim()) {
      newErrors.registrationBody = 'Registration body is required';
    }
    if (!medicalBoard.trim()) {
      newErrors.medicalBoard = 'Medical board is required';
    }
    if (!discription.trim()) {
      newErrors.discription = 'Description is required';
    }
    if (!clinicName.trim()) {
      newErrors.clinicName = 'Clinic name is required';
    }
    // if (!otp.trim()) {
    //   newErrors.otp = 'OTP is required';
    // }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      try {
        const response = await axios.post('http://localhost:9005/petex/save', {
          doctorName,
          qualificationAndSpecialization,
          overAllExperience,
          mobileNumber,
          email,
          pwd,
          confirmPassword,
          registrationBody,
          medicalBoard,
          discription,
          clinicName,
        //   otp,
        });
        console.log('Registration successful:', response.data);
        window.alert('Registered successfully')
        navigate("/doctorlogin"); // Redirect after successful registration
      } catch (error) {
        console.error('Registration failed:', error);
        // Handle error, such as displaying an error message to the user
      }
    }
  };

  return (
    <div className='backgroundContainer3' style={{ backgroundImage: `url(${BG2})` }}>
      <div className='formContainer3'>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'transparent', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width: "700px", marginLeft: "10%", marginTop: "2%", color: "white", backgroundSize:"absolute"}}>
          <h2>Doctor Registration</h2>

          <div style={{ marginBottom: '10px' }}>
            <label>Doctor Name:</label>
            <input
              type="text"
              placeholder='Enter doctor name'
              name="doctorName"
              value={doctorName}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.doctorName && <span style={{ color: 'red' }}>{errors.doctorName}</span>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Qualification and Specialization:</label>
            <input
              type="text"
              placeholder='Enter qualification and specialization'
              name="qualificationAndSpecialization"
              value={qualificationAndSpecialization}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.qualificationAndSpecialization && <span style={{ color: 'red' }}>{errors.qualificationAndSpecialization}</span>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Overall Experience:</label>
            <input
              type="text"
              placeholder='Enter overall experience'
              name="overAllExperience"
              value={overAllExperience}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.overAllExperience && <span style={{ color: 'red' }}>{errors.overAllExperience}</span>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Mobile Number:</label>
            <input
              type="text"
              placeholder='Enter mobile number'
              name="mobileNumber"
              value={mobileNumber}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.mobileNumber && <span style={{ color: 'red' }}>{errors.mobileNumber}</span>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Email:</label>
            <input
              type="email"
              placeholder='Enter email'
              name="email"
              value={email}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Password:</label>
            <input
              type="password"
              placeholder='Enter password'
              name="pwd"
              value={pwd}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.pwd && <span style={{ color: 'red' }}>{errors.pwd}</span>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Confirm Password:</label>
            <input
              type="password"
              placeholder='Confirm password'
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Registration Body:</label>
            <input
              type="text"
              placeholder='Enter registration body'
              name="registrationBody"
              value={registrationBody}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.registrationBody && <span style={{ color: 'red' }}>{errors.registrationBody}</span>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Medical Board:</label>
            <input
              type="text"
              placeholder='Enter medical board'
              name="medicalBoard"
              value={medicalBoard}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.medicalBoard && <span style={{ color: 'red' }}>{errors.medicalBoard}</span>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Description:</label>
            <input
              type="text"
              placeholder='Enter description'
              name="discription"
              value={discription}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.discription && <span style={{ color: 'red' }}>{errors.discription}</span>}
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Clinic Name:</label>
            <input
              type="text"
              placeholder='Enter clinic name'
              name="clinicName"
              value={clinicName}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.clinicName && <span style={{ color: 'red' }}>{errors.clinicName}</span>}
          </div>

          {/* <div style={{ marginBottom: '10px' }}>
            <label>OTP:</label>
            <input
              type="text"
              placeholder='Enter OTP'
              name="otp"
              value={otp}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {errors.otp && <span style={{ color: 'red' }}>{errors.otp}</span>}
          </div> */}

          {/* Submit button */}
          <div style={{ marginTop: '20px' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '150px', padding: '10px', borderRadius: '6px', border: 'none', backgroundColor: '#1e88e5', cursor: 'pointer', marginLeft:"280px"}}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DoctorRegistration;
