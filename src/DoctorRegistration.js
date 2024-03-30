
import React, { useState } from 'react';
import axios from 'axios';
import './DoctorRegistration.css'; // Import CSS file here
import BG2 from './vetdoctorbg.jpg';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    doctorName: '',
    qualificationAndSpecialization: '',
    overAllExperience: '',
    mobileNumber: '',
    email: '',
    pwd: '',
    confirmPassword: '',
    registrationBody: '',
    medicalBoard: '',
    discription: '',
    clinicName: '',
    otp: " ",
    image: null,
    location:''
  });

  const [errors, setErrors] = useState({});
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear previous error message when user starts typing
    setErrors({ ...errors, [name]: '' });
  };
  

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const validateForm = () => {
    const errors = {};
    const { doctorName, qualificationAndSpecialization, overAllExperience, mobileNumber, email, pwd, confirmPassword, registrationBody, medicalBoard, discription, clinicName,location , image} = formData;
  
    if (!doctorName.trim()) {
      errors.doctorName = 'Doctor name is required';
    }
  
    if (!overAllExperience.trim()) {
      errors.overAllExperience = 'Overall experience is required';
    } else if (!/^[a-zA-Z0-9\s]+$/.test(overAllExperience)) {
      errors.overAllExperience = 'Overall experience should contain only letters and numbers';
    }
  
    if (!qualificationAndSpecialization.trim()) {
      errors.qualificationAndSpecialization = 'Qualification And Specialization is required';
    } else if (!/^[a-zA-Z\s]+$/.test(qualificationAndSpecialization)) {
      errors.qualificationAndSpecialization = 'Qualification And Specialization should contain only letters';
    }
  
    if (!mobileNumber.trim()) {
      errors.mobileNumber = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      errors.mobileNumber = 'Invalid mobile number';
    }
  
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!pwd.trim()) {
      errors.pwd = 'Password is required';
    } else if (pwd.length < 6) {
      errors.pwd = 'Password must be at least 6 characters long';
    }
  
    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (confirmPassword !== pwd) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    if (!registrationBody.trim()) {
      errors.registrationBody = 'Registration body is required';
    }
  
    if (!medicalBoard.trim()) {
      errors.medicalBoard = 'Medical board is required';
    } else if (!/^[a-zA-Z\s]+$/.test(medicalBoard)) {
      errors.medicalBoard = 'Medical board should contain only letters';
    }
  
    if (!discription.trim()) {
      errors.discription = 'Description is required';
    } else if (!/^[a-zA-Z\s]+$/.test(discription)) {
      errors.discription = 'Description should contain only letters';
    }
  
    if (!clinicName.trim()) {
      errors.clinicName = 'Clinic name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(clinicName)) {
      errors.clinicName = 'Clinic name should contain only letters';
    }
  
    if (!image) {
      errors.image = 'Image is required';
    }

    if (!location.trim()) {
      errors.location = 'Location is required';
    } else if (!/^[a-zA-Z\s]+$/.test(location)) {
      errors.location = 'Location should contain only letters';
    }
  
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
  
    if (isValid) {
      const url = 'http://localhost:9005/petex/save';
      const formDataToSend = new FormData();
      for (let key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      try {
        const response = await axios.post(url, formDataToSend);
        console.log(response.data);
        alert("Submitted Successfully");
        navigate('/doctorlogin');
        // Clear the form data after successful submission
        setFormData({
          doctorName: '',
          qualificationAndSpecialization: '',
          overAllExperience: '',
          mobileNumber: '',
          email: '',
          pwd: '',
          confirmPassword: '',
          registrationBody: '',
          medicalBoard: '',
          discription: '',
          clinicName: '',
          image: null,
          location:''
        });
        // Handle success or show a success message
      } catch (error) {
        console.error('Error occurred while registering:', error);
        // Handle error or show an error message
      }
    } else {
      // Show popup message to fill the required fields
      alert('Please fill in all the required fields.');
    }
  };
  
  
  return (
    <div className='backgroundContainer3'  style={{backgroundImage:`url(${BG2}`}}>
      
      <form onSubmit={handleSubmit} style={{ backgroundColor: 'transparent', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width: "700px", marginLeft: "10%", marginTop: "0%", color: "white", backgroundSize:"absolute"}}>
        <h2 style={{textAlign:"center"}}>Doctor Registration</h2>
        <p >Full Name</p>
        <input type="text" name="doctorName" placeholder="Doctor Name" onChange={handleChange} 
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        {errors.doctorName && <p style={{ color: 'red' }}>{errors.doctorName}</p>}
        <p >Qualification And Specialization</p>
        <input type="text" name="qualificationAndSpecialization" placeholder="Qualification and Specialization" onChange={handleChange} 
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        {errors.qualificationAndSpecialization && <p style={{ color: 'red' }}>{errors.qualificationAndSpecialization}</p>}
        <p >Overall Experience</p>
        <input type="text" name="overAllExperience" placeholder="Overall Experience" onChange={handleChange} 
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        {errors.overAllExperience && <p style={{ color: 'red' }}>{errors.overAllExperience}</p>}
        <p >Mobile Number</p>
        <input type="text" name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} 
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        {errors.mobileNumber && <p style={{ color: 'red' }}>{errors.mobileNumber}</p>}
        <p >Email</p>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} 
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <p >Password</p>
        <input type="password" name="pwd" placeholder="Password" onChange={handleChange} 
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        {errors.pwd && <p style={{ color: 'red' }}>{errors.pwd}</p>}
        <p >Confirm Password</p>
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} 
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
        <p >Registration Body</p>
        <input type="text" name="registrationBody" placeholder="Registration Body" onChange={handleChange} 
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        {errors.registrationBody && <p style={{ color: 'red' }}>{errors.registrationBody}</p>}
        <p >Medical Board</p>
        <input type="text" name="medicalBoard" placeholder="Medical Board" onChange={handleChange} 
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        {errors.medicalBoard && <p style={{ color: 'red' }}>{errors.medicalBoard}</p>}
        <p >Description</p>
        <input type="text" name="discription" placeholder="Description" onChange={handleChange} 
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        {errors.discription && <p style={{ color: 'red' }}>{errors.discription}</p>}
        <p >Clinic Name</p>
        <input type="text" name="clinicName" placeholder="Clinic Name" onChange={handleChange} 
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        {errors.clinicName && <p style={{ color: 'red' }}>{errors.clinicName}</p>}
        <p></p>
        {/* <input type="text" name="otp" placeholder="OTP" onChange={handleChange} /> */}
        <p >Image</p>
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} 
        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}/>
        {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}
        <p>Location:</p>
        <input
          type="text"
          placeholder='Enter location'
          name="location"
          value={formData.location}  // Use formData.location
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {errors.location && <span style={{ color: 'red' }}>{errors.location}</span>}


        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
