// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Modal, Button } from "antd";
// import * as XLSX from 'xlsx'; // Import XLSX library for Excel export

// export default function Doctors() {
//     const [doctors, setDoctors] = useState([]);
//     const [editId, setEditId] = useState(null);
//     const [editedFields, setEditedFields] = useState({});
//     const [viewedDoctor, setViewedDoctor] = useState(null);
//     const [showModal, setShowModal] = useState(false);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get("http://localhost:9008/petex/orders");
//             setDoctors(response.data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     const deleteDoctorById = async (id) => {
//         try {
//             const response = await axios.delete(`http://localhost:9005/petex/deleteId/${id}`);

//             if (response.status === 200) {
//                 alert(`Doctor with ID ${id} deleted successfully`);
//                 // Refresh the data after deletion
//                 const updatedDoctors = doctors.filter((doctor) => doctor.doctId !== id);
//                 setDoctors(updatedDoctors);
//             } else {
//                 console.error(`Failed to delete doctor with ID ${id}`);
//             }
//         } catch (error) {
//             console.error('Error deleting doctor:', error);
//             throw error;
//         }
//     };

//     const handleEdit = (id) => {
//         setEditId(id);
//         const doctorToEdit = doctors.find((doctor) => doctor.doctId === id);
//         setEditedFields(doctorToEdit);
//     };

//     const handleUpdate = async (id) => {
//         try {
//             const response = await axios.put(`http://localhost:9005/petex/update/${id}`, editedFields);

//             if (response.status === 200) {
//                 console.log(`Doctor with ID ${id} updated successfully`);
//                 setEditId(null); // Exit edit mode
//                 fetchData(); // Refresh data after update
//             } else {
//                 console.error(`Failed to update doctor with ID ${id}`);
//             }
//         } catch (error) {
//             console.error('Error updating doctor:', error);
//         }
//     };

//     const handleChange = (e) => {
//         setEditedFields({ ...editedFields, [e.target.name]: e.target.value });
//     };

//     const handleView = (id) => {
//         const doctor = doctors.find((doctor) => doctor.doctId === id);
//         setViewedDoctor(doctor);
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//         setViewedDoctor(null);
//     };

//     const exportToExcel = () => {
//         const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//         const fileExtension = '.xlsx';
//         const fileName = 'doctors_data';

