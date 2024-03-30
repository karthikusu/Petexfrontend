import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ClothingForm() {
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
        const response = await axios.post('http://localhost:1113/api/cloth/save', formDataToSend, {
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
    <div className="containerclothf" style={{
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
                ADDING CLOTHING LIST FORM
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label className="label">Item Name</label>
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
                    width: '70%',
                    padding: '8px',
                    margin: '5px 0',
                    boxSizing: 'border-box'
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">Cost</label>
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
                    width: '70%',
                    padding: '8px',
                    margin: '5px 0',
                    boxSizing: 'border-box'
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">Availability</label>
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
                    width: '70%',
                    padding: '8px',
                    margin: '5px 0',
                    boxSizing: 'border-box'
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="label">Product Image</label>
              </td>
              <td>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  className="input-text"
                  style={{
                    width: '70%',
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
                  padding: '10px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  cursor: 'pointer'
                }}>
                  Submit
                </button>
                <Link to="/cloths">
                  <button type="button" className="btn btn-primary submit-button1" style={{
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
                  <div className="alert alert-success" role="alert">
                    Data submitted successfully!
                  </div>
                </td>
              </tr>
            )}
            {submitStatus === "error" && (
              <tr>
                <td colSpan={2}>
                  <div className="alert alert-danger" role="alert">
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

export default ClothingForm;
