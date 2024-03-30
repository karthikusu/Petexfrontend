import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import "./Addrestable.css"
import axios from 'axios';

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
                        <div className="forminer">
                            <form className="forst" onSubmit={handleFormSubmit} style={{width:"50%", marginLeft:"10%",marginTop:"5%"}}>
                                <h4 style={{ textAlign:'center',fontSize:'26px', color:'#0947a3'}}>Address Table</h4>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><label className="ad_lables">Address:</label></td>
                                            <td>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your address"
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    style={{width:"90%"}}
                                                />
                                                {newErrors.address && <span className='error-message'>{newErrors.address}</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label className="ad_lables">House No:</label></td>
                                            <td>
                                                <input
                                                    type="number"
                                                    id="houseno"
                                                    name="houseno"
                                                    placeholder="Enter your House No"
                                                    value={formData.houseno}
                                                    onChange={handleInputChange}
                                                />
                                                {newErrors.houseno && <span className="error-message">{newErrors.houseno}</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label className="ad_lables">Area:</label></td>
                                            <td>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your Area"
                                                    name="area"
                                                    value={formData.area}
                                                    onChange={handleInputChange}
                                                />
                                                {newErrors.area && <span className='error-message'>{newErrors.area}</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label className="ad_lables">Land Mark:</label></td>
                                            <td>
                                                <input
                                                    type="text"
                                                    placeholder="Enter land mark"
                                                    name="landMark"
                                                    value={formData.landMark}
                                                    onChange={handleInputChange}
                                                />
                                                {newErrors.landMark && <span className='error-message'>{newErrors.landMark}</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label className="ad_lables">Contact :</label></td>
                                            <td>
                                                <input
                                                    type="number"
                                                    placeholder="Enter contact number here"
                                                    name="contact"
                                                    value={formData.contact}
                                                    onChange={handleInputChange}
                                                />
                                                {newErrors.contact && <span className='error-message'>{newErrors.contact}</span>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <button type="submit">Submit</button><br/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                
          
        </>
    )
}

export default Addrestable;
