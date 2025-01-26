// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Modal, Button } from "antd";

// export default function User() {
//   const [patients, setPatients] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editedFields, setEditedFields] = useState({});
//   const [viewedUser, setViewedUser] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:9000/api/users/getAlluser");
//       setPatients(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const deleteDataById = async (userId) => {
//     try {
//       const response = await fetch(`http://localhost:9000/api/users/delete/${userId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         alert(`Record with ID ${userId} deleted successfully`);
//         fetchData(); // Refresh data after deletion
//       } else {
//         console.error(`Failed to delete record with ID ${userId}`);
//       }
//     } catch (error) {
//       console.error('Error deleting record:', error);
//     }
//   };

//   const handleEdit = (userId) => {
//     setEditId(userId);
//     const patientToEdit = patients.find((patient) => patient.userId === userId);
//     setEditedFields(patientToEdit);
//   };

//   const handleUpdate = async (userId) => {
//     try {
//       const response = await fetch(`http://localhost:9000/api/users/update/${userId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedFields),
//       });

//       if (response.ok) {
//         console.log(`Record with ID ${userId} updated successfully`);
//         setEditId(null); // Exit edit mode
//         fetchData(); // Refresh data after update
//       } else {
//         console.error(`Failed to update record with ID ${userId}`);
//       }
//     } catch (error) {
//       console.error('Error updating record:', error);
//     }
//   };

//   const handleChange = (e) => {
//     setEditedFields({ ...editedFields, [e.target.name]: e.target.value });
//   };

//   const handleView = async (userId) => {
//     try {
//       const response = await fetch(`http://localhost:9000/api/users/getuser/${userId}`);
//       if (response.ok) {
//         const userData = await response.json();
//         // Set the viewed user and show the modal
//         setViewedUser(userData);
//         setShowModal(true);
//       } else {
//         console.error('Failed to fetch user details:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//     }
//   };

//   const handleAddUser = () => {
//     window.location.href = "/userregister";
//   };

//   return (
//     <>
//     <div style={{marginBottom:"2%", marginTop:"2%", textAlign:"center", borderRadius:"5px"}}>
//         <button onClick={handleAddUser} style={{textDecoration:"none", color:"white",backgroundColor:"Blue", fontSize:"20px", border: "none", padding: "10px 20px", cursor: "pointer", height:"10%"}}>Add User</button>
//       </div>
//       <div  style={{ marginLeft: "0px", marginTop: "0%" }}>
//         <div className="table-responsive">
//           <table className="table table-striped table-hover">
//             <thead>
//               <tr>
//                 <th scope="col">UserID</th>
//                 <th scope="col">Pet Type</th>
//                 <th scope="col">Pet Name</th>
//                 <th scope="col">Species</th>
//                 <th scope="col">Age</th>
//                 <th scope="col">Gender</th>
//                 <th scope="col">Weight</th>
//                 <th scope="col">Height</th>
//                 <th scope="col">Color</th>
//                 <th scope="col">Disease</th>
//                 <th scope="col">Vaccinated</th>
//                 <th scope="col">Full Name</th>
//                 <th scope="col">Email</th>
//                 <th scope="col">Password</th>
//                 <th scope="col">Phone Number</th>
//                 <th scope="col">City</th>
//                 <th scope="col">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {patients.map((patient, index) => (
//                 <tr key={index}>
//                   <th scope="row">{patient.userId}</th>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="petType" value={editedFields.petType} onChange={handleChange} />
//                     ) : (
//                       patient.petType
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="petname" value={editedFields.petname} onChange={handleChange} />
//                     ) : (
//                       patient.petname
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="species" value={editedFields.species} onChange={handleChange} />
//                     ) : (
//                       patient.species
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="age" value={editedFields.age} onChange={handleChange} />
//                     ) : (
//                       patient.age
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="gender" value={editedFields.gender} onChange={handleChange} />
//                     ) : (
//                       patient.gender
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="weight" value={editedFields.weight} onChange={handleChange} />
//                     ) : (
//                       patient.weight
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="height" value={editedFields.height} onChange={handleChange} />
//                     ) : (
//                       patient.height
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="color" value={editedFields.color} onChange={handleChange} />
//                     ) : (
//                       patient.color
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="disease" value={editedFields.disease} onChange={handleChange} />
//                     ) : (
//                       patient.disease
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="vaccinated" value={editedFields.vaccinated} onChange={handleChange} />
//                     ) : (
//                       patient.vaccinated
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="fullname" value={editedFields.fullname} onChange={handleChange} />
//                     ) : (
//                       patient.fullname
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="email" value={editedFields.email} onChange={handleChange} />
//                     ) : (
//                       patient.email
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="pwd" value={editedFields.pwd} onChange={handleChange} />
//                     ) : (
//                       patient.pwd
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="phno" value={editedFields.phno} onChange={handleChange} />
//                     ) : (
//                       patient.phno
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <input type="text" name="city" value={editedFields.city} onChange={handleChange} />
//                     ) : (
//                       patient.city
//                     )}
//                   </td>
//                   <td>
//                     {editId === patient.userId ? (
//                       <button onClick={() => handleUpdate(patient.userId)}>Save</button>
//                     ) : (
//                       <>
//                         <Button type="primary" onClick={() => handleEdit(patient.userId)}>Edit</Button>
//                         <Button type="danger" onClick={() => deleteDataById(patient.userId)}>Delete</Button>
//                         <Button onClick={() => handleView(patient.userId)}>View</Button>
//                       </>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/* Modal for displaying user details */}
//       <Modal
//         title="User Details"
//         visible={showModal}
//         onCancel={() => setShowModal(false)}
//         footer={null}
//       >
//         {/* Display user details in the modal */}
//         {viewedUser && (
//           <div>
//             <p>Pet Type: {viewedUser.petType}</p>
//             <p>Pet Name: {viewedUser.petname}</p>
//             <p>Species: {viewedUser.species}</p>
//             <p>Age: {viewedUser.age}</p>
//             <p>Gender: {viewedUser.gender}</p>
//             <p>Weight: {viewedUser.weight}</p>
//             <p>Height: {viewedUser.height}</p>
//             <p>Color: {viewedUser.color}</p>
//             <p>Disease: {viewedUser.disease}</p>
//             <p>Vaccinated: {viewedUser.vaccinated}</p>
//             <p>Full Name: {viewedUser.fullname}</p>
//             <p>Email: {viewedUser.email}</p>
//             <p>Password: {viewedUser.pwd}</p>
//             <p>Phone Number: {viewedUser.phno}</p>
//             <p>City: {viewedUser.city}</p>
//           </div>
//         )}
//       </Modal>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "antd";
import { useNavigate } from 'react-router-dom';

