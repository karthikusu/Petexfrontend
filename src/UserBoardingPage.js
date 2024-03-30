// import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const HousingBourding = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:1115/house/board/all');
//       const data = await response.json();
//       setItems(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className="containerhouseB">
//         <h1 style={{ textAlign: 'center', color: '#3498db', backgroundColor: '#ecf0f1', padding: '20px' }}>
//             List of Housing And Boarding Services
//         </h1>       
//       <Row xs={1} md={2} lg={4} className="g-3">
//         {items.map((item) => (
//           <Col key={item.id}>
//             <Card>
//               <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/61a3f493aedeb34ee033ef5e/c75bd30e-096a-4822-bbde-8d27a32cb2cc/Untitled+design+%2818%29.jpg?format=750w" />
//               <Card.Body>
//                 <Card.Title>{item.serviceName}</Card.Title>
//                 <Card.Text>
//                   Service Cost: {item.serviceCost}
//                   <br />
//                   Service Type: {item.serviceType}
//                   <br />
//                   Location: {item.location}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default HousingBourding;

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import BreedDetailsPage from './BreedDetailsPage';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function BreedPage() {
//   const [breeds, setBreeds] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editedFields, setEditedFields] = useState({});
//   const [selectedBreed, setSelectedBreed] = useState(null);
//   const [showDetailsPage, setShowDetailsPage] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:9026/breeds/all');
//       const data = await response.json();
//       setBreeds(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleEdit = (id) => {
//     setEditId(id);
//     const breedToEdit = breeds.find((breed) => breed.id === id);
//     setEditedFields(breedToEdit);
//   };

//   const handleUpdate = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:9026/breeds/update/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedFields),
//       });
//       if (response.ok) {
//         console.log(`Breed with id ${id} updated successfully`);
//         setEditId(null);
//         fetchData();
//       } else {
//         console.error(`Failed to update breed with id ${id}`);
//       }
//     } catch (error) {
//       console.error('Error updating breed:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:9026/breeds/delete/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         console.log(`Breed with id ${id} deleted successfully`);
//         fetchData();
//       } else {
//         console.error(`Failed to delete breed with id ${id}`);
//       }
//     } catch (error) {
//       console.error('Error deleting breed:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setEditedFields({ ...editedFields, [e.target.name]: e.target.value });
//   };

//   const handleView = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:9026/breeds/${id}`);
//       if (response.ok) {
//         const breedDetails = await response.json();
//         setSelectedBreed(breedDetails);
//         setShowDetailsPage(true);
//       } else {
//         console.error('Failed to fetch breed details:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching breed details:', error);
//     }
//   };

//   return (
//     <div>
//       {!showDetailsPage ? (
//         <>
//           <h1 style={{ textAlign: 'center', color: '#3498db', backgroundColor: '#ecf0f1', padding: '20px' }}>
//             List of Breed Services
//           </h1>
//           <Row xs={1} md={2} lg={4} className="g-3">
//             {breeds.map((breed) => (
//               <Col key={breed.id}>
//                 <Card>
//                   <Card.Img variant="top" src="https://www.petspyjamas.com/uploads/2013/08/good-breeder-1.jpg" />
//                   <Card.Body>
//                     <Card.Title>{breed.name}</Card.Title>
//                     <Card.Text>
//                       Location: {breed.location}
//                       <br />
//                       Service Type: {breed.serviceType}
//                       <br />
//                       Service Cost: {breed.serviceCost}
//                     </Card.Text>
//                     {/* <div>
//                       {editId === breed.id ? (
//                         <button className="btn btn-primary" onClick={() => handleUpdate(breed.id)}>Save</button>
//                       ) : (
//                         <>
//                           <button className="btn btn-secondary" onClick={() => handleEdit(breed.id)}>Edit</button>
//                           <button className="btn btn-danger" onClick={() => handleDelete(breed.id)}>Delete</button>
//                           <button className="btn btn-info" onClick={() => handleView(breed.id)}>View</button>
//                         </>
//                       )}
//                     </div> */}
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </>
//       ) : (
//         <BreedDetailsPage breed={selectedBreed} />
//       )}
//     </div>
//   );
// }

// export default BreedPage;


import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Sidebar from './CommonNav';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function Serve() {
  const [petType, setPetType] = useState('');
  const [petname, setPetname] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [color, setColor] = useState('');
  const [email, setEmail] = useState('');
  const [phno, setPhno] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    if (!petType.trim()) {
      setErrorMessage('Pet Type is required.');
      return false;
    }
    if (!petname.trim()) {
      setErrorMessage('Pet Name is required.');
      return false;
    }
    if (!petType.match(/^[A-Za-z\s]+$/)) {
      setErrorMessage('Pet Type should contain only alphabetic characters.');
      return false;
    }
    if (!petname.match(/^[A-Za-z\s]+$/)) {
      setErrorMessage('Pet Name should contain only alphabetic characters.');
      return false;
    }
    if (!gender) {
      setErrorMessage('Gender is required.');
      return false;
    }
    if (isNaN(weight) || weight <= 0) {
      setErrorMessage('Weight should be a positive number.');
      return false;
    }
    if (isNaN(height) || height <= 0) {
      setErrorMessage('Height should be a positive number.');
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setErrorMessage('Invalid email address.');
      return false;
    }
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phno.match(phonePattern)) {
      setErrorMessage('Mobile number should contain only 10 digits and start with 6, 7, 8, or 9.');
      return false;
    }
    const addressPattern = /^[a-zA-Z0-9\s]{10,}$/;
    if (!address.match(addressPattern)) {
      setErrorMessage('Address should contain at least 10 characters, including alphabets and numbers.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const data = {
        petType,
        petname,
        gender,
        weight: parseFloat(weight),
        height: parseFloat(height),
        color,
        email,
        phno: parseInt(phno),
        address
      };

      try {
        const response = await fetch('http://localhost:9036/petex/sales', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          toast.success('Purchase data saved successfully.');
          setTimeout(() => {
            window.location.assign('/'); // Redirect to the homepage
          }, 5000); // Wait for 5 seconds before redirecting
        } else {
          const errorMessage = await response.text();
          throw new Error(errorMessage || 'Purchase data could not be saved.');
        }
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage(error.message);
      }
    }
  };


  return (
    <>
    <Sidebar/>
    <div className="purchase-container" style={{ marginLeft : "20%"}}>
     
      <form onSubmit={handleSubmit} style={{border:"1px solid black", width:"50%"}}>
      <h2 style={{ color : "blue", textAlign:"center"}}>Book The Service</h2>
        <p><label htmlFor="petType" style={{marginLeft:"5%"}}>Pet Type:</label></p>
        <input type="text" id="petType" value={petType} onChange={(e) => setPetType(e.target.value)} required style={{ width : "90%", marginLeft:"5%"}}/><br /><br />

        <p><label htmlFor="petname" style={{marginLeft:"5%"}}>Pet Name:</label></p>
        <input type="text" id="petname" value={petname} onChange={(e) => setPetname(e.target.value)} required style={{ width : "90%", marginLeft:"5%"}}/><br /><br />

        <p><label htmlFor="gender" style={{marginLeft:"5%"}}>Gender:</label></p>
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required style={{ width : "90%", marginLeft:"5%"}}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select><br /><br />

        <p><label htmlFor="weight" style={{marginLeft:"5%"}}>Weight (kg):</label></p>
        <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} min="0" step="0.01" required style={{ width : "90%", marginLeft:"5%"}}/><br /><br />

        <p><label htmlFor="height" style={{marginLeft:"5%"}}>Height (in):</label></p>
        <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} min="0" step="0.01" required style={{ width : "90%", marginLeft:"5%"}}/><br /><br />

        <p><label htmlFor="color" style={{marginLeft:"5%"}}>Color:</label></p>
        <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)} required style={{ width : "90%", marginLeft:"5%"}} /><br /><br />

        <p><label htmlFor="email" style={{marginLeft:"5%"}}>Email:</label></p>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width : "90%", marginLeft:"5%"}} /><br /><br />

        <p><label htmlFor="phno" style={{marginLeft:"5%"}}>Phone Number:</label></p>
        <input type="tel" id="phno" value={phno} onChange={(e) => setPhno(e.target.value)} required style={{ width : "90%", marginLeft:"5%"}}/><br /><br />

        <p><label htmlFor="address" style={{marginLeft:"5%"}}>Address:</label></p>
        <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required style={{ width : "90%", marginLeft:"5%"}}/><br /><br />

        <button type="submit" style={{marginLeft:"35%"}}>Submit</button>
      </form>
      {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
      <ToastContainer />


    </div>
    </>
  );
}

export default Serve;