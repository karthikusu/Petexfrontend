import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Pets.css';
// import Sidebar from "./Sidebar";
import { Link } from 'react-router-dom';
import Modal from './Model'; 

const Pets = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchAllProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:9015/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`http://localhost:9015/pets/${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error(`Error fetching products for ${category} category:`, error);
    }
  };

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:9015/pets');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      fetchAllProducts();
    } else {
      fetchProductsByCategory(category);
    }
  };

  const handleViewMoreClick = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* <Sidebar/> */}
      <style>
        {
          
          `
          
.products-container {
    display: flex;
    flex-wrap: wrap;
    margin-left: 3%;
    
  }
  
  .product-item {
    width: calc(20% - 20px); 
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .product-item:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .product-image {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
  }
  
  .product-details {
    padding: 15px;
  }
  
  .product-details p {
    margin: 5px 0;
  }
  
 
  @media (max-width: 768px) {
    .product-item {
      width: calc(50% - 20px); 
    }
  }
  
.product-details button {
    background-color: green;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    cursor: pointer;
    margin-left: 55%;
  }
  
  .product-details button:hover  {
    background-color: rgb(40, 184, 40);
  }
  
  
  
          `
        }
      </style>
      <div>
        <ul style={{ display: 'flex', marginLeft : "0%" }}>
          <button type="button"style={{ width : "8%",height : "8vh", backgroundColor : "rgb(0, 128, 128)", color : "white"}}><li onClick={() => handleCategoryClick('all')} style={{ display: 'flex', fontSize : "1.2rem",cursor : "pointer", fontWeight : "bolder",backgroundColor : ""}}>All</li></button>
          {categories.map((category, index) => (
           <button type="button"style={{ width : "10%",height : "8vh",marginLeft : "1%", backgroundColor : "rgb(0, 128, 128)"}}><li key={index} onClick={() => handleCategoryClick(category)} style={{ display: 'flex',cursor : "pointer", fontSize : "1.2rem", marginLeft : "3%", fontWeight : "bolder" ,color : "white"}}>{category}</li></button>
          ))}
        </ul>

        <div className="products-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
          {products.map((product) => (
            <div key={product.id} className="product-item" style={{ width: '30%', padding: '10px' }}>
              <img
                alt=""
                src={`data:image/jpeg;base64,${product.image}`}
                style={{ width: '100%', height: 'auto' }}
                className="product-image"
              />
              <div className="product-details" style={ { marginLeft : "10%"}}>
                <p><span style={{ fontWeight : "bold", color : "blue", fontSize : "1.4rem"}}>Name : </span> {product.name}</p>
                <p><span style={{ fontWeight : "bold", color : "blue",fontSize : "1.4rem"}}>Breed : </span> <span style={{marginRight: "-80%"}}>{product.breed}</span></p> 
                <p><span style={{ fontWeight : "bold", color : "blue", fontSize : "1.4rem"}}>Price : </span> {product.price}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginLeft : "3%"}}>
                  <Link to="/Adoption"><button style={{marginLeft: "-40%", marginRight: "-40%"}}>Adopt Me</button></Link>
                  <button onClick={() => handleViewMoreClick(product)} className='ViewModelPets' style={ {width : "57%",height : "9vh", marginLeft : "10%", backgroundColor : "orange"}}>ViewMore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} closeModal={closeModal} pet={selectedPet} />
    </>
  );
};

export default Pets;

