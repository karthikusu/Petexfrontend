import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ItemsForm() {
  const [itemName, setItemName] = useState("");
  const [cost, setCost] = useState(0);
  const [availability, setAvailability] = useState("");
  const [image, setImage] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('cloth', new Blob([JSON.stringify({
        productName: itemName,
        price: cost,
        stock: availability,
    })], { type: 'application/json' }));
    formDataToSend.append('image', image);

    try {
        const response = await axios.post('http://localhost:1112/api/food/save', formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log('Data saved successfully', response.data);
        setSubmitStatus('success');
      
    } catch (error) {
        console.error('Error saving data', error);
        setSubmitStatus('error');
    }
  };

  return (
    <div className="containerfoodf" style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      padding: '20px',
      marginTop: '50px'
    }}>
      <form className="items-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <table className="items-table" style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '20px'
        }}>
          <thead>
            <tr>
              <th colSpan={2} className="text-center title" style={{
                fontSize: '1.5em',
                color: '#007bff'
              }}>
                ADDING Food LIST FORM
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label className="label" style={{
                  fontWeight: 'bold',
                  color: '#007bff'
                }}>Item Name</label>
              </td>
              <td>
                <input
                  id='itemName'
                  name='itemName'
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="input-text"
                  style={{
                    width: '100%',
                    padding: '8px',
                    margin: '5px 0',
                    boxSizing: 'border-box'
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label" style={{
                  fontWeight: 'bold',
                  color: '#007bff'
                }}>Cost</label>
              </td>
              <td>
                <input
                  id='cost'
                  name='cost'
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  className="input-number"
                  style={{
                    width: '100%',
                    padding: '8px',
                    margin: '5px 0',
                    boxSizing: 'border-box'
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label" style={{
                  fontWeight: 'bold',
                  color: '#007bff'
                }}>Availability</label>
              </td>
              <td>
                <input
                  id='availability'
                  name='availability'
                  type="number"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="input-text"
                  style={{
                    width: '100%',
                    padding: '8px',
                    margin: '5px 0',
                    boxSizing: 'border-box'
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label" style={{
                  fontWeight: 'bold',
                  color: '#007bff'
                }}>Product Image</label>
              </td>
              <td>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  className="input-text"
                  style={{
                    width: '100%',
                    padding: '8px',
                    margin: '5px 0',
                    boxSizing: 'border-box'
                  }}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="button-container">
                <button type="button" className="btn btn-primary submit-button" onClick={handleSubmit} style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  padding: '10px 20px',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Submit
                </button>
                <Link to="/items">
                  <button type="button" className="btn btn-primary submit-button" style={{
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    cursor: 'pointer'
                  }}>
                    Back
                  </button>
                </Link>
              </td>
            </tr>
            {submitStatus === "success" && (
              <tr>
                <td colSpan={2}>
                  <div className="alert alert-success" role="alert" style={{
                    marginTop: '10px',
                    backgroundColor: '#d4edda',
                    borderColor: '#c3e6cb',
                    color: '#155724'
                  }}>
                    Data submitted successfully!
                  </div>
                </td>
              </tr>
            )}
            {submitStatus === "error" && (
              <tr>
                <td colSpan={2}>
                  <div className="alert alert-danger" role="alert" style={{
                    marginTop: '10px',
                    backgroundColor: '#f8d7da',
                    borderColor: '#f5c6cb',
                    color: '#721c24'
                  }}>
                    Error submitting data. Please try again.
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ItemsForm;
