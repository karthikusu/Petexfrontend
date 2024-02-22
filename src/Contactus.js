import axios from "axios";
import React, { useState } from "react";
import "./Contactus.css";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:9006/petex/contactus", formData);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        alert("Form submitted successfully");
        // window.alert('Successfully submitted');
      } catch (error) {
        console.log("Error occurred", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.name) {
      errors.name = "Full name is required";
    } else if (!/^[a-zA-Z ]{3,}$/.test(data.name)) {
      errors.name = "Invalid full name";
    }
    

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) {
      errors.email = "Invalid email address";
    }

    if (!data.message) {
      errors.message = "Please enter the message";
    } 
    return errors;
  };

  return (
    <>
      
      <section className="contactus" >
        {/* <h1 > Connect with Us</h1> */}
        <div className="contact-box" >
          <div className="contact-left">
            
            <form onSubmit={handleSubmit} style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.8)", height:"300px", width:"400px", position:""}}>
            <h3 style={{marginTop:"10%", marginLeft:"5%"}}> Send Your Request </h3> 
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  placeholder="Full Name"
                />
                {errors.name && <p style={{ color: "blue" }}>{errors.name}</p>}
              </div>
              <div>
                <input
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="email"
                  style={{marginTop:"5%"}}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>
              <div>
                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  name="message" // Add the name attribute
                  className="message"
                  placeholder="message"
                />
                {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
              </div>
              <button type="submit">
                    Submit
                               </button>
            </form>
          </div>
          </div>
            
        </section>
        </>
    )
}
export default Contactus;
