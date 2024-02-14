import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const [userId, setUserId] = useState('');
  const [entity, setEntity] = useState({});
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:9000/api/users/update/${userId}`, entity);
      // Handle success or failure based on the response
    } catch (error) {
      setError('Error updating user');
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
        {/* Add input fields for other user properties in the entity object */}
        <button type="submit">Update User</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default UpdateUser;
