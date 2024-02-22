import React, { useState, useEffect } from 'react';
import './DoctorRegistration.css';
import BG2 from './vetdoctorbg.jpg';
import axios from 'axios';

function DoctorsTable() {
  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDoctorData();
  }, []);

  const fetchDoctorData = async () => {
    try {
      const response = await axios.get('http://localhost:9012/petex/getAll');
      if (!response.data.success) {
        throw new Error('Failed to fetch data');
      }
      setDoctorData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error.message || 'Failed to fetch data');
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='backgroundContainer' style={{ backgroundImage: `url(${BG2})`, height: '1200px' }}>
      <div className='formContainer'>
        <h2>Doctor Registration Data</h2>
        {doctorData.length === 0 ? (
          <p>No doctor registration data available yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Qualification and Specialization</th>
                <th>Overall Experience</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Registration Body</th>
                <th>Medical Board</th>
                <th>Description</th>
                <th>Clinic Name</th>
                <th>OTP</th>
              </tr>
            </thead>
            <tbody>
              {doctorData.map((doctor, index) => (
                <tr key={index}>
                  <td>{doctor.doctorName}</td>
                  <td>{doctor.qualificationAndSpecialization}</td>
                  <td>{doctor.overAllExperience}</td>
                  <td>{doctor.mobileNumber}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.registrationBody}</td>
                  <td>{doctor.medicalBoard}</td>
                  <td>{doctor.description}</td>
                  <td>{doctor.clinicName}</td>
                  <td>{doctor.otp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default DoctorsTable;
