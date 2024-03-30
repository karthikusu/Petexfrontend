import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import "./BookNow.css"
import BG from './BirdBG.jpg';


const BookNow = () => {
  const [newErrors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhno: '',
    breedName: '',
    date: '',
    time: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    const customerNameRegex = /^[a-zA-Z]+(\.[a-zA-Z]+)?( [a-zA-Z]+)?$/;
    if (!formData.customerName.trim()) {
      newErrors.customerName = "Name is required";
    } else if (!customerNameRegex.test(formData.customerName)) {
      newErrors.customerName = "Name should only contain letters (a-zA-Z)";
    }

    if (!formData.customerEmail.trim()) {
      newErrors.customerEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.customerEmail)) {
      newErrors.customerEmail = "Email is not valid";
    }

    const customerPhnoRegex = /^[6-9]\d{9}$/;
    if (!formData.customerPhno.trim()) {
      newErrors.customerPhno = "Enter your valid mobile number";
    } else if (!customerPhnoRegex.test(formData.customerPhno)) {
      newErrors.customerPhno = "Mobile number should be in 10 digits and start with 6, 7, 8, or 9";
    }

    const breedNameRegex = /^[a-zA-Z]+(\.[a-zA-Z]+)?( [a-zA-Z]+)?$/;
    if (!formData.breedName.trim()) {
      newErrors.breedName = "Breedname is required";
    } else if (!breedNameRegex.test(formData.breedName)) {
      newErrors.breedName = "Name should only contain letters (a-zA-Z)";
    }

    if (!formData.date.trim()) {
      newErrors.date = "date is required";
    }

    if (!formData.time.trim()) {
      newErrors.time = "Time is required";
    }

    const descriptionRegex = /^[a-zA-Z0-9\s,.'-]+$/;
    if (!formData.description.trim()) {
      newErrors.description = "Enter Description Name ";
    } else if (!descriptionRegex.test(formData.description)) {
      newErrors.description = "Enter Description here";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      if (!userDetails || !userDetails.userId) {
        console.error('User details not found');
        return;
      }

      const userId = userDetails.userId;

      axios.post(`http://localhost:9035/booknow/save/${userId}`, formData)
        .then(response => {
          alert("Form submitted successfully");
          console.log('Form submitted successfully:', formData);
          setFormData({
            customerName: '',
            customerEmail: '',
            customerPhno: '',
            breedName: '',
            date: '',
            time: '',
            description: '',
          });
        })
        .catch(error => {
          console.error('Error saving data:', error);
        });
    }
  };

  return (
    <center>
    <div className="BookNow_card" style={{ backgroundImage:`url(${BG})`, backgroundSize:"cover", position:"absolute", width:"100%", height:"120vh"}} >
      <div className="BookNow_cb1">
        <form onSubmit={handleFormSubmit} style={{width:"50%", marginTop:"5%"}}>
          <table>
            <thead>
              <tr>
                <th colSpan={2} style={{backgroundColor:"transparent"}}>
                  <h1 className='BookNow_h1' style={{textAlign:"center"}}>Book Now</h1>
                </th>
              </tr>
            </thead>
            <tbody>
         
            <tr style={{backgroundColor:"transparent"}}>
                <td>
                  <label htmlFor="customerName">Name:</label>
                </td>
                <td>
                  <input
                  className='BookNow_ininput'
                  type="text"
                  placeholder='Enter your name'
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  style={{width:"90%", backgroundColor:"transparent", border:"transparent"}}
                  /> 
                  {newErrors.customerName&& <span className="error-message" >{newErrors.customerName}</span>}
                  
                </td> 
              </tr>

              <tr style={{backgroundColor:"transparent"}}>
                <td>
                  <label htmlFor="customerEmail">Customer Email:</label>
                </td>
                <td>
                  <input
                    type="email"
                    className='BookNow_ininput'
                    id="customerEmail"
                    name="customerEmail"
                    value={formData.customerEmail}
                    onChange={handleInputChange}
                    placeholder="Enter Customer email"
                    style={{width:"90%",  backgroundColor:"transparent", border:"transparent"}}
                    /> 
                    {newErrors.customerEmail&& <span className="error-message">{newErrors.customerEmail}</span>}
                  </td> </tr>
              <tr style={{backgroundColor:"transparent"}}>
                <td>
                  <label htmlFor="customerPhno">Contact:</label>
                </td>
                <td>
                  <input
                  className='BookNow_ininput'
                    type="number"
                    id="customerPhno"
                    name="customerPhno"
                    placeholder="Enter your Mobile Number"
                    value={formData.customerPhno}
                    onChange={handleInputChange}
                    maxLength="10"
                    style={{width:"90%", backgroundColor:"transparent", border:"transparent"}}
                  />
                  
                    {newErrors.customerPhno&& <span className="error-message">{newErrors.customerPhno}</span>}
                  </td> </tr>
              <tr style={{backgroundColor:"transparent"}}>
                <td>
                  <label htmlFor="customerName">Breed:</label>
                </td>
                <td>
                  <input
                  className='BookNow_ininput'
                    type="text"
                    id="breedName"
                    name="breedName"
                    value={formData.breedName}
                    onChange={handleInputChange}
                    placeholder="Enter breed name"
                    minLength={4}
                    style={{width:"90%", backgroundColor:"transparent", border:"transparent"}}
                  />
                  
                  {newErrors.breedName&& <span className="error-message">{newErrors.breedName}</span>}
                </td> </tr>
              <tr style={{backgroundColor:"transparent"}}>
                <td>
                  <label htmlFor="date">Date:</label>
                </td>
                <td>
                  <input
                  className='BookNow_ininput'
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    style={{width:"90%", backgroundColor:"transparent", border:"transparent"}}
                    />
                  
                    {newErrors.date&& <span className="error-message">{newErrors.date}</span>}
                  </td> </tr>
              <tr style={{backgroundColor:"transparent"}}>
                <td>
                  <label htmlFor="time">Time:</label>
                </td>
                <td>
                  <input
                  className='BookNow_ininput'
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    style={{width:"90%", backgroundColor:"transparent", border:"transparent"}}
                    />
                  
                    {newErrors.time&& <span className="error-message">{newErrors.time}</span>}
                  </td> </tr>
              <tr style={{backgroundColor:"transparent"}}>
                <td>
                  <label htmlFor="description">Description:</label>
                </td>
                <td>
                  <input
                  className='BookNow_ininput'
                    type="text-area"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter the description"
                    style={{width:"90%", backgroundColor:"transparent", border:"transparent"}}
                    />
                  
                    {newErrors.description&& <span className="error-message">{newErrors.description}</span>}
                  </td> </tr>
              <tr style={{backgroundColor:"transparent"}}>
                <td></td>
                <td>
                  <div className="wrap" style={{ marginTop:'20px'}}>
                    <button className='BookNow_custom-button' type="submit">Submit</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>  
    </center>
  );
};

export default BookNow;
