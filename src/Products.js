import React, { useState } from 'react';
import axios from 'axios';

function Products() {
  const [productName, setProductName] = useState('');
  const [information, setInformation] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form validation
    if (!productName || !information || !price || !image) {
      alert('Please fill in all fields and choose an image');
      return;
    }
    // Form data
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('information', information);
    formData.append('price', price);
    formData.append('image', image);
    try {
      const response = await axios.post('http://localhost:9015/petex/saveproduct', formData);
      console.log('Product details added successfully: ', response.data);
      // Reset form fields
      setProductName('');
      setInformation('');
      setPrice('');
      setImage(null);
    } catch (error) {
      console.error('Error adding product details: ', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        setImage(reader.result); // Set the Base64 string as the image state
    };
    reader.readAsDataURL(file);
};

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
        <textarea placeholder="Information" value={information} onChange={(e) => setInformation(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="file" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Products;
