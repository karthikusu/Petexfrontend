import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function FundingDetails() {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/fundingdetailspage');
  };

  useEffect(() => {
    const fetchAllPets = async () => {
      try {
        const response = await fetch('http://localhost:9035/petex/getAllReport');
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    

    // Call the fetchAllPets function when the component mounts
    fetchAllPets();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div style={{backgroundColor:"rgb(255, 240, 240)"}}>
       <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Pet Request Funding List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pets.length > 0 ? (
          pets.map(pet => (
            <div key={pet.petId} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '250px',backgroundColor:"rgb(255, 221, 102)" }}>
              {/* Display pet image if available */}
              {pet.image && pet.image.length > 0 && (
                <img src={`data:image/jpeg;base64,${pet.image}`} alt={pet.petName} style={{ maxWidth: '100%', marginBottom: '10px' }} />
              )}
              {/* Display pet details */}
              <div style={{ fontFamily: 'Arial, sans-serif' }}>
                 {pet.petOwnerId}
                <p><strong>Pet Owner Name: </strong>{pet.petOwnerName}</p>
                <p><strong>Email: </strong>{pet.email}</p>
                <p><strong>Mobile Number: </strong>{pet.mobileNumber}</p>
                <p><strong>Pet Name:</strong> {pet.petName}</p>
                <p><strong>Pet Type:</strong> {pet.petType}</p>
                <p><strong>Pet Breed:</strong> {pet.petBreed}</p>
                <p><strong>Pet Age:</strong> {pet.petAge}</p>
                <p><strong>Pet Expenses/Month:</strong> {pet.petExpensesPerMonth}</p>
                <p><strong>Reason for Funding:</strong> {pet.reasonForFunding}</p>
                {/* Include other pet details as needed */}
                <button onClick={handleSubmit} >Give Funds</button>
              </div>
            </div>
          ))

          
        ) : (
          pets.map(pet => (
            <div key={pet.petId} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '250px' }}>
              {/* Display pet image if available */}
              {pet.image && pet.image.length > 0 && (
                <img src={`data:image/jpeg;base64,${pet.image}`} alt={pet.petName} style={{ maxWidth: '100%', marginBottom: '10px' }} />
              )}
              {/* Display pet details */}
              <div style={{ fontFamily: 'Arial, sans-serif' }}>
             {pet.petOwnerId}
                <p><strong>petOwnerName: </strong>{pet.petOwnerName}</p>
                <p><strong>email: </strong>{pet.email}</p>
                <p><strong>mobileNumber: </strong>{pet.mobileNumber}</p>
                <p><strong>Pet Name:</strong> {pet.petName}</p>
                <p><strong>Pet Type:</strong> {pet.petType}</p>
                <p><strong>Pet Breed:</strong> {pet.petBreed}</p>
                <p><strong>Pet Age:</strong> {pet.petAge}</p>
                <p><strong>Pet Expenses/Month:</strong> {pet.petExpensesPerMonth}</p>
                <p><strong>Reason for Funding:</strong> {pet.reasonForFunding}</p>
                {/* Include other pet details as needed */}
                
              </div>
              
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FundingDetails;
