import React, { useState } from "react";
import Commonnav from './CommonNav';

function Sales() {
  const [formData, setFormData] = useState({
    petId: '',
    petType: '',
    petname: '',
    gender: '',
    weight: '',
    height: '',
    color: '',
    email: '',
    phno: '',
    address: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      fetch("http://localhost:9033/petex/sales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then((response) => {
          if (response.ok) {
            console.log("Data submitted successfully!");
            // Optionally, clear the form after successful submission
            setFormData({
              petId: "",
              petType: "",
              petname: "",
              gender: "",
              weight: "",
              height: "",
              color: "",
              email: "",
              phno: "",
              address: ""
            });
          } else {
            throw new Error("Failed to submit data");
          }
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
          // Handle error (e.g., display error message to user)
        });
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validation logic
    if (!formData.petId.trim()) {
      errors.petId = 'Please enter Pet ID';
    }
    if (!formData.petType.trim()) {
      errors.petType = 'Please enter Pet Type';
    }
    if (!formData.petname.trim()) {
      errors.petname = 'Please enter Pet Name';
    }
    if (!formData.gender.trim()) {
      errors.gender = 'Please enter Gender';
    }
    if (!formData.weight.trim()) {
      errors.weight = 'Please enter Pet Weight';
    } else if (!/^\d+(\.\d+)?$/.test(formData.weight.trim())) {
      errors.weight = 'Please enter a valid number for Pet Weight';
    }
    if (!formData.height.trim()) {
      errors.height = 'Please enter Pet Height';
    } else if (!/^\d+(\.\d+)?$/.test(formData.height.trim())) {
      errors.height = 'Please enter a valid number for Pet Height';
    }
    if (!formData.color.trim()) {
      errors.color = 'Please enter Pet Color';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please enter Email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid Email';
    }
    if (!formData.phno.trim()) {
      errors.phno = 'Please enter Mobile';
    } else if (!/^[6-9]\d{9}$/.test(formData.phno.trim())) {
      errors.phno = 'Mobile number must start with 6, 7, 8, or 9 and must be 10 digits';
    }
    if (!formData.address.trim()) {
      errors.address = 'Please enter Address';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
    <Commonnav/>
      <div className="bodybg" style={{backgroundColor:"darkgrey", position:"absolute", width:"100%"}}>
        <div className="Sales" style={{ marginLeft: "30%", border: "1px ", width: "40%", marginTop: "1%", backgroundColor:"lawngreen"}}>
          <div style={{backgroundColor:"whitesmoke", width:"100%"}}>
            <form onSubmit={handleFormSubmit}>
              <div className="Repoet" >
                <h2 style={{textAlign:"center"}}>Sale Here</h2>
                <p><label htmlFor="petId" className="fbel" style={{marginLeft:"5%"}}>Pet Id :</label></p>
                <input
                  type="text"
                  className="fotrol"
                  id="petId"
                  name="petId"
                  value={formData.petId}
                  onChange={handleInputChange}
                  style={{ width: "90%", marginLeft:"5%" }}
                />
                <br />
                {formErrors.petId && <span className="error" style={{ color: "red" }}>{formErrors.petId}</span>}
              </div>
              <div>
                <p><label htmlFor="petType" className="form-labe2" style={{marginLeft:"5%"}}>Pet Type :</label></p>
                <input
                  type="text"
                  className="forol"
                  id="petType"
                  name="petType"
                  value={formData.petType}
                  onChange={handleInputChange}
                  style={{ width: "90%", marginLeft:"5%" }}
                />
                <br />
                {formErrors.petType && <span className="error" style={{ color: "red" }}>{formErrors.petType}</span>}
              </div>
              <div>
                <p><label htmlFor="petname" className="fobe" style={{marginLeft:"5%"}}>Pet Name :</label></p>
                <input
                  type="text"
                  className="forol"
                  id="petname"
                  name="petname"
                  value={formData.petname}
                  onChange={handleInputChange}
                  style={{ width: "90%", marginLeft:"5%" }}       
                />
                <br />
                {formErrors.petname && <span className="error" style={{ color: "red" }}>{formErrors.petname}</span>}
              </div>
              <div>
                <p><label htmlFor="gender" className="fob" style={{marginLeft:"5%"}}>Gender :</label></p>
                <input
                  type="text"
                  className="forl"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  style={{ width: "90%", marginLeft:"5%" }}
                />
                <br />
                {formErrors.gender && <span className="error" style={{ color: "red" }}>{formErrors.gender}</span>}
              </div>
              <div>
                <p><label htmlFor="height" className="fore" style={{marginLeft:"5%"}}>Height :</label></p>
                <input
                  type="text"
                  className="forrol"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  style={{ width: "90%", marginLeft:"5%" }}
                />
                <br />
                {formErrors.height && <span className="error" style={{ color: "red" }}>{formErrors.height}</span>}
              </div>
              <div>
                <p><label htmlFor="weight" className="fom-la" style={{marginLeft:"5%"}}>Weight :</label></p>
                <input
                  type="text"
                  className="forol"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  style={{ width: "90%", marginLeft:"5%" }}
                />
                <br />
                {formErrors.weight && <span className="error" style={{ color: "red" }}>{formErrors.weight}</span>}
              </div>
              <div>
                <p><label htmlFor="color" className="forlb" style={{marginLeft:"5%"}}>Color :</label></p>
                <input
                  type="text"
                  className="formol"
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleInputChange}
                  style={{ width: "90%", marginLeft:"5%" }}
                />
                <br />
                {formErrors.color && <span className="error" style={{ color: "red" }}>{formErrors.color}</span>}
              </div>
              <div>
                <p><label htmlFor="email" className="foabe" style={{marginLeft:"5%"}}>Email :</label></p>
                <input
                  type="text"
                  className="forcntl"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{ width: "90%", marginLeft:"5%" }}
                />
                <br />
                {formErrors.email && <span className="error" style={{ color: "red" }}>{formErrors.email}</span>}
              </div>
              <div>
                <p><label htmlFor="phno" className="fo-la" style={{marginLeft:"5%"}}>Phone Number :</label></p>
                <input
                  type="text"
                  className="for-cl"
                  id="phno"
                  name="phno"
                  value={formData.phno}
                  onChange={handleInputChange}
                  style={{ width: "90%", marginLeft:"5%" }}
                />
                <br />
                {formErrors.phno && <span className="error" style={{ color: "red" }}>{formErrors.phno}</span>}
              </div>
              <div>
                <p><label htmlFor="address" className="fo-la" style={{marginLeft:"5%"}}>Address :</label></p>
                <textarea
                  className="for-cl"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  style={{ width: "90%", marginLeft:"5%" }}
                />
                <br />
                {formErrors.address && <span className="error" style={{ color: "red" }}>{formErrors.address}</span>}
              </div>
              <br />
              <button type="submit" className="btn btn-primary1" style={{marginLeft:"40%"}}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sales;
