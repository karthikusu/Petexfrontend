import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import "./Addrestable.css"
import axios from 'axios';
import Image from './images/DogDog.jpg';

const Addrestable = () => {
    const [newErrors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        address: '',
        houseno:'',
        area:'',
        landMark: '',
        contact: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const navigate = useNavigate();
   
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        const addressRegex = /^[a-zA-Z0-9\s,.'-:/]+$/;
        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        } else if (!addressRegex.test(formData.address)) {
            newErrors.address = "Invalid characters in the address";
        }

        const housenoRegex = /^\d+$/;
        if (!formData.houseno.trim()) {
            newErrors.houseno = "House No is required";
        } else if (!housenoRegex.test(formData.houseno)) {
            newErrors.houseno = "Invalid House No";
        }

        const areaRegex = /^[a-zA-Z]+$/;
        if (!formData.area.trim()) {
            newErrors.area = "Area Name is required";
        } else if (!areaRegex.test(formData.area)) {
            newErrors.area = "Area Name should contain only letters and no spaces (a-z, A-Z)";
        }

        const landMarkRegex = /^[a-zA-Z\s]+$/;
        if (!formData.landMark.trim()) {
            newErrors.landMark = "Land mark is required";
        } else if (!landMarkRegex.test(formData.landMark)) {
            newErrors.landMark = "Land mark should contain only letters and spaces (a-z, A-Z)";
        }

        const contactRegex = /^\d{10}$/;
        if (!formData.contact.trim()) {
            newErrors.contact = "Contact is required";
        } else if (!contactRegex.test(formData.contact)) {
            newErrors.contact = "Invalid Contact Number";
        }

        setErrors(newErrors);
  
    
      if (Object.keys(newErrors).length === 0) {
          alert("Form submitted successfully");
  
        
        //   setFormData({
        //     address: '',
        //     houseno: '',
        //     area: '',
        //     landMark: '',
        //     contact: '',
        //     });
        
        navigate("/Payment");

        
           axios.post(`http://localhost:9034/save`, formData)
              .then(response => {
                console.log("---"+formData)
                  console.log('Form submitted successfully:', response.data);
              })
              .catch(error => {
                  console.error('Error saving data:', error);
                  console.log('Axios Response:', error.response);
              });
      }
    };

    return(
        <>
            <div className="adres">
                        <div className="forminer" style={{background:`url(${Image})`, height:"115vh", position:"absolute", width:"84%", backgroundSize:"cover"}}>
                            <form className="forst" onSubmit={handleFormSubmit} style={{width:"40%", marginLeft:"10%",marginTop:"5%",  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",position:"absolute"}}>
                                <h4 style={{ textAlign:'center',fontSize:'26px', color:'white'}}>Address Table</h4>
                                <p><label className="ad_lables" style={{color:"white", marginLeft:"5%", fontSize:"18px"}}>Address:</label></p>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your address"
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    style={{width:"90%", marginLeft:"5%"}}
                                                />
                                                {newErrors.address && <span className='error-message'>{newErrors.address}</span>}
                                <div>
                                <p><label className="ad_lables" style={{color:"white", marginLeft:"5%", fontSize:"18px"}}>House No:</label></p>
                                                <input
                                                    type="number"
                                                    id="houseno"
                                                    name="houseno"
                                                    placeholder="Enter your House No"
                                                    value={formData.houseno}
                                                    onChange={handleInputChange}
                                                    style={{width:"90%", marginLeft:"5%"}}
                                                />
                                                {newErrors.houseno && <span className="error-message">{newErrors.houseno}</span>}
                                                </div>
                                <p><label className="ad_lables" style={{color:"white", marginLeft:"5%", fontSize:"18px"}}>Area:</label></p>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your Area"
                                                    name="area"
                                                    value={formData.area}
                                                    onChange={handleInputChange}
                                                    style={{width:"90%", marginLeft:"5%"}}
                                                />
                                                {newErrors.area && <span className='error-message'>{newErrors.area}</span>}
                                <p><label className="ad_lables" style={{color:"white", marginLeft:"5%", fontSize:"18px"}}>Land Mark:</label></p>
                                                <input
                                                    type="text"
                                                    placeholder="Enter land mark"
                                                    name="landMark"
                                                    value={formData.landMark}
                                                    onChange={handleInputChange}
                                                    style={{width:"90%", marginLeft:"5%"}}
                                                />
                                                {newErrors.landMark && <span className='error-message'>{newErrors.landMark}</span>}
                                <p><label className="ad_lables" style={{color:"white", marginLeft:"5%", fontSize:"18px"}}>Contact :</label></p>
                                                <input
                                                    type="number"
                                                    placeholder="Enter contact number here"
                                                    name="contact"
                                                    value={formData.contact}
                                                    onChange={handleInputChange}
                                                    style={{width:"90%", marginLeft:"5%"}}
                                                />
                                                {newErrors.contact && <span className='error-message'>{newErrors.contact}</span>}
                                          
                                        <div>
                                            <button type="submit" style={{marginLeft:"5%", marginTop:"2%"}}>Submit</button><br/>
                                        </div>
                            </form>
                        </div>
                    </div>
                
          
        </>
    )
}

export default Addrestable;