//         const ws = XLSX.utils.json_to_sheet(doctors);
//         const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
//         const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
//         const data = new Blob([excelBuffer], {type: fileType});
//         const href = URL.createObjectURL(data);
//         const link = document.createElement('a');
//         link.href = href;
//         link.download = fileName + fileExtension;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <>
//             <div style={{ marginBottom: "2%", marginTop: "2%", textAlign: "center", borderRadius: "5px" }}>
//                 {/* Export to Excel button */}
//                 <Button type="primary" onClick={exportToExcel}>Export to Excel</Button>
//             </div>
//             <div  style={{ marginLeft: "0" }}>
//                 <div className="table-responsive">
//                     <table className="table table-striped table-hover">
//                         <thead>
//                             <tr>
//                                 <th scope="col">s.no</th>
//                                 <th scope="col">Customer ID</th>
//                                 <th scope="col">Customer Name</th>
//                                 <th scope="col">Email</th>
//                                 <th scope="col">Mobile Number</th>
//                                 <th scope="col">Donation Amount</th>
//                                 <th scope="col">Date</th>
//                                 <th scope="col">Time</th>
//                                 <th scope="col">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {doctors.map((doctor, index) => (
//                                 <tr key={index}>
//                                     <th scope="row">{index + 1}</th>
//                                     <td>
//                                         {editId === doctor.doctId ? (
//                                             <input type="text" name="customerId" value={editedFields.customerId} onChange={handleChange} />
//                                         ) : (
//                                             doctor.customerId
//                                         )}
//                                     </td>
//                                     {/* Render other table fields similarly */}
//                                     <td>
//                                         {editId === doctor.doctId ? (
//                                             <input type="text" name="customerName" value={editedFields.customerName} onChange={handleChange} />
//                                         ) : (
//                                             doctor.customerName
//                                         )}
//                                     </td>
//                                     {/* Render other table fields similarly */}
//                                     <td>
//                                         {editId === doctor.doctId ? (
//                                             <input type="text" name="email" value={editedFields.email} onChange={handleChange} />
//                                         ) : (
//                                             doctor.email
//                                         )}
//                                     </td>
//                                     {/* Render other table fields similarly */}
//                                     <td>
//                                         {editId === doctor.doctId ? (
//                                             <input type="text" name="mobileNumber" value={editedFields.mobileNumber} onChange={handleChange} />
//                                         ) : (
//                                             doctor.mobileNumber
//                                         )}
//                                     </td>
//                                     {/* Render other table fields similarly */}
//                                     <td>
//                                         {editId === doctor.doctId ? (
//                                             <input type="text" name="donationAmount" value={editedFields.donationAmount} onChange={handleChange} />
//                                         ) : (
//                                             doctor.donationAmount
//                                         )}
//                                     </td>
//                                     {/* Render other table fields similarly */}
//                                     <td>
//                                         {editId === doctor.doctId ? (
//                                             <input type="text" name="date" value={editedFields.date} onChange={handleChange} />
//                                         ) : (
//                                             doctor.date
//                                         )}
//                                     </td>
//                                     {/* Render other table fields similarly */}
//                                     <td>
//                                         {editId === doctor.doctId ? (
//                                             <input type="text" name="time" value={editedFields.time} onChange={handleChange} />
//                                         ) : (
//                                             doctor.time
//                                         )}
//                                     </td>
//                                     {/* Render action buttons */}
//                                     <td>
//                                         {editId === doctor.doctId ? (
//                                             <Button type="primary" onClick={() => handleUpdate(doctor.doctId)}>Save</Button>
//                                         ) : (
//                                             <>
//                                                 <Button onClick={() => handleEdit(doctor.doctId)}>Edit</Button>
//                                                 <Button type="danger" onClick={() => deleteDoctorById(doctor.doctId)}>Delete</Button>
//                                                 <Button onClick={() => handleView(doctor.doctId)}>View</Button>
//                                             </>
//                                         )}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             {/* Doctor Details Modal */}
//             <Modal
//                 title="Doctor Details"
//                 visible={showModal}
//                 onCancel={handleCloseModal}
//                 footer={null}
//             >
//                 {viewedDoctor && (
//                     <div>
//                         <p>Customer ID: {viewedDoctor.customerId}</p>
//                         <p>Customer Name: {viewedDoctor.customerName}</p>
//                         <p>Email: {viewedDoctor.email}</p>
//                         <p>Mobile Number: {viewedDoctor.mobileNumber}</p>
//                         <p>Donation Amount: {viewedDoctor.donationAmount}</p>
//                         <p>Date: {viewedDoctor.date}</p>
//                         <p>Time: {viewedDoctor.time}</p>
//                     </div>
//                 )}
//             </Modal>
//         </>
//     );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "antd";

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editedFields, setEditedFields] = useState({});
    const [viewedDoctor, setViewedDoctor] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:9035/petex/getAllReport");
            setDoctors(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const deleteDoctorById = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:9005/petex/deleteId/${id}`);

            if (response.status === 200) {
                alert(`Doctor with ID ${id} deleted successfully`);
                // Refresh the data after deletion
                const updatedDoctors = doctors.filter((doctor) => doctor.doctId !== id);
                setDoctors(updatedDoctors);
            } else {
                console.error(`Failed to delete doctor with ID ${id}`);
            }
        } catch (error) {
            console.error('Error deleting doctor:', error);
            throw error;
        }
    };

    const handleEdit = (id) => {
        setEditId(id);
        const doctorToEdit = doctors.find((doctor) => doctor.doctId === id);
        setEditedFields(doctorToEdit);
    };

    const handleUpdate = async (id) => {
        try {
            const response = await axios.put(`http://localhost:9035/petex/update/${id}`, editedFields);

            if (response.status === 200) {
                console.log(`Doctor with ID ${id} updated successfully`);
                setEditId(null); // Exit edit mode
                fetchData(); // Refresh data after update
            } else {
                console.error(`Failed to update doctor with ID ${id}`);
            }
        } catch (error) {
            console.error('Error updating doctor:', error);
        }
    };

    const handleChange = (e) => {
        setEditedFields({ ...editedFields, [e.target.name]: e.target.value });
    };

    const handleView = (id) => {
        const doctor = doctors.find((doctor) => doctor.doctId === id);
        setViewedDoctor(doctor);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setViewedDoctor(null);
    };

    // const handleAddDoctor = () => {
    //     window.location.href = "/doctorregistration";
    // };

    return (
        <>
            {/* <div style={{ marginBottom: "2%", marginTop: "2%", textAlign: "center", borderRadius: "5px" }}>
                <button onClick={handleAddDoctor} style={{ textDecoration: "none", color: "white", backgroundColor: "Blue", fontSize: "20px", border: "none", padding: "10px 20px", cursor: "pointer", height: "10%" }}>Add Doctor</button>
            </div> */}
            <div style={{ marginLeft: "0" }}>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Pet ID</th>
                                <th scope="col">Pet Owner Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Pet Name</th>
                                <th scope="col">Pet Type</th>
                                <th scope="col">Pet Breed</th>
                                <th scope="col">Pet Age</th>
                                <th scope="col">Pet Expenses Per Month</th>
                                <th scope="col">Reason for Funding</th>
                                <th scope="col">Donation Amount</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doctor, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="petOwnerName" value={editedFields.petOwnerName} onChange={handleChange} />
                                        ) : (
                                            doctor.petOwnerName
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="email" value={editedFields.email} onChange={handleChange} />
                                        ) : (
                                            doctor.email
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="mobileNumber" value={editedFields.mobileNumber} onChange={handleChange} />
                                        ) : (
                                            doctor.mobileNumber
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="petName" value={editedFields.petName} onChange={handleChange} />
                                        ) : (
                                            doctor.petName
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="petType" value={editedFields.petType} onChange={handleChange} />
                                        ) : (
                                            doctor.petType
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="petBreed" value={editedFields.petBreed} onChange={handleChange} />
                                        ) : (
                                            doctor.petBreed
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="petAge" value={editedFields.petAge} onChange={handleChange} />
                                        ) : (
                                            doctor.petAge
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="petExpensesPerMonth" value={editedFields.petExpensesPerMonth} onChange={handleChange} />
                                        ) : (
                                            doctor.petExpensesPerMonth
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="reasonForFunding" value={editedFields.reasonForFunding} onChange={handleChange} />
                                        ) : (
                                            doctor.reasonForFunding
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="donationAmount" value={editedFields.donationAmount} onChange={handleChange} />
                                        ) : (
                                            doctor.donationAmount
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <Button type="primary" onClick={() => handleUpdate(doctor.doctId)}>Save</Button>
                                        ) : (
                                            <>
                                                {/* <Button onClick={() => handleEdit(doctor.doctId)}>Edit</Button> */}
                                                <Button type="danger" onClick={() => deleteDoctorById(doctor.doctId)}>Delete</Button>
                                                <Button onClick={() => handleView(doctor.doctId)}>View</Button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                title="Doctor Details"
                visible={showModal}
                onCancel={handleCloseModal}
                footer={null}
            >
                {viewedDoctor && (
                    <div>
                        <p>Pet Owner Name: {viewedDoctor.petOwnerName}</p>
                        <p>Email: {viewedDoctor.email}</p>
                        <p>Mobile Number: {viewedDoctor.mobileNumber}</p>
                        <p>Pet Name: {viewedDoctor.petName}</p>
                        <p>Pet Type: {viewedDoctor.petType}</p>
                        <p>Pet Breed: {viewedDoctor.petBreed}</p>
                        <p>Pet Age: {viewedDoctor.petAge}</p>
                        <p>Pet Expenses Per Month: {viewedDoctor.petExpensesPerMonth}</p>
                        <p>Reason for Funding: {viewedDoctor.reasonForFunding}</p>
                        <p>Donation Amount: {viewedDoctor.donationAmount}</p>
                        <p>City: {viewedDoctor.city}</p>
                    </div>
                )}
            </Modal>
        </>
    );
}

