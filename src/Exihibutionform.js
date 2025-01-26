import React, { useState } from "react";

function Exhubutionform() {
  const [formData, setFormData] = useState({
    petName: "",
    petBreed: "",
    companyName: "",
    email: "",
    mobile: "",
    bookingType: "B2C", // Default value for booking type
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' }); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      window.location.assign("./Shows")
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Regular expression for letters and spaces only
    const lettersAndSpacesRegex = /^[A-Za-z\s]+$/;

    // Validate pet name
    if (!formData.petName || !lettersAndSpacesRegex.test(formData.petName.trim())) {
      errors.petName = "Pet Name must contain only letters";
      isValid = false;
    }

    // Validate pet breed
    if (!formData.petBreed || !lettersAndSpacesRegex.test(formData.petBreed.trim())) {
      errors.petBreed = "Pet Breed must contain only letters";
      isValid = false;
    }

    // Validate company name
    if (!formData.companyName || !lettersAndSpacesRegex.test(formData.companyName.trim())) {
      errors.companyName = "Company Name must contain only letters";
      isValid = false;
    }

    // Validate email
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    // Validate mobile
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile.trim())) {
      errors.mobile = "Mobile must contain 10 digits";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <>
    <style>
      {
        `
        .blue{
          background-image: url(https://storage.googleapis.com/pai-images/f48fa6581049421db37a41a576f26227.jpeg);
          background-size: cover;
          background-position: right;
          background-repeat: no-repeat;
          height: 125vh;
          
      }
      
      .overbey{
          background-color: rgb(236, 235, 250);
      }
      
        `
      }
    </style>
      <div className="blue" style={{ marginLeft : "0%"}}>
        <div className="overbey">
          <div className="show" style={{ marginLeft: "20%", color: "blue" }}>
            <p style={{ marginTop: "0%", fontWeight: "bold" }}>
              Ready for the 7th edition of PETEX which is scheduled to be held On April : 
            </p>
          </div>
        </div>
        <div className="font-center" style={{ display: 'flex', marginLeft: "14%", marginTop: "5%" }}>
        
        </div>

        <div className="out" style={{ marginLeft: "10%", marginTop: "1%", width: "60%", border : "2px ", color : "white" }}>
          <form onSubmit={handleSubmit}>
            <div className="fun">
              <p><label htmlFor="petName" className="maven">Pet Name:</label></p>
              <input type="text" className="jeevan" id="petName" name="petName" placeholder="Enter Your Pet Name" value={formData.petName} onChange={handleInputChange} style={ { width : "60%"}} />
              {formErrors.petName && <div className="text-red-500" style={{ color : 'red'}}>{formErrors.petName}</div>}
            </div>
            <div className="lucy">
              <p><label htmlFor="petBreed" className="Raone">Pet Breed:</label></p>
              <input type="text" className="Hulk" id="petBreed" name="petBreed" placeholder="Enter Your Pet Breed" value={formData.petBreed} onChange={handleInputChange} style={ { width : "60%"}} />
              {formErrors.petBreed && <div className="500" style={{ color : 'red'}}>{formErrors.petBreed}</div>}
            </div>
            <div className="lola">
              <p><label htmlFor="companyName" className="nancy">Company Name:</label></p>
              <input type="text" className="nono" id="companyName" name="companyName" placeholder="Enter Your Company Name" value={formData.companyName} onChange={handleInputChange} style={ { width : "60%"}} />
              {formErrors.companyName && <div className="500" style={{ color : 'red'}}>{formErrors.companyName}</div>}
            </div>
            <div className="how">
              <p><label htmlFor="email" className="f2">Email:</label></p>
              <input type="email" className="f3" id="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleInputChange} style={ { width : "60%", height : "4vh"}} />
              {formErrors.email && <div className="500" style={{ color : 'red'}}>{formErrors.email}</div>}
            </div>
            <div className="ph">
              <p><label htmlFor="mobile" className="phone">Mobile:</label></p>
              <input type="text" className="custom-form-control" id="mobile" name="mobile" placeholder="Enter Your Mobile NUmber" value={formData.mobile} onChange={handleInputChange} style={ { width : "60%"}} />
              {formErrors.mobile && <div className="500" style={{ color : 'red'}}>{formErrors.mobile}</div>}
            </div>
            <div className="type">
              <p><label htmlFor="bookingType" className="ctype">Type of Booking:</label></p>
              <select className="cb" id="bookingType" name="bookingType" value={formData.bookingType} onChange={handleInputChange} style={ { width : "60%"}}>
                <option value="">Select booking type</option>
                <option value="B2C">B2C</option>
                <option value="B2B">B2B</option>
              </select>
            </div>
            <br></br>
            <button className="mba" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Exhubutionform;