export default function User() {
  const [patients, setPatients] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [error, setError] = useState(null); // State for error handling
  const navigate = useNavigate(); // This hook gives you access to the navigate function

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/api/users/getAlluser");
      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch user data"); // Set error state
    }
  };

  const deleteDataById = async (userId) => {
    try {
      const response = await fetch(`http://localhost:9000/api/users/delete/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert(`Record with ID ${userId} deleted successfully`);
        fetchData(); 
      } else {
        console.error(`Failed to delete record with ID ${userId}`);
      }
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  const handleEdit = (userId) => {
    setEditId(userId);
    const patientToEdit = patients.find((patient) => patient.userId === userId);
    setEditedFields(patientToEdit);
  };

  const handleUpdate = async (userId) => {
    try {
      const response = await fetch(`http://localhost:9000/api/users/update/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedFields),
      });

      if (response.ok) {
        console.log(`Record with ID ${userId} updated successfully`);
        setEditId(null);
        fetchData();
      } else {
        console.error(`Failed to update record with ID ${userId}`);
      }
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  const handleChange = (e) => {
    setEditedFields({ ...editedFields, [e.target.name]: e.target.value });
  };

  const handleView = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:9000/api/users/getuser/${userId}`);
      const userDetails = response.data;
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      navigate('/usernavbar');
    } catch (error) {
      console.error('Error fetching user details:', error);
      setError("Failed to fetch user details"); // Set error state
    }
  };

  const handleAddUser = () => {
    navigate("/userregister");
  };

  const handleViewServices = (userId) => {
    navigate(`/Services/${userId}`);
  };
  
  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      <div style={{ marginBottom: "2%", marginTop: "2%", textAlign: "center", borderRadius: "5px" }}>
        <button onClick={handleAddUser} style={{ textDecoration: "none", color: "white", backgroundColor: "Blue", fontSize: "20px", border: "none", padding: "10px 20px", cursor: "pointer", height: "10%" }}>Add User</button>
      </div>
      <div style={{ marginLeft: "0px", marginTop: "0%" }}>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">UserID</th>
                <th scope="col">Pet Type</th>
                <th scope="col">Pet Name</th>
                <th scope="col">Species</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Weight</th>
                <th scope="col">Height</th>
                <th scope="col">Color</th>
                <th scope="col">Disease</th>
                <th scope="col">Vaccinated</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Phone Number</th>
                <th scope="col">City</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key
                ={index}>
                <th scope="row">{patient.userId}</th>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="petType" value={editedFields.petType} onChange={handleChange} />
                  ) : (
                    patient.petType
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="petname" value={editedFields.petname} onChange={handleChange} />
                  ) : (
                    patient.petname
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="species" value={editedFields.species} onChange={handleChange} />
                  ) : (
                    patient.species
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="age" value={editedFields.age} onChange={handleChange} />
                  ) : (
                    patient.age
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="gender" value={editedFields.gender} onChange={handleChange} />
                  ) : (
                    patient.gender
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="weight" value={editedFields.weight} onChange={handleChange} />
                  ) : (
                    patient.weight
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="height" value={editedFields.height} onChange={handleChange} />
                  ) : (
                    patient.height
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="color" value={editedFields.color} onChange={handleChange} />
                  ) : (
                    patient.color
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="disease" value={editedFields.disease} onChange={handleChange} />
                  ) : (
                    patient.disease
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="vaccinated" value={editedFields.vaccinated} onChange={handleChange} />
                  ) : (
                    patient.vaccinated
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="fullname" value={editedFields.fullname} onChange={handleChange} />
                  ) : (
                    patient.fullname
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="email" value={editedFields.email} onChange={handleChange} />
                  ) : (
                    patient.email
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="pwd" value={editedFields.pwd} onChange={handleChange} />
                  ) : (
                    patient.pwd
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="phno" value={editedFields.phno} onChange={handleChange} />
                  ) : (
                    patient.phno
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <input type="text" name="city" value={editedFields.city} onChange={handleChange} />
                  ) : (
                    patient.city
                  )}
                </td>
                <td>
                  {editId === patient.userId ? (
                    <button onClick={() => handleUpdate(patient.userId)}>Save</button>
                  ) : (
                    <>
                      <Button type="primary" onClick={() => handleEdit(patient.userId)}>Edit</Button>
                      <Button type="danger" onClick={() => deleteDataById(patient.userId)}>Delete</Button>
                      <Button onClick={() => handleView(patient.userId)}>View</Button>
                      {/* <Button onClick={() => handleViewServices(patient.userId)}>Add Services</Button> */}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
);
}
