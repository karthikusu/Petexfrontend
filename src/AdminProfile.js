import React, { useEffect, useState } from 'react';

function ProfilePage() {
    const [admin, setAdmin] = useState({
        adminid: '',
        adminName: '',
        email: '',
        password: '',
    });
    const [adminDetails, setAdminDetails] = useState(null);
    const [editingField, setEditingField] = useState('');
    const [originalAdmin, setOriginalAdmin] = useState(null);

    useEffect(() => {
        // Fetch admin details from local storage
        const storedAdminDetails = localStorage.getItem('adminDetails');
        if (storedAdminDetails) {
            setAdminDetails(JSON.parse(storedAdminDetails));
        }
    }, []);

    useEffect(() => {
        if (adminDetails && adminDetails.adminId) {
            fetchAdminData(adminDetails.adminId);
        }
    }, [adminDetails]);

    const fetchAdminData = async (adminId) => {
        try {
            const response = await fetch(`http://localhost:9000/api/admins/getAdmin/${adminId}`);
            const adminData = await response.json();
            setAdmin(adminData);
            setOriginalAdmin(adminData);
        } catch (error) {
            console.error('Error fetching admin data:', error);
        }
    };

    const handleEdit = (field) => {
        setEditingField(field);
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`http://localhost:9000/api/admins/update/${adminDetails.adminId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(admin),
            });
            if (response.ok) {
                console.log('Admin data updated successfully');
                alert('Admin data updated successfully');
                setEditingField('');
                setOriginalAdmin(admin);
            } else {
                console.error('Failed to update admin data');
                alert('Failed to update admin data');
            }
        } catch (error) {
            console.error('Error updating admin data:', error);
        }
    };

    const handleCancel = () => {
        setAdmin(originalAdmin);
        setEditingField('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdmin({ ...admin, [name]: value });
    };

    return (
        <div style={{
            backgroundColor: '#f0f0f0', // Light gray background for the screen
            minHeight: '100vh', // Ensure the screen fills the entire viewport height
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className="card" style={{
                maxWidth: '500px',
                margin: 'auto',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                fontFamily: 'Arial, sans-serif',
            }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>Admin Profile</h2>

                {adminDetails ? (
                    <div>
                        {/* Existing admin details */}
                        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <label style={{
                                marginRight: '10px',
                                width: '120px',
                                color: '#666',
                                textAlign: 'right',
                                fontSize: '1rem'
                            }}>Admin ID:</label>
                            <span style={{ fontSize: '1rem' }}>{admin.adminid}</span>
                        </div>
                        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <label style={{
                                marginRight: '10px',
                                width: '120px',
                                color: '#666',
                                textAlign: 'right',
                                fontSize: '1rem'
                            }}>Admin Name:</label>
                            {editingField === 'adminName' ? (
                                <input type="text" name="adminName" value={admin.adminName} onChange={handleChange} />
                            ) : (
                                <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('adminName')}>{admin.adminName}</span>
                            )}
                        </div>
                        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <label style={{
                                marginRight: '10px',
                                width: '120px',
                                color: '#666',
                                textAlign: 'right',
                                fontSize: '1rem'
                            }}>Email:</label>
                            {editingField === 'email' ? (
                                <input type="email" name="email" value={admin.email} onChange={handleChange} />
                            ) : (
                                <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('email')}>{admin.email}</span>
                            )}
                        </div>
                        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <label style={{
                                marginRight: '10px',
                                width: '120px',
                                color: '#666',
                                textAlign: 'right',
                                fontSize: '1rem'
                            }}>Password:</label>
                            {editingField === 'password' ? (
                                <input type="password" name="password" value={admin.password} onChange={handleChange} />
                            ) : (
                                <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('password')}>{admin.password}</span>
                            )}
                        </div>
                        {/* Save and cancel buttons */}
                        {editingField && (
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <button
                                    style={{
                                        marginRight: '10px',
                                        padding: '8px 20px',
                                        backgroundColor: '#007bff',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '3px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={handleSave}>Save</button>
                                <button
                                    style={{
                                        padding: '8px 20px',
                                        backgroundColor: '#ccc',
                                        color: '#333',
                                        border: 'none',
                                        borderRadius: '3px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={handleCancel}>Cancel</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <p>Loading admin details...</p>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;
