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
            const response = await axios.get("http://localhost:9008/petex/orders");
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
            const response = await axios.put(`http://localhost:9005/petex/update/${id}`, editedFields);

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

    const handleAddDoctor = () => {
        window.location.href = "/doctorregistration";
    };

    return (
        <>
            <div style={{marginBottom:"2%", marginTop:"2%", textAlign:"center", borderRadius:"5px"}}>
                {/* <button onClick={handleAddDoctor} style={{textDecoration:"none", color:"white",backgroundColor:"Blue", fontSize:"20px", border: "none", padding: "10px 20px", cursor: "pointer", height:"10%"}}>Add Doctor</button> */}
            </div>
            <div  style={{ marginLeft: "0" }}>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Pet Name</th>
                                <th scope="col">Pet Breed</th>
                                <th scope="col">Email Address</th>
                                <th scope="col">Password</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">City</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doctor, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                   
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="petname" value={editedFields.petname} onChange={handleChange} />
                                        ) : (
                                            doctor.petname
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
                                            <input type="text" name="emailaddress" value={editedFields.emailaddress} onChange={handleChange} />
                                        ) : (
                                            doctor.emailaddress
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="password" value={editedFields.password} onChange={handleChange} />
                                        ) : (
                                            doctor.password
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="contactNumber" value={editedFields.contactNumber} onChange={handleChange} />
                                        ) : (
                                            doctor.contactNumber
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="city" value={editedFields.city} onChange={handleChange} />
                                        ) : (
                                            doctor.city
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <Button type="primary" onClick={() => handleUpdate(doctor.doctId)}>Save</Button>
                                        ) : (
                                            <>
                                                <Button onClick={() => handleEdit(doctor.doctId)}>Edit</Button>
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
            <p>Doctor Name: {viewedDoctor.doctorName}</p>
            <p>Pet Name: {viewedDoctor.petname}</p>
            <p>Pet Breed: {viewedDoctor.petBreed}</p>
            <p>Email Address: {viewedDoctor.emailaddress}</p>
            <p>Password: {viewedDoctor.password}</p>
            <p>Contact Number: {viewedDoctor.contactNumber}</p>
            <p>City: {viewedDoctor.city}</p>
        </div>
    )}
</Modal>

        </>
    );
}
