import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';
// import { setCartDetails } from './AuthContext';

const Items = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchAllProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:9025/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(`http://localhost:9025/products/${category}`);
      setProducts(response.data);
    } catch (error) {
      console.error(`Error fetching products for ${category} category:`, error);
    }
  };

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:9025/products');
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

//   const addToCart = (item) => {
//     setCart([...cart, item]);
//     setCartDetails([...cart, item]);
//     console.log([...cart, item]);
//   };

  return (
    <>
      <Navbar />
      <div style={{ padding: '10px' }}>
        <ul style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <button type="button" class="btn-p" style={{ borderRadius: "6px", height:"40px" }}>
            <li onClick={() => handleCategoryClick('all')} style={{ fontSize: "20px", cursor: "pointer" }}>All</li>
          </button>
          {categories.map((category, index) => (
            <button key={index} type="button" class="btn-p" style={{ marginLeft: "1%", borderRadius: "6px",height:"40px" }}>
              <li onClick={() => handleCategoryClick(category)} style={{ cursor: "pointer", fontSize: "16px", width: "7%", }}>{category}</li>
            </button>
          ))}
        </ul>

        <div className="products-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          {products.map((product) => (
            <div key={product.id} className="product-item" style={{ width: '300px', padding: '10px', marginBottom: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
              <img
                alt={product.name}
                src={`data:image/jpeg;base64,${product.image}`}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                className="product-image"
              />
              <div className="product-details" style={{ marginTop: '10px' }}>
                <p><span style={{ fontWeight: "bold", color: "blue", fontSize: "1.2rem" }}>Name: </span> {product.name}</p>
                <p><span style={{ fontWeight: "bold", color: "blue", fontSize: "1.2rem" }}>Category: </span> {product.category}</p>
                <p><span style={{ fontWeight: "bold", color: "blue", fontSize: "1.2rem" }}>Price: </span> {product.price}</p>
                <Link to="/userprofilelogin"><button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '8px', padding: '5px 10px', marginTop: '10px' }}>Click Here to Login!</button></Link>
                {/* <button className='Item' onClick={() => addToCart(product)} style={{ width: "100%" }}>Add to Cart</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Link to="/Cart" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <FaShoppingCart size={34} />
        <span style={{ color: "red", marginTop: "-3%" }}>{cart.length}</span>
      </Link> */}
    </>
  );
};

export default Items;