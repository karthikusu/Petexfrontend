import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './BreedPaage.css'; 
import BreedDetailsPage from './BreedDetailsPage';

function BreedPage() {
  const [breeds, setBreeds] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [showDetailsPage, setShowDetailsPage] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:9026/breeds/all');
      const data = await response.json();
      setBreeds(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (id) => {
    setEditId(id);
    const breedToEdit = breeds.find((breed) => breed.id === id);
    setEditedFields(breedToEdit);
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`http://localhost:9026/breeds/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedFields),
      });
      if (response.ok) {
        console.log(`Breed with id ${id} updated successfully`);
        setEditId(null);
        fetchData();
      } else {
        console.error(`Failed to update breed with id ${id}`);
      }
    } catch (error) {
      console.error('Error updating breed:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:9026/breeds/delete/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log(`Breed with id ${id} deleted successfully`);
        fetchData();
      } else {
        console.error(`Failed to delete breed with id ${id}`);
      }
    } catch (error) {
      console.error('Error deleting breed:', error);
    }
  };

  const handleChange = (e) => {
    setEditedFields({ ...editedFields, [e.target.name]: e.target.value });
  };

  const handleView = async (id) => {
    try {
      const response = await fetch(`http://localhost:9026/breeds/${id}`);
      if (response.ok) {
        const breedDetails = await response.json();
        setSelectedBreed(breedDetails);
        setShowDetailsPage(true);
      } else {
        console.error('Failed to fetch breed details:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching breed details:', error);
    }
  };

  return (
    <div>
      {!showDetailsPage ? (
        <>
          <h1 style={{ textAlign: 'center', color: '#3498db', backgroundColor: '#ecf0f1', padding: '20px' }}>
            List of Breed Services
          </h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Location</th>
                <th>Service Type</th>
                <th>Service Cost</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {breeds.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.id}</td>
                  <td>
                    {editId === breed.id ? (
                      <input type="text" name="location" value={editedFields.location} onChange={handleChange} />
                    ) : (
                      breed.location
                    )}
                  </td>
                  <td>
                    {editId === breed.id ? (
                      <input type="text" name="serviceType" value={editedFields.serviceType} onChange={handleChange} />
                    ) : (
                      breed.serviceType
                    )}
                  </td>
                  <td>
                    {editId === breed.id ? (
                      <input type="text" name="serviceCost" value={editedFields.serviceCost} onChange={handleChange} />
                    ) : (
                      breed.serviceCost
                    )}
                  </td>
                  <td>
                    {editId === breed.id ? (
                      <button className="btn btn-primary" onClick={() => handleUpdate(breed.id)}>Save</button>
                    ) : (
                      <>
                        <button className="btn btn-secondary" onClick={() => handleEdit(breed.id)}>Edit</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(breed.id)}>Delete</button>
                        <button className="btn btn-info" onClick={() => handleView(breed.id)}>View</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <BreedDetailsPage breed={selectedBreed} />
      )}
    </div>
  );
}

export default BreedPage;
