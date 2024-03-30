import React, { useEffect, useState } from 'react';

function UserProfilePage() {
    const [user, setUser] = useState({
        petType: '',
        petname: '',
        species: '',
        age: '',
        gender: '',
        weight: '',
        height: '',
        color: '',
        disease: '',
        vaccinated: '',
        fullname: '',
        email: '',
        pwd: '',
        phno: '',
        city: ''
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
    if (userDetails && userDetails.userId) {
      fetchUserData(userDetails.userId);
    }
  }, [userDetails]);

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`http://localhost:9000/api/users/getuser/${userId}`);
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
      const response = await fetch(`http://localhost:9000/api/users/update/${userDetails.userId}`, {
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
      }}>
     <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#333' ,textAlign:'center'}}>User Profile</h2>

      {userDetails ? (
        <div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <label  style={{ 
                marginRight: '10px', 
                width: '120px', 
                color: '#666', 
                textAlign: 'right',
                fontSize: '1rem'}}>Full Name:</label>
                        {editingField === 'fullname' ? (
                            <input type="text" name="fullname" value={user.fullname} onChange={handleChange} />
                        ) : (
                            <span style={{ fontSize: '1rem', cursor: 'pointer', color: '#007bff' }} onClick={() => handleEdit('fullname')}>{user.fullname}</span>
                        )}
                    </div>
                    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Email:</label>
            {editingField === 'email' ? (
              <input type="email" name="email" value={user.email} onChange={handleChange} />
            ) : (
              <span  style={{ 
                fontSize: '1rem', 
                cursor: 'pointer', 
                color: '#007bff', 
                  }} onClick={() => handleEdit('email')}>{user.email}</span>
            )}
          </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Phone Number:</label>
                {editingField === 'phno' ? (
                    <input style={{ flex: '1', padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}  type="tel" name="phno" value={user.phno} onChange={handleChange} />
                ) : (
                    <span style={{ 
                        fontSize: '1rem', 
                        cursor: 'pointer', 
                        color: '#007bff', 
                          }} onClick={() => handleEdit('phno')}>{user.phno}</span>
                )}
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>City:</label>
                {editingField === 'city' ? (
                    <input style={{ flex: '1', padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}  type="text" name="city" value={user.city} onChange={handleChange} />
                ) : (
                    <span  style={{ 
                        fontSize: '1rem', 
                        cursor: 'pointer', 
                        color: '#007bff', 
                          }} onClick={() => handleEdit('city')}>{user.city}</span>
                )}
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Pet Type:</label>
                {editingField === 'petType' ? (
                    <input  style={{ flex: '1', padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}  type="text" name="petType" value={user.petType} onChange={handleChange} />
                ) : (
                    <span style={{ 
                        fontSize: '1rem', 
                        cursor: 'pointer', 
                        color: '#007bff', 
                          }} onClick={() => handleEdit('petType')}>{user.petType}</span>
                )}
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Pet Name:</label>
                {editingField === 'petname' ? (
                    <input  style={{ flex: '1', padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}  type="text" name="petname" value={user.petname} onChange={handleChange} />
                ) : (
                    <span style={{ 
                        fontSize: '1rem', 
                        cursor: 'pointer', 
                        color: '#007bff', 
                          }} onClick={() => handleEdit('petname')}>{user.petname}</span>
                )}
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Species:</label>
                {editingField === 'species' ? (
                    <input  style={{ flex: '1', padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}  type="text" name="species" value={user.species} onChange={handleChange} />
                ) : (
                    <span style={{ 
                        fontSize: '1rem', 
                        cursor: 'pointer', 
                        color: '#007bff', 
                          }} onClick={() => handleEdit('species')}>{user.species}</span>
                )}
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Age:</label>
                {editingField === 'age' ? (
                    <input  style={{ flex: '1', padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}  type="text" name="age" value={user.age} onChange={handleChange} />
                ) : (
                    <span style={{ 
                        fontSize: '1rem', 
                        cursor: 'pointer', 
                        color: '#007bff', 
                          }} onClick={() => handleEdit('age')}>{user.age}</span>
                )}
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Gender:</label>
                {editingField === 'gender' ? (
                    <input  style={{ flex: '1', padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}  type="text" name="gender" value={user.gender} onChange={handleChange} />
                ) : (
                    <span style={{ 
                        fontSize: '1rem', 
                        cursor: 'pointer', 
                        color: '#007bff', 
                          }} onClick={() => handleEdit('gender')}>{user.gender}</span>
                )}
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Weight:</label>
                {editingField === 'weight' ? (
                    <input  style={{ flex: '1', padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}  type="text" name="weight" value={user.weight} onChange={handleChange} />
                ) : (
                    <span style={{ 
                        fontSize: '1rem', 
                        cursor: 'pointer', 
                        color: '#007bff', 
                          }} onClick={() => handleEdit('weight')}>{user.weight}</span>
                )}
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}> Height:</label>
                {editingField === 'height' ? (
                    <input  style={{ flex: '1', padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}  type="text" name=" height" value={user.height} onChange={handleChange} />
                ) : (
                    <span style={{ 
                        fontSize: '1rem', 
                        cursor: 'pointer', 
                        color: '#007bff', 
                          }} onClick={() => handleEdit('height')}>{user.height}</span>
                )}
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Color:</label>
                {editingField === 'color' ? (
                    <input  style={{ flex: '1', padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}  type="text" name="color" value={user.color} onChange={handleChange} />
                ) : (
                    <span style={{ 
                        fontSize: '1rem', 
                        cursor: 'pointer', 
                        color: '#007bff', 
                          }} onClick={() => handleEdit('color')}>{user.color}</span>
                )}
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Disease:</label>
                {editingField === 'disease' ? (
                    <input   style={{ flex: '1', padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}  type="text" name="disease" value={user.disease} onChange={handleChange} />
                ) : (
                    <span style={{ 
                        fontSize: '1rem', 
                        cursor: 'pointer', 
                        color: '#007bff', 
                          }} onClick={() => handleEdit('disease')}>{user.disease}</span>
                )}
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Vaccinated:</label>
                {editingField === 'vaccinated' ? (
                    <input  style={{ flex: '1', padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}  type="text" name="vaccinated" value={user.vaccinated} onChange={handleChange} />
                ) : (
                    <span style={{ 
                        fontSize: '1rem', 
                        cursor: 'pointer', 
                        color: '#007bff', 
                          }} onClick={() => handleEdit('vaccinated')}>{user.vaccinated}</span>
                )}
            </div>
         
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
                        onClick={handleSave}
                    >
                        Save
                    </button>
                    <button 
                        style={{ 
                            padding: '8px 20px', 
                            backgroundColor: '#dc3545', 
                            color: '#fff', 
                            border: 'none', 
                            borderRadius: '3px', 
                            cursor: 'pointer' 
                        }} 
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    </div>
          )}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
    </div>
  );
}
export default UserProfilePage;
