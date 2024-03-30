import React from 'react';

const Profile = ({ currentUser }) => {
  return (
    <div className="container">
      <h2 className="heading">User Profile</h2>
      <div className="user_details">
        <p>Email: {currentUser.email}</p>
        <p>Name: {currentUser.doctorName}</p>
        {/* Add other user details as needed */}
      </div>
    </div>
  );
};

export default Profile;
