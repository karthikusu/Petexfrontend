import React, { useEffect, useState } from 'react';

function VendorProfilePage() {
    const [user, setUser] = useState({
      
        establishmentName: '',
        contactperson: '',
        address: '',
        phno: '',
        alternativemobilenumber: '',
        email: '',
        pwd: '',
        confirmPwd: '',
        url: '',
        typeofvendor: '',
        featuredListings: '',
        paymentmodes: '',
        estsince: '',
        socialmedia: ''
    });
    const [userDetails, setUserDetails] = useState(null);
    const [editingField, setEditingField] = useState('');
    const [originalUser, setOriginalUser] = useState(null);

    useEffect(() => {
        // Fetch user details from local storage
        const storedUserDetails = localStorage.getItem('userDetails');
        if (storedUserDetails) {
            setUserDetails(JSON.parse(storedUserDetails));
        }
    }, []);

    useEffect(() => {
        if (userDetails && userDetails.vendorId) {
            fetchUserData(userDetails.vendorId);
        }
    }, [userDetails]);

    const fetchUserData = async (vendorId) => {
        try {
            const response = await fetch(`http://localhost:9001/petex/getuser/${vendorId}`);
            const userData = await response.json();
            setUser(userData);
            setOriginalUser(userData);

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleEdit = (field) => {
        setEditingField(field);
    };


    const handleSave = async () => {
        try {
            const response = await fetch(`http://localhost:9001/petex/update/${userDetails.vendorId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                console.log('User data updated successfully');
                alert('User data updated successfully');
                setEditingField('');
                setOriginalUser(user);
            } else {
                console.error('Failed to update user data');
                alert('Failed to update user data');
            }
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const handleCancel = () => {
        setUserDetails(originalUser);
        setEditingField('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
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
                height:"absolute"
                
            }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333', textAlign: 'center' }}>Vendor Profile</h2>

                {userDetails ? (
                    <div>
                        {/* Existing user details */}
                        {/* Add input fields for new vendor details */}
                        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <label style={{
                                marginRight: '10px',
                                width: '120px',
                                color: '#666',
                                textAlign: 'right',
                                fontSize: '1rem'
                            }}>Establishment Name:</label>
                            {editingField === 'establishmentName' ? (
                                <input type="text" name="establishmentName" value={user.establishmentName} onChange={handleChange} />
                            ) : (
                                <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('establishmentName')}>{user.establishmentName}</span>
                            )}
                        </div>
                        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <label style={{
                                marginRight: '10px',
                                width: '120px',
                                color: '#666',
                                textAlign: 'right',
                                fontSize: '1rem'
                            }}>Contact Person:</label>
                            {editingField === 'contactperson' ? (
                                <input type="text" name="contactperson" value={user.contactperson} onChange={handleChange} />
                            ) : (
                                <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('contactperson')}>{user.contactperson}</span>
                            )}
                        </div>
                        {/* Repeat the pattern for other vendor fields */}
                        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <label style={{
                                marginRight: '10px',
                                width: '120px',
                                color: '#666',
                                textAlign: 'right',
                                fontSize: '1rem'
                            }}>Address:</label>
                            {editingField === 'address' ? (
                                <input type="text" name="address" value={user.address} onChange={handleChange} />
                            ) : (
                                <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('address')}>{user.address}</span>
                            )}
                        </div>
                        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <label style={{
                                marginRight: '10px',
                                width: '120px',
                                color: '#666',
                                textAlign: 'right',
                                fontSize: '1rem'
                            }}>Phone Number:</label>
                            {editingField === 'phno' ? (
                                <input type="tel" name="phno" value={user.phno} onChange={handleChange} />
                            ) : (
                                <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('phno')}>{user.phno}</span>
                            )}
                        </div>
                        {/* Repeat the pattern for other vendor fields */}
                        {/* Add more input fields for other vendor details */}
                        {/* Example: */}
                        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                            <label style={{
                                marginRight: '10px',
                                width: '120px',
                                color: '#666',
                                textAlign: 'right',
                                fontSize: '1rem'
                            }}>Alternative Mobile Number:</label>
                            {editingField === 'alternativemobilenumber' ? (
                                <input type="tel" name="alternativemobilenumber" value={
                                    user.alternativemobilenumber} onChange={handleChange} />
                                    ) : (
                                        <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('alternativemobilenumber')}>{user.alternativemobilenumber}</span>
                                    )}
                                </div>
                                {/* Repeat the pattern for other vendor fields */}
                                {/* Example 2: */}
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{
                                        marginRight: '10px',
                                        width: '120px',
                                        color: '#666',
                                        textAlign: 'right',
                                        fontSize: '1rem'
                                    }}>Email:</label>
                                    {editingField === 'email' ? (
                                        <input type="email" name="email" value={user.email} onChange={handleChange} />
                                    ) : (
                                        <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('email')}>{user.email}</span>
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
                                    {editingField === 'pwd' ? (
                                        <input type="password" name="pwd" value={user.pwd} onChange={handleChange} />
                                    ) : (
                                        <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('pwd')}>{user.pwd}</span>
                                    )}
                                </div>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{
                                        marginRight: '10px',
                                        width: '120px',
                                        color: '#666',
                                        textAlign: 'right',
                                        fontSize: '1rem'
                                    }}>URL:</label>
                                    {editingField === 'url' ? (
                                        <input type="text" name="url" value={user.url} onChange={handleChange} />
                                    ) : (
                                        <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('url')}>{user.url}</span>
                                    )}
                                </div>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{
                                        marginRight: '10px',
                                        width: '120px',
                                        color: '#666',
                                        textAlign: 'right',
                                        fontSize: '1rem'
                                    }}>Type Of Vendor:</label>
                                    {editingField === 'typeofvendor' ? (
                                        <input type="text" name="typeofvendor" value={user.typeofvendor} onChange={handleChange} />
                                    ) : (
                                        <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('typeofvendor')}>{user.typeofvendor}</span>
                                    )}
                                </div>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{
                                        marginRight: '10px',
                                        width: '120px',
                                        color: '#666',
                                        textAlign: 'right',
                                        fontSize: '1rem'
                                    }}>Featured Listings:</label>
                                    {editingField === 'featuredListings' ? (
                                        <input type="text" name="featuredListings" value={user.featuredListings} onChange={handleChange} />
                                    ) : (
                                        <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('featuredListings')}>{user.featuredListings}</span>
                                    )}
                                </div>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{
                                        marginRight: '10px',
                                        width: '120px',
                                        color: '#666',
                                        textAlign: 'right',
                                        fontSize: '1rem'
                                    }}>Payment Mode:</label>
                                    {editingField === 'paymentmodes' ? (
                                        <input type="text" name="paymentmodes" value={user.paymentmodes} onChange={handleChange} />
                                    ) : (
                                        <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('paymentmodes')}>{user.paymentmodes}</span>
                                    )}
                                </div>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{
                                        marginRight: '10px',
                                        width: '120px',
                                        color: '#666',
                                        textAlign: 'right',
                                        fontSize: '1rem'
                                    }}>Established:</label>
                                    {editingField === 'estsince' ? (
                                        <input type="number" name="estsince" value={user.estsince} onChange={handleChange} />
                                    ) : (
                                        <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('estsince')}>{user.estsince}</span>
                                    )}
                                </div>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{
                                        marginRight: '10px',
                                        width: '120px',
                                        color: '#666',
                                        textAlign: 'right',
                                        fontSize: '1rem'
                                    }}>Social Media:</label>
                                    {editingField === 'socialmedia' ? (
                                        <input type="text" name="socialmedia" value={user.socialmedia} onChange={handleChange} />
                                    ) : (
                                        <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('socialmedia')}>{user.socialmedia}</span>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <p>Loading user details...</p>
                        )}
        
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
                </div>
            );
        }
        
        export default VendorProfilePage;
        