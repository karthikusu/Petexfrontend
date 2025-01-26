import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [editedDetails, setEditedDetails] = useState(null);
  const [editableField, setEditableField] = useState(null);

  useEffect(() => {
    // Fetch doctor details from localStorage
    const loggedInDoctor = JSON.parse(localStorage.getItem('loggedInDoctor'));
    if (loggedInDoctor) {
      setDoctorDetails(loggedInDoctor);
      setEditedDetails({ ...loggedInDoctor }); // Initialize editedDetails with the fetched doctor details
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails({ ...editedDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:9005/petex/update/${doctorDetails.doctId}`, editedDetails);
      if (response.status === 200) {
        // Update doctor details in localStorage and state
        localStorage.setItem('loggedInDoctor', JSON.stringify(editedDetails));
        setDoctorDetails(editedDetails);
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };
  const handleFieldClick = (field) => {
    setEditableField(field);
  };

  return (
    <>
    <style>
      {
        `
        .profile-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        
        .profile-fields {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .profile-field {
          display: flex;
          flex-direction: column;
        }
        
        .profile-field label {
          font-weight: bold;
          margin-bottom: 5px;
        }
        
        .profile-field input {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        
        .profile-field.editable input {
          border-color: blue; /* Example color when field is editable */
        }
        
        button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        button:hover {
          background-color: #0056b3;
        }
        
        `
      }
    </style>
    <div className="profile-container">
      <h2>Doctor Profile</h2>
      {doctorDetails && (
        <form onSubmit={handleSubmit}>
          <div className={`profile-field ${editableField === 'doctorName' ? 'editable' : ''}`}>
            <label>Name:</label>
            <input type="text" name="doctorName" value={editedDetails.doctorName} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'email' ? 'editable' : ''}`}>
            <label>Email:</label>
            <input type="email" name="email" value={editedDetails.email} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'qualificationAndSpecialization' ? 'editable' : ''}`}>
            <label>Qualification & Specialization:</label>
            <input type="text" name="qualificationAndSpecialization" value={editedDetails.qualificationAndSpecialization} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'overAllExperience' ? 'editable' : ''}`}>
            <label>Overall Experience:</label>
            <input type="text" name="overAllExperience" value={editedDetails.overAllExperience} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'mobileNumber' ? 'editable' : ''}`}>
            <label>Mobile Number:</label>
            <input type="text" name="mobileNumber" value={editedDetails.mobileNumber} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'medicalBoard' ? 'editable' : ''}`}>
            <label>Medical Board:</label>
            <input type="text" name="medicalBoard" value={editedDetails.medicalBoard} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'registrationBody' ? 'editable' : ''}`}>
            <label>Registration Body:</label>
            <input type="text" name="registrationBody" value={editedDetails.registrationBody} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'clinicName' ? 'editable' : ''}`}>
            <label>Clinic name:</label>
            <input type="text" name="clinicName" value={editedDetails.clinicName} onChange={handleChange} />
          </div>
          <div className={`profile-field ${editableField === 'discription' ? 'editable' : ''}`}>
            <label>Discription :</label>
            <input type="text" name="discription" value={editedDetails.discription} onChange={handleChange} />
          </div>
          {/* Add input fields for other details similarly */}
          <button type="submit">Update Profile</button>
        </form>
      )}
    </div>
    </>
  );
};

export default Profile;

