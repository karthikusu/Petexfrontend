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
            const response = await axios.get("http://localhost:9005/petex/getAll");
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
                <button onClick={handleAddDoctor} style={{textDecoration:"none", color:"white",backgroundColor:"Blue", fontSize:"20px", border: "none", padding: "10px 20px", cursor: "pointer", height:"10%"}}>Add Doctor</button>
            </div>
            <div  style={{ marginLeft: "0" }}>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Doctor Name</th>
                                <th scope="col">Qualification & Specialization</th>
                                <th scope="col">Overall Experience</th>
                                <th scope="col">Mobile Number</th>
                                <th scope="col">Email</th>
                                <th scope="col">Registration Body</th>
                                <th scope="col">Medical Board</th>
                                <th scope="col">Description</th>
                                <th scope="col">Clinic Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doctor, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="doctorName" value={editedFields.doctorName} onChange={handleChange} />
                                        ) : (
                                            doctor.doctorName
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="qualificationAndSpecialization" value={editedFields.qualificationAndSpecialization} onChange={handleChange} />
                                        ) : (
                                            doctor.qualificationAndSpecialization
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="overAllExperience" value={editedFields.overAllExperience} onChange={handleChange} />
                                        ) : (
                                            doctor.overAllExperience
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
                                            <input type="text" name="email" value={editedFields.email} onChange={handleChange} />
                                        ) : (
                                            doctor.email
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="registrationBody" value={editedFields.registrationBody} onChange={handleChange} />
                                        ) : (
                                            doctor.registrationBody
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="medicalBoard" value={editedFields.medicalBoard} onChange={handleChange} />
                                        ) : (
                                            doctor.medicalBoard
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="discription" value={editedFields.discription} onChange={handleChange} />
                                        ) : (
                                            doctor.discription
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <input type="text" name="clinicName" value={editedFields.clinicName} onChange={handleChange} />
                                        ) : (
                                            doctor.clinicName
                                        )}
                                    </td>
                                    <td>
                                        {editId === doctor.doctId ? (
                                            <Button type="primary" onClick={() => handleUpdate(doctor.doctId)}>Save</Button>
                                        ) : (
                                            <>
                                            <td>
                                                <Button onClick={() => handleEdit(doctor.doctId)}>Edit</Button></td>
                                                <td>
                                                <Button type="danger" onClick={() => deleteDoctorById(doctor.doctId)}>Delete</Button></td>
                                                <td>
                                                <Button onClick={() => handleView(doctor.doctId)}>View</Button></td>
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
                        <p>Qualification & Specialization: {viewedDoctor.qualificationAndSpecialization}</p>
                        <p>Overall Experience: {viewedDoctor.overAllExperience}</p>
                        <p>Mobile Number: {viewedDoctor.mobileNumber}</p>
                        <p>Email: {viewedDoctor.email}</p>
                        <p>Registration Body: {viewedDoctor.registrationBody}</p>
                        <p>Medical Board: {viewedDoctor.medicalBoard}</p>
                        <p>Description: {viewedDoctor.discription}</p>
                        <p>Clinic Name: {viewedDoctor.clinicName}</p>
                    </div>
                )}
            </Modal>
        </>
    );
}
