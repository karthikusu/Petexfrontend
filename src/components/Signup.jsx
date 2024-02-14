import React, { useState } from "react";
import Navbar from "./Navbar";
import './Signup.css';
import { useNavigate } from 'react-router-dom';

import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    petType: "",
    petName: "",
    breed: "",
    species: "",
    age: "",
    gender: "",
    vaccinated: "",
    weight: "",
    colour: "",
    height: "",
    diseases: "",
    userName: "",
    mobileNumber: "",
    alternativeNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    
    // Validate the field and update errors state
    const validationErrors = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationErrors[name]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate the form data
    const validationErrors = validateForm(formData);
  
    // If there are no validation errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Send a POST request to the backend API
        const response = await axios.post('/users/signup', formData);
        
        // Display success message
        alert('You have been successfully registered.');
  
        // Clear form data
        setFormData({
          petType: '',
          petName: '',
          breed: '',
          species: '',
          age: '',
          gender: '',
          vaccinated: '',
          weight: '',
          colour: '',
          height: '',
          diseases: '',
          userName: '',
          mobileNumber: '',
          alternativeNumber: '',
          email: '',
          password: '',
          confirmPassword: '',
          address: ''
        });
  
        // Clear validation errors
        setErrors({});
        
        // Navigate to the signin page
        navigate('/signin');
      } catch (error) {
        // Handle errors if any
        console.error('Error occurred:', error);
      }
    } else {
      
      setErrors(validationErrors);
    }

  

  };
  

  const validateForm = (data) => {
    let errors = {};

    
    if (!data.petType) {
      errors.petType = "Pet Type is required";
    }
    if (!data.petName) {
      errors.petName = "Pet Name is required";
    }
    if (!data.breed) {
      errors.breed = "Breed is required";
    }
    if (!data.species) {
      errors.species = "Species is required";
    }
    if (!data.age) {
      errors.age = "Age is required";
    }
    if (!data.gender) {
      errors.gender = "Gender is required";
    }
    if (!data.vaccinated) {
      errors.vaccinated = "Vaccination status is required";
    }
    if (!data.weight) {
      errors.weight = "Weight is required";
    }
    if (!data.colour) {
      errors.colour = "Colour is required";
    }
    if (!data.height) {
      errors.height = "Height is required";
    }
    if (!data.diseases) {
      errors.diseases = "Disease status is required";
    }
    if (!data.userName) {
      errors.userName = "User Name is required";
    }
    if (!data.mobileNumber) {
      errors.mobileNumber = "Mobile Number is required";
    } else if (!/^\d+$/.test(data.mobileNumber)) {
      errors.mobileNumber = "Mobile Number must contain only digits";
    }
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid";
    }

    if (!data.password) {    
      errors.password = "password is required";    
    }    
    else if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(data.password))) {    
      errors.password = "7 to 15 characters at least one numeric digit and a special character";    
    }
  
  
    if (!data.confirmPassword) {    
      errors.confirmPassword = "confirm password is required";    
    }    
    else if (data.password !== data.confirmPassword) {    
      errors.confirmPassword = "password and confirm password are not the same";    
    }    

    return errors;
  };

  const validateField = (name, value) => {
    let fieldErrors = {};
    switch (name) {
      case 'petType':
        if (!value) {
          fieldErrors.petType = 'Pet Type is required';
        }
        break;
      case 'petName':
        if (!value) {
          fieldErrors.petName = 'Pet Name is required';
        }
        break;
      case 'breed':
        if (!value) {
          fieldErrors.breed = 'Breed is required';
        }
        break;
      case 'species':
        if (!value) {
          fieldErrors.species = 'Species is required';
        }
        break;
      case 'age':
        if (!value) {
          fieldErrors.age = 'Age is required';
        }
        break;
      case 'gender':
        if (!value) {
          fieldErrors.gender = 'Gender is required';
        }
        break;
      case 'vaccinated':
        if (!value) {
          fieldErrors.vaccinated = 'Vaccination status is required';
        }
        break;
      case 'weight':
        if (!value) {
          fieldErrors.weight = 'Weight is required';
        }
        break;
      case 'colour':
        if (!value) {
          fieldErrors.colour = 'Colour is required';
        }
        break;
      case 'height':
        if (!value) {
          fieldErrors.height = 'Height is required';
        }
        break;
      case 'diseases':
        if (!value) {
          fieldErrors.diseases = 'Disease status is required';
        }
        break;
      case 'userName':
        if (!value) {
          fieldErrors.userName = 'User Name is required';
        }
        break;
      case 'mobileNumber':
        if (!value) {
          fieldErrors.mobileNumber = 'Mobile Number is required';
        } else if (!/^\d+$/.test(value)) {
          fieldErrors.mobileNumber = 'Mobile Number must contain only digits';
        }
        break;
      case 'email':
        if (!value) {
          fieldErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          fieldErrors.email = 'Email address is invalid';
        }
        break;
      case 'password':
        if (!value) {    
          fieldErrors.password = 'Password is required';    
        }    
        else if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(value))) {    
          fieldErrors.password = 'Password must be 7 to 15 characters with at least one numeric digit and a special character';    
        }
        break;
      case 'confirmPassword':
        if (!value) {    
          fieldErrors.confirmPassword = 'Confirm Password is required';    
        }    
        else if (formData.password !== value) {    
          fieldErrors.confirmPassword = 'Passwords do not match';    
        }    
        break;
      default:
        break;
    }
    
    return fieldErrors;
  };

  return (
    <>
      <div className="Image-form">
        <form onSubmit={handleSubmit}>
          <h2>Signup Here</h2>
          <div style={{ display: "flex" }}>
            <div className="mb-3" style={{ width: "40%" }}>
              <label htmlFor="disabledSelect" className="form-label">PetType :</label>
              <select id="disabledSelect" className="form-select" name="petType" onChange={handleChange}>
                <option>Select</option>
                <option>Dogs</option>
                <option>Horses</option>
                <option>Birds</option>
                <option>Cats</option>
                <option>Elephants</option>
              </select>
              {errors.petType && <div className="text-danger">{errors.petType}</div>}
            </div>

            <div className="mb-3" style={{ marginLeft: "15%", width: "45%" }}>
              <label htmlFor="exampleInputPetname" className="form-label">Pet Name :</label>
              <input type="text" className="form-control" id="exampleInputPetname" name="petName" onChange={handleChange} />
              {errors.petName && <div className="text-danger">{errors.petName}</div>}
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="mb-3" style={{ width: "40%" }}>
              <label htmlFor="exampleInputBreed1" className="form-label">Breed :</label>
              <input type="text" className="form-control" id="exampleInputBreed1" name="breed" onChange={handleChange} />
              {errors.breed && <div className="text-danger">{errors.breed}</div>}
            </div>

            <div className="mb-3" style={{ marginLeft: "15%", width: "45%" }}>
              <label htmlFor="exampleInputSpecies1" className="form-label">Species :</label>
              <input type="text" className="form-control" id="exampleInputSpecies1" name="species" onChange={handleChange} />
              {errors.species && <div className="text-danger">{errors.species}</div>}
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="mb-3" style={{ width: "40%" }}>
              <label htmlFor="exampleInputAge1" className="form-label">Age :</label>
              <input type="number" className="form-control" id="exampleInputAge1" name="age" onChange={handleChange} />
              {errors.age && <div className="text-danger">{errors.age}</div>}
            </div>

            <div className="mb-3" style={{ marginLeft: "15%", width: "45%" }}>
              <label htmlFor="disabledSelectGender" className="form-label">Gender :</label>
              <select id="disabledSelectGender" className="form-select" name="gender" onChange={handleChange}>
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              {errors.gender && <div className="text-danger">{errors.gender}</div>}
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="mb-3" style={{ width: "40%" }}>
              <label htmlFor="disabledSelectVaccinated" className="form-label">Vaccinated :</label>
              <select id="disabledSelectVaccinated" className="form-select" name="vaccinated" onChange={handleChange}>
                <option>Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {errors.vaccinated && <div className="text-danger">{errors.vaccinated}</div>}
            </div>

            <div className="mb-3" style={{ marginLeft: "15%", width: "45%" }}>
              <label htmlFor="disabledSelectWeight" className="form-label">Weight :</label>
              <select id="disabledSelectWeight" className="form-select" name="weight" onChange={handleChange}>
                <option>Select</option>
                <option>Heavy</option>
                <option>Medium</option>
                <option>Small</option>
              </select>
              {errors.weight && <div className="text-danger">{errors.weight}</div>}
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="mb-3" style={{ width: "40%" }}>
              <label htmlFor="exampleInputColour1" className="form-label">Colour :</label>
              <input type="text" className="form-control" id="exampleInputColour1" name="colour" onChange={handleChange} />
              {errors.colour && <div className="text-danger">{errors.colour}</div>}
            </div>

            <div className="mb-3" style={{ marginLeft: "15%", width: "45%" }}>
              <label htmlFor="disabledSelectHeight" className="form-label">Height :</label>
              <select id="disabledSelectHeight" className="form-select" name="height" onChange={handleChange}>
                <option>Select</option>
                <option>1</option>
                <option>2</option>
              </select>
              {errors.height && <div className="text-danger">{errors.height}</div>}
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="mb-3" style={{ width: "40%" }}>
              <label htmlFor="disabledSelectDiseases" className="form-label">Diseases :</label>
              <select id="disabledSelectDiseases" className="form-select" name="diseases" onChange={handleChange}>
                <option>Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {errors.diseases && <div className="text-danger">{errors.diseases}</div>}
            </div>

            <div className="mb-3" style={{ marginLeft: "15%", width: "45%" }}>
              <label htmlFor="exampleInputUsername1" className="form-label">User Name :</label>
              <input type="text" className="form-control" id="exampleInputUsername1" name="userName" onChange={handleChange} />
              {errors.userName && <div className="text-danger">{errors.userName}</div>}
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="mb-3" style={{ width: "40%" }}>
              <label htmlFor="exampleInputMobile1" className="form-label">Mobile Number :</label>
              <input type="text" className="form-control" id="exampleInputMobile1" name="mobileNumber" onChange={handleChange} />
              {errors.mobileNumber && <div className="text-danger">{errors.mobileNumber}</div>}
            </div>

            <div className="mb-3" style={{ marginLeft: "15%", width: "45%" }}>
              <label htmlFor="exampleInputAlternative1" className="form-label">Alternative Number :</label>
              <input type="text" className="form-control" id="exampleInputAlternative1" name="alternativeNumber" onChange={handleChange} />
              {errors.alternativeNumber && <div className="text-danger">{errors.alternativeNumber}</div>}
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="mb-3" style={{ width: "40%" }}>
              <label htmlFor="exampleInputEmail1" className="form-label">Email :</label>
              <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={handleChange} />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>

            
            <div className="mb-3" style={{ marginLeft: "15%", width: "45%" }}>
              <label htmlFor="exampleInputPassword1" className="form-label">Password :</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="mb-3" style={{ width: "40%" }}>
              <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password :</label>
              <input type="password" className="form-control" id="exampleInputConfirmPassword1" name="confirmPassword" onChange={handleChange} />
              {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
            </div>

            <div className="mb-3" style={{ marginLeft: "15%", width: "45%" }}>
              <label htmlFor="exampleInputAddress1" className="form-label">Address :</label>
              <textarea className="form-control" id="exampleInputAddress1" name="address" style={{ height: "10vh" }} onChange={handleChange}></textarea>
              {errors.address && <div className="text-danger">{errors.address}</div>}
            </div>
          </div>

          <button type="submit" className="btn btn-primary"onClick={onsubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
