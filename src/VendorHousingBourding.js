
import { Link } from 'react-router-dom';
    import React, { useState, useEffect } from 'react';

    const HousingBourding =()=>{
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [editedItem, setEditedItem] = useState({});

  useEffect(() => {
    fetch('http://localhost:1115/api/houseboard/all')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleEdit = (item) => {
    setEditItem(item);
    setEditedItem({ ...item });
  };

  const handleUpdate = () => {
    try {
      fetch(`http://localhost:1115/api/houseboard/${editItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedItem),
      })
        .then((response) => response.json())
        .then((updatedItem) => {
          setItems((prevItems) =>
            prevItems.map((prevItem) =>
              prevItem.id === updatedItem.id ? updatedItem : prevItem
            )
          );
          setEditItem(null);
        })
        .catch((error) => console.error('Error updating item:', error));
    } catch (error) {
      console.error('Error in updating:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleDelete = (itemId, itemName) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${itemName}?`);
    if (confirmDelete) {
      try {
        fetch(`http://localhost:1115/api/houseboard/${itemId}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (response.ok) {
              setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
            } else {
              console.error('Error deleting item:', response.statusText);
            }
          });
      } catch (error) {
        console.error('Error in deleting:', error);
      }
    }
  };
  return (
    <div className="container">
      <h2>Housing&Bourding Services List</h2>
      <Link to="/hb">
        <button className="add-new-btn">+ Add New List</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Service Cost</th>
            <th>Service Type</th>
            <th>Location</th>
            <th>Image</th> 
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
            
              <td>Housing & Bourding</td>
              <td>
                {editItem === item ? (
                  <input
                    type="number"
                    name="serviceCost"
                    value={editedItem.serviceCost}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.serviceCost
                )}
              </td>
              <td>
                {editItem === item ? (
                  <select
                    name="serviceType"
                    value={editedItem.serviceType}
                    onChange={handleInputChange}
                  >
                    <option value="Normal">Normal</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                ) : (
                  item.serviceType
                )}
              </td>
               <td>
                {editItem === item ? (
                  <input
                    type="text"
                    name="location"
                    value={editedItem.location}
                    onChange={handleInputChange}
                  />
                ) : (
                  item.location
                )}
              </td>
              <td>
              {item.image && (
                    <img
                      src={`data:image/jpeg;base64,${item.image}`}
                      alt="Service"
                      className="product-image"
                    />
                  )}
              </td>
              <td>
                {editItem === item ? (
                  <>
                    <button className="btn btn-primary" onClick={handleUpdate}>
                      Update
                    </button>
                    <button className="btn btn-primary" onClick={() => setEditItem(null)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-primary" onClick={() => handleEdit(item)}>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id, item.serviceName)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 

export default HousingBourding