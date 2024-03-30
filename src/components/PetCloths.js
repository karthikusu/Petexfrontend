import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
import rupee from '../assets/Rupee.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Items.css";

function PetCloths() {
const [products, setProducts] = useState([]);
const [editProduct, setEditProduct] = useState(null);
const [editedProduct, setEditedProduct] = useState({});

useEffect(() => {
  fetch('http://localhost:1113/api/cloth')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error('Error fetching data:', error));
}, []);

const groupedProducts = products.reduce((acc, product, index) => {
  const groupIndex = Math.floor(index / 4);
  if (!acc[groupIndex]) {
    acc[groupIndex] = [];
  }
  acc[groupIndex].push(product);
  return acc;
}, []);

return (
  <div>
    {/* <Navbar /> */}
    <div class="offers-header" style={{ textAlign: "center", margin: "20px 0" }}>
  <hr class="line" style={{ width: "200px" }} />
  <h2 style={{fontFamily:"serif"}}>Cloth Items</h2>
  <hr class="line" style={{ width: "200px" }} />
</div>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '-20px' }}>
      {groupedProducts.map((group, groupIndex) => (
        <div key={groupIndex} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'whitesmoke', marginTop: '20px', padding: '20px' }}>
          {group.map(product => (
            <div key={product.id} style={{ border: '1px solid rgb(210, 205, 210)', padding: '20px', margin: '10px', maxWidth: '250px', borderRadius: '10px' }}>
              <Link to={`/product/${product.id}`}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={`data:image/jpeg;base64,${product.image}`}
                    alt={product.productName}
                    style={{
                      width: '100%',
                      height: '225px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s',
                      cursor: 'pointer',
                      borderRadius: '8px',
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.04)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>
              </Link>
              <p style={{ marginTop: '10px' }}>Name: {product.productName}</p>
              <p style={{ marginTop: '5px' }}>Price:<img src={rupee} style={{width:"13px", height:"12px"}}/>{product.price}</p>
              {/* <p style={{ marginTop: '5px' }}>Discount:<img src={rupee} style={{width:"13px", height:"12px"}}/>{product.discount}</p> */}
              <p style={{color:"darkred"}}>Do you want see more ? Login below to see</p>
              {/* <p style={{ marginTop: '5px', color: 'red', fontWeight: 'bold' }}>After Discount Price:<img src={rupee} style={{width:"13px", height:"12px"}}/>{product.afterdiscountprice}</p> */}
              <Link to="/userprofilelogin"><button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '8px', padding: '5px 10px', marginTop: '10px' }}>Click Here to Login!</button></Link>
              
              {/* <button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '8px', padding: '5px 10px', marginTop: '10px', marginLeft:"60px" }}>Add to Cart</button> */}
            </div>
          ))}
        </div>
      ))}
    </div>
    {/* <div>
      <Dogservice/>
    </div> */}
  </div>
);
};

export default PetCloths;