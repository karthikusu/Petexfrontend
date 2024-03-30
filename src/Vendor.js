import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Input } from "antd";

export default function User() {
  const [patients, setPatients] = useState([]);
  const [viewedUser, setViewedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editedFields, setEditedFields] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:9001/petex/getAll");
      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteDataById = async (vendorId) => {
    try {
      const response = await fetch(`http://localhost:9001/petex/delete/${vendorId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert(`Record with ID ${vendorId} deleted successfully`);
        fetchData(); // Refresh data after deletion
      } else {
        console.error(`Failed to delete record with ID ${vendorId}`);
      }
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  const handleEdit = (vendorId) => {
    setEditId(vendorId);
    const patientToEdit = patients.find((patient) => patient.vendorId === vendorId);
    setEditedFields(patientToEdit);
  };

  const handleUpdate = async (vendorId) => {
    try {
      const response = await fetch(`http://localhost:9001/petex/update/${vendorId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedFields),
      });

      if (response.ok) {
        console.log(`Record with ID ${vendorId} updated successfully`);
        setEditId(null); // Exit edit mode
        fetchData(); // Refresh data after update
      } else {
        console.error(`Failed to update record with ID ${vendorId}`);
      }
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  const handleChange = (e) => {
    setEditedFields({ ...editedFields, [e.target.name]: e.target.value });
  };

  const handleView = async (vendorId) => {
    try {
      const response = await fetch(`http://localhost:9001/petex/getuser/${vendorId}`);
      if (response.ok) {
        const userData = await response.json();
        // Set the viewed user and show the modal
        setViewedUser(userData);
        setShowModal(true);
      } else {
        console.error('Failed to fetch user details:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleAddVendor = () => {
    window.location.href = "/vendorregister";
  };

  return (
    <>

      <div style={{marginBottom:"2%", marginTop:"2%", textAlign:"center", borderRadius:"5px"}}>
        <button onClick={handleAddVendor} style={{textDecoration:"none", color:"white",backgroundColor:"Blue", fontSize:"20px", border: "none", padding: "10px 20px", cursor: "pointer", height:"10%"}}>Add Vendor</button>
      </div>
      <div style={{ marginLeft: "0px", marginTop: "0%" }}>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th style={{ color: "black" }} scope="col">USER_ID</th>
                <th style={{ color: "black" }} scope="col">ESTABLISHMENT_NAME</th>
                <th style={{ color: "black" }} scope="col">CONTACT_PERSON</th>
                <th style={{ color: "black" }} scope="col">ADDRESS</th>
                <th style={{ color: "black" }} scope="col">MOBILE_NUMBER</th>
                <th style={{ color: "black" }} scope="col">ALTERNATIVE_MOBILE_NUMBER</th>
                <th style={{ color: "black" }} scope="col">EMAIL</th>
                <th style={{ color: "black" }} scope="col">PWD</th>
                <th style={{ color: "black" }} scope="col">CONFIRM_PWD</th>
                <th style={{ color: "black" }} scope="col">URL</th>
                <th style={{ color: "black" }} scope="col">TYPE_OF_VENDOR</th>
                <th style={{ color: "black" }} scope="col">FEATURED_LISTINGS</th>
                <th style={{ color: "black" }} scope="col">PAYMENT_MODES</th>
                <th style={{ color: "black" }} scope="col">ESTABLISHMENT_SINCE</th>
                <th style={{ color: "black" }} scope="col">SOCIAL_MEDIA</th>
                <th style={{ color: "black" }} scope="col">OTP</th>
                <th style={{ color: "black" }} scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{editId === data.vendorId ? <Input name="establishmentName" value={editedFields.establishmentName} onChange={handleChange} /> : data.establishmentName}</td>
                  <td>{editId === data.vendorId ? <Input name="contactperson" value={editedFields.contactperson} onChange={handleChange} /> : data.contactperson}</td>
                  <td>{editId === data.vendorId ? <Input name="address" value={editedFields.address} onChange={handleChange} /> : data.address}</td>
                  <td>{editId === data.vendorId ? <Input name="phno" value={editedFields.phno} onChange={handleChange} /> : data.phno}</td>
                  <td>{editId === data.vendorId ? <Input name="ALTERNATIVE_MOBILE_NUMBER" value={editedFields.ALTERNATIVE_MOBILE_NUMBER} onChange={handleChange} /> : data.ALTERNATIVE_MOBILE_NUMBER}</td>
                  <td>{editId === data.vendorId ? <Input name="email" value={editedFields.email} onChange={handleChange} /> : data.email}</td>
                  <td>{editId === data.vendorId ? <Input name="pwd" value={editedFields.pwd} onChange={handleChange} /> : data.pwd}</td>
                  <td>{editId === data.vendorId ? <Input name="confirmPwd" value={editedFields.confirmPwd} onChange={handleChange} /> : data.confirmPwd}</td>
                  <td>{editId === data.vendorId ? <Input name="url" value={editedFields.url} onChange={handleChange} /> : data.url}</td>
                  <td>{editId === data.vendorId ? <Input name="typeofvendor" value={editedFields.typeofvendor} onChange={handleChange} /> : data.typeofvendor}</td>
                  <td>{editId === data.vendorId ? <Input name="featuredListings" value={editedFields.featuredListings} onChange={handleChange} /> : data.featuredListings}</td>
                  <td>{editId === data.vendorId ? <Input name="paymentmodes" value={editedFields.paymentmodes} onChange={handleChange} /> : data.paymentmodes}</td>
                  <td>{editId === data.vendorId ? <Input name="estsince" value={editedFields.estsince} onChange={handleChange} /> : data.estsince}</td>
                  <td>{editId === data.vendorId ? <Input name="socialmedia" value={editedFields.socialmedia} onChange={handleChange} /> : data.socialmedia}</td>
                  <td>{editId === data.vendorId ? <Input name="OTP" value={editedFields.OTP} onChange={handleChange} /> : data.OTP}</td>
                  <td>
                    {editId === data.vendorId ? (
                      <Button type="primary" onClick={() => handleUpdate(data.vendorId)}>Update</Button>
                    ) : (
                      <>
                        <Button type="primary" onClick={() => handleEdit(data.vendorId)}>Edit</Button>
                        <Button type="danger" onClick={() => deleteDataById(data.vendorId)}>Delete</Button>
                        <Button onClick={() => handleView(data.vendorId)}>View</Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for displaying user details */}
      <Modal
        title="User Details"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        {/* Display user details in the modal */}
        {viewedUser && (
          <div>
            <p>ESTABLISHMENT_NAME: {viewedUser.establishmentName}</p>
            <p>CONTACT_PERSON: {viewedUser.contactperson}</p>
            <p>ADDRESS: {viewedUser.address}</p>
            <p>MOBILE_NUMBER: {viewedUser.phno}</p>
            <p>ALTERNATIVE_MOBILE_NUMBER: {viewedUser.ALTERNATIVE_MOBILE_NUMBER}</p>
            <p>EMAIL: {viewedUser.email}</p>
            <p>PWD: {viewedUser.pwd}</p>
            <p>CONFIRM_PWD: {viewedUser.confirmPwd}</p>
            <p>URL: {viewedUser.url}</p>
            <p>TYPE_OF_VENDOR: {viewedUser.typeofvendor}</p>
            <p>FEATURED_LISTINGS: {viewedUser.featuredListings}</p>
            <p>PAYMENT_MODES: {viewedUser.paymentmodes}</p>
            <p>ESTABLISHMENT_SINCE: {viewedUser.estsince}</p>
            <p>SOCIAL_MEDIA: {viewedUser.socialmedia}</p>
            <p>OTP: {viewedUser.OTP}</p>
          </div>
        )}
      </Modal>
    </>
  );
}
