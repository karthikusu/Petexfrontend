import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Navpet from "./Navpet";
import { useNavigate } from "react-router-dom";
import BG2 from './vetdoctorbg.jpg';

function Booklogin() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigate= useNavigate();

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhno: "",
    date: "",
    time: "",
    description: "",
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' }); 
  };

  const handleDateChange = (event) => {
    
    setSelectedDate(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:9004/petex/saves', formData);
        alert('Appointment Booked successfully.');
        navigate('/userhome');
        setFormData({
          customerName: "",
          customerEmail: "",
          customerPhno: "",
          date: "",
          description: "",
        });
        setErrors({});
      } catch (error) {
        console.error('Error occurred:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };


  const validateForm = () => {
    let errors = {};
  
    if (!formData.customerName) {    
      errors.customerName = "fullname is required";   
  }    
  else if (!(/^[a-zA-Z]+ [a-zA-Z]+$/.test(formData.customerName))) {    
      errors.customerName = "fullname is not valid";  
  } 
  
    if (!formData.customerEmail.trim()) {
      errors.customerEmail = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.customerEmail)) {
      errors.customerEmail = "Invalid email format";
    }
  
    if (!formData.customerPhno.trim()) {
      errors.customerPhno = "Contact Number is required";
    } else if (!(/^(0|91)?[6-9][0-9]{9}$/.test(formData.customerPhno))) {    
      
      errors.customerPhno = "Invalid phone number";
    }
  
    if (!selectedDate) {
      errors.date = "Date is required";
    }
  
    if (!formData.time.trim()) {
      errors.time = "Time is required";
    }
  
    if (!formData.description.trim()) {
      errors.description = "Description is required";
    }
  
    setErrors(errors); 
  
    return errors;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US');
  };
  
  
  

  return (
    <>
    <Navpet/>
<div style={{backgroundImage:`url(${BG2})`, height:"750px"}}>
        <h2 className="form-heading" style={{ color: "blue" }}>
          Appointment Form
        </h2>
        <form className="adoption-form" 
        style={{ marginTop: "2%", backgroundColor:"whitesmoke", height:"600px", width:"500px" , marginLeft:"400px"}} onSubmit={handleSubmit}>

        <div className="Adopt">
          <div className="form-group">
            <label htmlFor="username" className="form-label" style={{color:"black"}}>
              User Name:
              <input
                type="text"
                className="form-control"
                name="customerName"
                onChange={handleChange}
                id="username"
                style={{width:"100%"}}
              />
              {errors.customerName && (
                <div className="error-message">{errors.customerName}</div>
              )}
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label" style={{color:"black"}}>
              Email address:
              <input
                type="email"
                className="form-control"
                name="customerEmail"
                onChange={handleChange}
                id="email"
                style={{width:"100%"}}
              />
              {errors.customerEmail && (
                <div className="error-message">{errors.customerEmail}</div>
              )}
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber" className="form-label" style={{color:"black"}}>
              Contact Number:
              <input
                type="text"
                className="form-control"
                name="customerPhno"
                onChange={handleChange}
                id="contactNumber"
                style={{width:"100%"}}
              />
              {errors.customerPhno && (
                <div className="error-message">{errors.customerPhno}</div>
              )}
            </label>
          </div>

          <div>
            <p><label htmlFor="Date" className="form-label" style={{color:"black", marginLeft:"10%"}}>
              Date :</label></p>
              <input
                style={{ width: "78%", height: "5vh", fontSize: "1.5rem" , marginLeft:"10%"}}
                type="date"
                id="datePicker"
                onChange={handleDateChange}
                min={new Date().toISOString().split("T")[0]}
                value={selectedDate}
                
                />


              {errors.date && (
                <div className="error-message">{errors.date}</div>
              )}
            

            <div className="form-group">
             <p><label htmlFor="Time" className="form-label" style={{color:"black"}}>
                Time : </label></p> 
                <select name="time" className="form-select" onChange={handleChange}
                style={{width:"100%"}}
                >
                  
                  <option>Select Timing</option>
                  <option>9:00</option>
                  <option>9:30</option>
                  <option>10:00</option>
                  <option>10:30</option>
                  <option>11:00</option>
                  <option>11:30</option>
                  <option>12:00</option>
                  <option>12:30</option>
                  <option>01:00</option>
                  <option>01:30</option>
                  <option>02:00</option>
                  <option>02:30</option>
                  <option>03:00</option>
                  <option>03:30</option>
                  <option>04:00</option>
                  <option>04:30</option>
                  <option>05:00</option>
                  <option>05:30</option>
                  <option>06:00</option>
                  <option>06:30</option>
                  
                </select>
                {errors.time && (
                  <div className="error-message">{errors.time}</div>
                )}
              
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber" className="form-label" style={{color:"black"}}>
              Description :
              <input
                type="text"
                className="form-control"
                name="description"
                onChange={handleChange}
                style={{ height: "10vh", width:"100%" }}
              />
              {errors.description && (
                <div className="error-message">{errors.description}</div>
              )}
            </label>
          </div>

          <br />
          <br />

          <button type="submit" onClick={onsubmit} className="btn btn-primary"
          style={{marginLeft:"200px", marginTop:"-40%"}}>
            Submit
          </button>
        </div>
      </form>
      </div>
    </>
  );
}

export default Booklogin;
