import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [productData, setProductData] = useState({
    category: '',
    name: '',
    price: 0,
    image: null
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('category', productData.category);
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('file', productData.image);

    try {
      const response = await axios.post('http://localhost:9025/addP', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Data saved successfully', response.data);
      setSubmitStatus('success');

      // Store product details in local storage
      localStorage.setItem('ProductDetails', JSON.stringify(productData));
    } catch (error) {
      console.error('Error saving data', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div style={styles.containeritems}>
      <h2 style={styles.heading}>Product Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Category:</label>
          <input type="text" name="category" value={productData.category} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input type="text" name="name" value={productData.name} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Price:</label>
          <p>
          <input type="number" name="price" value={productData.price} onChange={handleChange} style={styles.input} /></p>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Image:</label>
          <input type="file" name="image" onChange={handleImageChange} style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {submitStatus === 'success' && <p style={styles.successMessage}>Data submitted successfully!</p>}
      {submitStatus === 'error' && <p style={styles.errorMessage}>Error submitting data. Please try again.</p>}
    </div>
  );
}

const styles = {
  containeritems: {
    width: '50%',
    margin: '0 auto',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    padding: '20px',
    borderRadius: '5px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    padding: '8px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  },
};

export default ProductForm;
