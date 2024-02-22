import React, { useState } from "react";
import Navpet from "./Navpet";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import "./Adoption.css";
import bird from './BirdBG.jpg';

function Adoption() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    emailaddress: "",
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

  const handleSubmit = async (e) => { // Make handleSubmit asynchronous
    e.preventDefault();
    try {
      // Perform form validations here
      const { userName, emailaddress, contactNumber,occuption, age, city } = formData;
      // Your validations here...

      // Send form data to backend
      await axios.post("http://localhost:9007/petex/save", formData);

      // If successful, show success message and navigate after 2 seconds
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/");
      }, 2000);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
      // Set error state or handle errors accordingly
    }
  };

  return (
    <>
      <Navpet />
      <div className="adoption-main" style={{backgroundImage:`url(${bird})`}}>
        <br />
        <form className="adoption-form" style={{ marginLeft: "30%" }} onSubmit={handleSubmit}>
          <h2 className="form-heading" style={{ color: "black", fontFamily:"sans-serif" }}>ADOPT ME</h2>
          <div className="Adopt">
            <div className="form-group">
              <p><label htmlFor="userName" className="form-label" style={{color:"black"}}>User Name:</label></p>
              <input type="text" className="form-control" id="userName" value={formData.userName} onChange={handleChange} style={{ width: "100%" }} />
            </div>

            <div className="form-group">
              <p><label htmlFor="email" className="form-label" style={{color:"black"}}>Email address:</label></p>
              <input type="email" className="form-control" id="email" value={formData.emailaddress} onChange={handleChange} style={{ width: "100%" }} />
            </div>

            <div className="form-group">
              <p><label htmlFor="contactNumber" className="form-label" style={{color:"black"}}>Contact Number:</label></p>
              <input type="text" className="form-control" id="contactNumber" value={formData.contactNumber} onChange={handleChange} style={{ width: "100%" }} />
            </div>
            <div className="form-group">
              <p><label htmlFor="age" className="form-label" style={{color:"black"}}>Age:</label></p>
              <input type="text" className="form-control" id="age" value={formData.age} onChange={handleChange} style={{ width: "100%" }} />
            </div>
            <div className="form-group">
              <p><label htmlFor="occupation" className="form-label" style={{color:"black"}}>Occupation:</label></p>
              <select id="occupation" className="form-select" value={formData.occupation} onChange={handleChange}>
                <option>Others</option>
                <option>Salaried</option>
                <option>Self Employed</option>
              </select>
            </div>
            <div className="form-group">
              <p><label htmlFor="city" className="form-label" style={{color:"black"}}>City:</label></p>
              <input type="text" className="form-control" id="city" value={formData.city} onChange={handleChange} style={{ width: "100%" }} />
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

export default Adoption;
