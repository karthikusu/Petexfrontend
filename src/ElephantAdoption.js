import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Adoption.css";
import elephant from './Elephantbg.jpg';

function CamelAdoption() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    emailaddress: "",
    petname: "",
    password: "",
    contactNumber: "",
    age: "",
    occuption: "Others",
    city: "",
    error: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, emailaddress, petname, password, contactNumber, age, occuption, city } = formData;

    // Validate fields before submission
    const errors = {};
    if (!userName.match(/^[a-zA-Z ]+$/)) {
      errors.userName = "Username should contain only letters and spaces.";
    }
    if (!emailaddress.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.emailaddress = "Invalid email address format.";
    }
    if (!petname.match(/^[a-zA-Z ]+$/)) {
      errors.petname = "Pet name should contain only letters and spaces.";
    }
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
      errors.password = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one digit.";
    }
    if (!contactNumber.match(/^[6-9]\d{9}$/)) {
      errors.contactNumber = "Mobile number should start with 6, 7, 8, or 9 and be 10 digits long.";
    }
    if (isNaN(age) || age < 1 || age > 110) {
      errors.age = "Age should be between 1 and 110.";
    }

    if (Object.keys(errors).length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        error: "Please correct the errors in the form.",
        ...errors,
      }));
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, emailaddress, petname, password, contactNumber, age, occuption, city }),
    };

    try {
      const response = await fetch('http://localhost:9008/petex/save', requestOptions);
      if (!response.ok) {
        throw new Error('Failed to save data');
      }

      setFormData({
        userName: "",
        emailaddress: "",
        petname: "",
        password: "",
        contactNumber: "",
        age: "",
        occuption: "Others",
        city: "",
        error: "",
      });

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/Payment");
      }, 2000);
    } catch (error) {
      setFormData((prevData) => ({
        ...prevData,
        error: error.message || "Failed to submit the form.",
      }));
    }
  };

  return (
    <>
      <div className="adoption-main" style={{backgroundImage:`url(${elephant})`}}>
        <br />
        <form className="adoption-form" style={{ marginLeft: "30%" }} onSubmit={handleSubmit}>
          <h2 className="form-heading" style={{ color: "Black" }}>Adopt Me</h2>
          <div className="Adopt">
            <div className="form-group" style={{color:"black"}}>
              <p><label htmlFor="userName" className="form-label" style={{color:"black"}}>User Name:</label></p>
              <input type="text" className="form-control" id="userName"  onChange={handleChange} style={{ width: "100%" }} />
              {formData.userName && <p style={{ color: "red" }}>{formData.userName}</p>}
            </div>

            <div className="form-group">
              <p><label htmlFor="emailaddress" className="form-label" style={{color:"black"}}>Email address:</label></p>
              <input type="email" className="form-control" id="emailaddress"  onChange={handleChange} style={{ width: "100%" }} />
              {formData.emailaddress && <p style={{ color: "red" }}>{formData.emailaddress}</p>}
            </div>

            <div className="form-group">
              <p><label htmlFor="petname" className="form-label" style={{color:"black"}}>Pet Name:</label></p>
              <input type="text" className="form-control" id="petname"  onChange={handleChange} style={{ width: "100%" }} />
              {formData.petname && <p style={{ color: "red" }}>{formData.petname}</p>}
            </div>

            <div className="form-group">
              <p><label htmlFor="password" className="form-label" style={{color:"black"}}>Password:</label></p>
              <input type="password" className="form-control" id="password"  onChange={handleChange} style={{ width: "100%" }} />
              {formData.password && <p style={{ color: "red" }}>{formData.password}</p>}
            </div>
            <div className="form-group">
              <p><label htmlFor="contactNumber" className="form-label"  style={{color:"black"}}>Contact Number:</label></p>
              <input type="text" className="form-control" id="contactNumber"  onChange={handleChange} style={{ width: "100%" }} />
              {formData.contactNumber && <p style={{ color: "red" }}>{formData.contactNumber}</p>}
            </div>
            <div className="form-group">
              <p><label htmlFor="age" className="form-label" style={{color:"black"}}>Age:</label></p>
              <input type="text" className="form-control" id="age" onChange={handleChange} style={{ width: "100%" }} />
              {formData.age && <p style={{ color: "red" }}>{formData.age}</p>}
            </div>
            <div className="form-group">
              <p><label htmlFor="occuption" className="form-label" style={{color:"black"}}>Occupation:</label></p>
              <select id="occuption" className="form-select" value={formData.occuption} onChange={handleChange}>
                <option>Others</option>
                <option>Salaried</option>
                <option>Self Employed</option>
              </select>
            </div>
            <div className="form-group">
              <p><label htmlFor="city" className="form-label" style={{color:"black"}}>City:</label></p>
              <input type="text" className="form-control" id="city" value={formData.city} onChange={handleChange} style={{ width: "100%" }} />
              {formData.city && <p style={{ color: "red" }}>{formData.city}</p>}
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginLeft: "220px" }}>
              Submit
            </button>

            {formData.error && <p style={{ color: "red", marginTop: "10px" }}>{formData.error}</p>}
          </div>
        </form>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Successfully adopted! Thank you!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CamelAdoption;
