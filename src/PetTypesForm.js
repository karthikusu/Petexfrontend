import React, { useState } from 'react';
import axios from 'axios';

function PetTypes() {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: 0,
    discount: 0,
    color: '',
    weight:'',
    height:'',
    vaccinated: '', // treating vaccinated as a string
    afterdiscountprice: '',
    category: '', // Adding category state
    breed: '',
    vegetarian: '',
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
    formData.append('name', productData.name);
    formData.append('description', productData.description);
    formData.append('price', productData.price);
    formData.append('color', productData.color);
    formData.append('weight', productData.weight);
    formData.append('height', productData.height);
    formData.append('vaccinated', productData.vaccinated); // sending vaccinated as a string
    formData.append('discount', productData.discount);
    formData.append('category', productData.category); // Include category in formData
    formData.append('breed', productData.breed);
    formData.append('file', productData.image);

    try {
      const response = await axios.post('http://localhost:9015/addpet', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Data saved successfully', response.data);
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error saving data', error);
      setSubmitStatus('error');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{textAlign:"center"}}>Add New Pet</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input type="text" name="name" value={productData.name} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Description:</label>
          <input type="text" name="description" value={productData.description} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Price:</label>
          <input type="number" name="price" value={productData.price} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Color:</label>
          <input type="text" name="color" value={productData.color} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Vaccinated:</label>
            <select name="vaccinated" value={productData.vaccinated} onChange={handleChange} style={styles.input}>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Weight:</label>
          <input type="number" name="weight" value={productData.weight} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Height:</label>
          <input type="number" name="height" value={productData.height} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Discount:</label>
          <input type="number" name="discount" value={productData.discount} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Category:</label>
          <select name="category" value={productData.category} onChange={handleChange} style={styles.input}>
            <option value="">Select</option>
            <option value="Bird">Bird</option>
            <option value="Camel">Camel</option>
            <option value="Cat">Cat</option>
            <option value="Cow">Cow</option>
            <option value="Dog">Dog</option>
            <option value="Elephant">Elephant</option>
            <option value="Horse">Horse</option>
            <option value="Rabbit">Rabbit</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Breed:</label>
          <input type="text" name="breed" value={productData.breed} onChange={handleChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Image:</label>
          <input type="file" name="image" onChange={handleImageChange} style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Save</button>
      </form>
      {submitStatus === 'success' && <p style={styles.successMessage}>Data saved successfully!</p>}
      {submitStatus === 'error' && <p style={styles.errorMessage}>Error saving data. Please try again.</p>}
    </div>
  );
}

const styles = {
  container: {
    width: '50%',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#f4f4f4',
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
    width: '100%',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
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

export default PetTypes;
