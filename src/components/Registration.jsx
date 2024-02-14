import React, { useState } from 'react';
import './Registerstyle.css'; // Import CSS file here
import BG2 from '../assets/RBG.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {
  const [petType, setPetType] = useState('');
  const [petname, setPetname] = useState('');
  const [breed, setBreed] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [vaccinated, setVaccinated] = useState('');
  const [weight, setWeight] = useState('');
  const [color, setColor] = useState('');
  const [height, setHeight] = useState('');
  const [disease, setDisease] = useState('');
  const [fullname, setFullname] = useState('');
  const [phno, setPhno] = useState('');
  const [alternativeNumber, setAlternativeNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [city, setCity] = useState('');

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: '' }); // Clear error message when user types in the input field
    switch (name) {
      case 'petType':
        setPetType(value);
        break;
      case 'petname':
        // Validate pet name (only letters)
        if (!/^[a-zA-Z ]*$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only letters are allowed for pet name' });
        }
        setPetname(value);
        break;
      case 'breed':
        // Validate breed (only letters)
        if (!/^[a-zA-Z ]*$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only letters are allowed for breed' });
        }
        setBreed(value);
        break;
      case 'species':
        // Validate species (only letters)
        if (!/^[a-zA-Z ]*$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only letters are allowed for species' });
        }
        setSpecies(value);
        break;
      case 'age':
        // Validate age (only positive integers)
        if (!/^\d+$/.test(value)) {
          setErrors({ ...errors, [name]: 'Age must be a positive integer' });
          return; // Prevent setting the state if validation fails
        }
        setErrors({ ...errors, [name]: '' }); // Clear error if validation passes
        setAge(value); // Set the state for age
        break;
      case 'weight':
        // Validate weight (positive numbers with at most one decimal place)
        if (!/^\d*\.?\d{0,1}$/.test(value)) {
          setErrors({ ...errors, [name]: 'Weight must be a positive number with at most one decimal place' });
          return; // Prevent setting the state if validation fails
        }
        setErrors({ ...errors, [name]: '' }); // Clear error if validation passes
        setWeight(value); // Set the state for weight
        break;
      case 'height':
        // Validate height (positive numbers with at most one decimal place)
        if (!/^\d*\.?\d{0,1}$/.test(value)) {
          setErrors({ ...errors, [name]: 'Height must be a positive number with at most one decimal place' });
          return; // Prevent setting the state if validation fails
        }
        setErrors({ ...errors, [name]: '' }); // Clear error if validation passes
        setHeight(value); // Set the state for height
        break;
      case 'gender':
        setGender(value);
        break;
      case 'vaccinated':
        setVaccinated(value);
        break;
      case 'color':
        // Validate color (only letters)
        if (!/^[a-zA-Z ]*$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only letters are allowed for color' });
        }
        setColor(value);
        break;
      case 'disease':
        setDisease(value);
        break;
      case 'fullname':
        // Validate fullname (only letters)
        if (!/^[a-zA-Z ]*$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only letters are allowed for full name' });
        }
        setFullname(value);
        break;
      case 'phno':
        // Validate phone number (only digits)
        if (!/^\d+$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only digits are allowed for phone number' });
        }
        setPhno(value);
        break;
      case 'alternativeNumber':
        // Validate alternative phone number (only digits)
        if (!/^\d+$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only digits are allowed for alternative phone number' });
        }
        setAlternativeNumber(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'pwd':
        setPwd(value);
        break;
      case 'confirmPwd':
        setConfirmPwd(value);
        break;
      case 'city':
        // Validate city (only letters)
        if (!/^[a-zA-Z ]*$/.test(value)) {
          setErrors({ ...errors, [name]: 'Only letters are allowed for city' });
        }
        setCity(value);
        break;
      default:
        // Handle other input fields
        break;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!petType) newErrors.petType = 'Pet Type is required';
    if (!petname) newErrors.petname = 'Pet Name is required';
    if (!breed) newErrors.breed = 'Breed is required';
    if (!species) newErrors.species = 'Species is required';
    if (!age) newErrors.age = 'Age is required';
    if (!gender) newErrors.gender = 'Gender is required';
    if (!vaccinated) newErrors.vaccinated = 'Vaccination status is required';
    if (!weight) newErrors.weight = 'Weight is required';
    if (!color) newErrors.color = 'Colour is required';
    if (!height) newErrors.height = 'Height is required';
    if (!disease) newErrors.disease = 'Disease status is required';
    if (!fullname) newErrors.fullname = 'User Name is required';
    if (!phno) {
      newErrors.phno = 'Mobile Number is required';
    } else if (!/^\d+$/.test(phno)) {
      newErrors.phno = 'Mobile Number must contain only digits';
    }
    if (!alternativeNumber) {
      newErrors.alternativeNumber = 'Alternative Number is required';
    } else if (!/^\d+$/.test(alternativeNumber)) {
      newErrors.alternativeNumber = 'Alternative Number must contain only digits';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!pwd) {
      newErrors.pwd = 'Password is required';
    } else if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(pwd))) {
      newErrors.pwd = 'Password must be 7 to 15 characters with at least one numeric digit and a special character';
    }
    if (!confirmPwd) {
      newErrors.confirmPwd = 'Confirm Password is required';
    } else if (pwd !== confirmPwd) {
      newErrors.confirmPwd = 'Passwords do not match';
    }
    if (!city) {
      newErrors.city = 'City is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      try {
        const response = await axios.post('http://localhost:9000/api/users/signup', {
          petname,
          petType,
          breed,
          species,
          age,
          gender,
          vaccinated,
          weight,
          color,
          height,
          disease,
          fullname,
          phno,
          alternativeNumber,
          email,
          pwd,
          confirmPwd,
          city,
        });
        console.log('Registration successful:', response.data);
        navigate("/"); // Redirect after successful registration
      } catch (error) {
        console.error('Registration failed:', error);
        // Handle error, such as displaying an error message to the user
      }
    }
  };

  return (
    <div className='backgroundContainer' style={{ backgroundImage: `url(${BG2})`, height: "1000px" }}>
      <div className='formContainer'>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'transparent', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', width: "700px", marginLeft: "10%", marginTop: "2%", color: "white", height: "820px" }}>
          <h2>Registration</h2>

          {/* First row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label htmlFor="disabledSelect" className="form-label" >PetType :</label>
              <select id="disabledSelect" className="form-select" name="petType" value={petType} onChange={handleChange} style={{ width: "330px", height: "35px", borderRadius: '4px', border: '1px solid #ccc' }}>
                <option value="">Select</option>
                <option value="Dogs">Dogs</option>
                <option value="Horses">Horses</option>
                <option value="Birds">Birds</option>
                <option value="Cats">Cats</option>
                <option value="Poultry">Poultry</option>
                <option value="Rabit">Rabits</option>
                <option value="Goat">Goat</option>
                <option value="Sheap">Sheap</option>
                <option value="Elephants">Elephants</option>
              </select>
              {errors.petType && <span style={{ color: 'red' }}>{errors.petType}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "8%" }}>
              <label>Pet Name:</label>
              <input
                type="text"
                placeholder='Enter pet name'
                name="petname"
                value={petname}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.petname && <span style={{ color: 'red' }}>{errors.petname}</span>}
            </div>
          </div>

          {/* Second row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Breed:</label>
              <input
                type="text"
                placeholder='Enter pet breed'
                name="breed"
                value={breed}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.breed && <span style={{ color: 'red' }}>{errors.breed}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label>Species:</label>
              <input
                type="text"
                placeholder='Enter pet species'
                name="species"
                value={species}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.species && <span style={{ color: 'red' }}>{errors.species}</span>}
            </div>
          </div>

          {/* Third row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Age:</label>
              <input
                type="text"
                placeholder='Enter pet age'
                name="age"
                value={age}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label>Gender:</label>
              <select name="gender" value={gender} onChange={handleChange} style={{ width: '105%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
            </div>
          </div>

          {/* Fourth row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Vaccinated:</label>
              <select name="vaccinated" value={vaccinated} onChange={handleChange} style={{ width: '105%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.vaccinated && <span style={{ color: 'red' }}>{errors.vaccinated}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label>Weight:</label>
              <input
                type="number"
                placeholder='Enter pet weight'
                name="weight"
                value={weight}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.weight && <span style={{ color: 'red' }}>{errors.weight}</span>}
            </div>
          </div>

          {/* Fifth row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Color:</label>
              <input
                type="text"
                placeholder='Enter pet color'
                name="color"
                value={color}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.color && <span style={{ color: 'red' }}>{errors.color}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label>Height:</label>
              <input
                type="text"
                placeholder='Enter pet height'
                name="height"
                value={height}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.height && <span style={{ color: 'red' }}>{errors.height}</span>}
            </div>
          </div>

          {/* Sixth row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Disease:</label>
              <input
                type="text"
                placeholder='Enter pet disease'
                name="disease"
                value={disease}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.disease && <span style={{ color: 'red' }}>{errors.disease}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label>Full Name:</label>
              <input
                type="text"
                placeholder='Enter your full name'
                name="fullname"
                value={fullname}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.fullname && <span style={{ color: 'red' }}>{errors.fullname}</span>}
            </div>
          </div>

          {/* Seventh row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Mobile Number:</label>
              <input
                type="text"
                placeholder='Enter your mobile number'
                name="phno"
                value={phno}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.phno && <span style={{ color: 'red' }}>{errors.phno}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label>Alternative Number:</label>
              <input
                type="text"
                placeholder='Enter your alternative number'
                name="alternativeNumber"
                value={alternativeNumber}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.alternativeNumber && <span style={{ color: 'red' }}>{errors.alternativeNumber}</span>}
            </div>
          </div>

          {/* Eighth row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Email:</label>
              <input
                type="email"
                placeholder='Enter your email address'
                name="email"
                value={email}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label>Password:</label>
              <input
                type="password"
                placeholder='Enter your password'
                name="pwd"
                value={pwd}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.pwd && <span style={{ color: 'red' }}>{errors.pwd}</span>}
            </div>
          </div>

          {/* Ninth row of input fields */}
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', flex: 1 }}>
              <label>Confirm Password:</label>
              <input
                type="password"
                placeholder='Re-enter your password'
                name="confirmPwd"
                value={confirmPwd}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.confirmPwd && <span style={{ color: 'red' }}>{errors.confirmPwd}</span>}
            </div>
            <div style={{ flex: 1, marginLeft: "10%" }}>
              <label>City:</label>
              <input
                type="text"
                placeholder='Enter your city'
                name="city"
                value={city}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.city && <span style={{ color: 'red' }}>{errors.city}</span>}
            </div>
          </div>

          {/* Submit button */}
          <div style={{ marginTop: '20px' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '150px', padding: '10px', borderRadius: '6px', border: 'none', backgroundColor: '#1e88e5', cursor: 'pointer', marginLeft:"280px"}}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
