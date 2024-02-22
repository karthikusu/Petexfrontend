import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:9005/petex/getAll");
                setDoctors(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

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

    return (
        <>
            <div className="container" style={{marginLeft:"0"}}>
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
                                {/* <th scope="col">Delete</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doctor, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{doctor.doctorName}</td>
                                    <td>{doctor.qualificationAndSpecialization}</td>
                                    <td>{doctor.overAllExperience}</td>
                                    <td>{doctor.mobileNumber}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.registrationBody}</td>
                                    <td>{doctor.medicalBoard}</td>
                                    <td>{doctor.discription}</td>
                                    <td>{doctor.clinicName}</td>
                                    <td>
                                    <button
                                            type="button"
                                            onClick={() => doctor.doctId !== undefined && deleteDoctorById(doctor.doctId)}
                                        
                                        style={{backgroundColor:"red"}}>
                                            Delete
                                        </button>
                                    </td>
                                    {/* <td>
                                        
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
