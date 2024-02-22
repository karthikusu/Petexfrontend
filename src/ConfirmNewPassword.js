import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ConfirmNewPasswordStyle.css';

const ConfirmNewPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleConfirmClick = async () => {
    try {
      await axios.post('http://localhost:9003/petex/updatePassword', { email, newPassword });
      // Navigate to adminlogin page after password update
      // For example, you can use useHistory from react-router-dom
      // history.push('/adminlogin');
      window.location.href = '/adminlogin';
    } catch (error) {
      console.error("Error updating password:", error);
      setErrorMessage('Error updating password. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h2>Confirm New Password</h2>
      <div className="input-container">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleConfirmClick}>Confirm</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ConfirmNewPassword;
