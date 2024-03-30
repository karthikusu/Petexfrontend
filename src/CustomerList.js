import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'antd';
import './CustomerListcomponent.css';

const CustomerList = () => {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [viewedCustomer, setViewedCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9009/api/v1/getAll');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (appointmentId) => {
    setEditId(appointmentId);
    const appointmentToEdit = data.find((appointment) => appointment.id === appointmentId);
    setEditedFields(appointmentToEdit);
  };

  const handleUpdate = async (appointmentId) => {
    try {
      await axios.put(`http://localhost:9009/api/v1/update/${appointmentId}`, editedFields);
      setEditId(null);
      fetchData();
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleView = (appointmentId) => {
    const appointment = data.find((item) => item.id === appointmentId);
    setViewedCustomer(appointment);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setViewedCustomer(null);
  };

  const handleDelete = async (appointmentId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this appointment?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:9009/api/v1/delete/${appointmentId}`);
        fetchData();
      } catch (error) {
        console.error('Error deleting appointment:', error);
      }
    }
  };

  return (
    <center>
      <div className="hsptl" style={{ textAlign: 'center' }}>
        <table>
          <thead>
            <tr>
              <th colSpan={9}>
                <h2>Appointment List</h2>
              </th>
            </tr>
            <tr>
              <th>Appointment Id</th>
              <th>Booking Date</th>
              <th>Booking Time</th>
              <th>Pet Name</th>
              <th>User Email</th>
              <th>User Mobile Number</th>
              <th>Type of Service</th>
              <th>Pet Description</th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>
                  {editId === appointment.id ? (
                    <input type="text" name="bookingDate" value={editedFields.bookingDate} onChange={handleChange} />
                  ) : (
                    appointment.bookingDate
                  )}
                </td>
                <td>
                  {editId === appointment.id ? (
                    <input type="text" name="bookingTime" value={editedFields.bookingTime} onChange={handleChange} />
                  ) : (
                    appointment.bookingTime
                  )}
                </td>
                <td>
                  {editId === appointment.id ? (
                    <input type="text" name="petName" value={editedFields.petName} onChange={handleChange} />
                  ) : (
                    appointment.petName
                  )}
                </td>
                <td>{appointment.userEmail}</td>
                <td>{appointment.userMobileNumber}</td>
                <td>{appointment.typeOfService}</td>
                <td>{appointment.petDescription}</td>
                {/* <td>
                  {editId === appointment.id ? (
                    <button onClick={() => handleUpdate(appointment.id)}>Save</button>
                  ) : (
                    <Button type="primary" onClick={() => handleEdit(appointment.id)}>Edit</Button>
                  )}
                </td> */}
                <td>
                  <Button type="danger" onClick={() => handleDelete(appointment.id)}>Delete</Button>
                </td>
                <td>
                  <Button onClick={() => handleView(appointment.id)}>View</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        title="Appointment Details"
        visible={showModal}
        onCancel={handleCloseModal}
        footer={null}
      >
        {viewedCustomer && (
          <div>
            <p>Booking Date: {viewedCustomer.bookingDate}</p>
            <p>Booking Time: {viewedCustomer.bookingTime}</p>
            <p>Pet Name: {viewedCustomer.petName}</p>
            <p>User Email: {viewedCustomer.userEmail}</p>
            <p>User Mobile Number: {viewedCustomer.userMobileNumber}</p>
            <p>Type of Service: {viewedCustomer.typeOfService}</p>
            <p>Pet Description: {viewedCustomer.petDescription}</p>
          </div>
        )}
      </Modal>
    </center>
  );
};

export default CustomerList;
