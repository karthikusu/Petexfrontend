import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import './ForgetAdminstyle.css';

const ForgetAdmin = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleOkClick = async () => {
    try {
      const response = await axios.post(`http://localhost:9003/petex/forgetPassword/${email}?password=Sarfraz@12345`);
      if (response.status === 200 && response.data === 'valid') {
        // Navigate to ConfirmNewPassword page
        navigate('/confirmnewpassword');
      } else {
        setErrorMessage('Email entered is wrong! Please try another.');
      }
    } catch (error) {
      console.error("Error checking email:", error);
      if (error.response && error.response.status === 400) {
        setErrorMessage('Email entered is wrong! Please try another.');
      } else {
        setErrorMessage('Error checking email. Please try again later.');
      }
    }
  };

  return (
    <div className="container">
      <h2>Enter Your Email</h2>
      <div className="input-container">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleOkClick}>OK</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ForgetAdmin;
