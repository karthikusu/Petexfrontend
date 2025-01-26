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


    return (
        <>
            
            <div style={{ marginLeft: "0" }}>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Pet ID</th>
                                <th scope="col">Pet Name</th>
                                <th scope="col">Pet Breed</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Type of Booking</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doctor, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="petName" value={editedFields.petName} onChange={handleChange} />
                                        ) : (
                                            doctor.petName
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
                                            <input type="text" name="companyName" value={editedFields.companyName} onChange={handleChange} />
                                        ) : (
                                            doctor.companyName
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
                                            <input type="text" name="mobile" value={editedFields.mobile} onChange={handleChange} />
                                        ) : (
                                            doctor.mobile
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="typeofBooking" value={editedFields.typeofBooking} onChange={handleChange} />
                                        ) : (
                                            doctor.typeofBooking
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
           
        </>
    );
}
