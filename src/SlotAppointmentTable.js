import React, { useState, useEffect } from "react";
import axios from "axios";

function Appointment() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:9009/api/v1/getAll");
        console.log("Response data:", response.data); // Add this line for logging
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#3498db', backgroundColor: '#ecf0f1', padding: '20px' }}>
           List Of Appointments
        </h1>  
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Booking Date</th>
            <th>Booking Time</th>
            <th>Pet Name</th>
            <th>Pet Breed</th>
            {/* <th>User ID</th>  */}
            <th>User Email</th>
            <th>User Mobile Number</th>
            <th>Type of Service</th>
            <th>Pet Description</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.bookingDate}</td>
              <td>{appointment.bookingTime}</td>
              <td>{appointment.petName}</td>
              <td>{appointment.petBreed}</td>
              {/* <td>{appointment.user ? appointment.user.id : 'N/A'}</td>  */}
              <td>{appointment.userEmail}</td>
              <td>{appointment.userMobileNumber}</td>
              <td>{appointment.typeOfService}</td>
              <td>{appointment.petDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Appointment;
