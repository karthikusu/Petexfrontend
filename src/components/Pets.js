// import React from 'react';
// import camel from '../camel.jpg';
// import grooming from '../Services/grooming.jpg';
// import feeding from '../Services/feeding.jpg';
// import breeding from '../Services/breeding.jpg';
// import training from '../Services/training.jpg';

// function AllServices() {
//   return (
//     <div className="containerX">
//       <style>
//         {`
//           .service-card {
//             border: 1px solid #ccc;
//             padding: 0px;
//             margin: 10px;
//             text-align: center;
//             transition: transform 0.3s;
//           }

//           .service-card img {
//             width: 100%;
//             height: auto;
//             border-radius: 5px;
//           }

//           .service-card p {
//             margin-top: 10px;
//           }

//           .service-card:hover {
//             transform: scale(1.05);
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//           }
//         `}
//       </style>
//       <div className="row" style={{justifyContent:"center"}}>
//         {/* First row */}
//         <div className="col-md-4">
//           <div className="service-card">
//             <img src={feeding} alt="Service 1" />
//             <a href='/houseboarding' style={{textDecoration:"none", color:"black"}}>House Board</a>          </div>
//         </div>
//         <div className="col-md-4">
//           <div className="service-card">
//             <img src={grooming} alt="Service 2" />
//             <a href='/grooming' style={{textDecoration:"none", color:"black"}}>Grooming</a>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="service-card">
//             <img src={breeding} alt="Service 3" />
//             <a href='/BreedPage' style={{textDecoration:"none", color:"black"}}>Breeding</a>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="service-card">
//             <img src={training}alt="Service 4" />
//             <a href='/training' style={{textDecoration:"none", color:"black"}}>Training</a>          </div>
//         </div>
//         <div className="col-md-4">
//           <div className="service-card">
//             <img src={training}alt="Service 4" />
//             <a href='/training' style={{textDecoration:"none", color:"black"}}>Training</a>          </div>
//         </div>
//         <div className="col-md-4">
//           <div className="service-card">
//             <img src={training}alt="Service 4" />
//             <a href='/training' style={{textDecoration:"none", color:"black"}}>Training</a>          </div>
//         </div>
//       </div>
      
//       <div className="row">
//         {/* Second row */}
//         {/* <div className="col-md-3">
//           <div className="service-card">
//             <img src="image5.jpg" alt="Service 5" />
//             <p>Service 5</p>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="service-card">
//             <img src="image6.jpg" alt="Service 6" />
//             <p>Service 6</p>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="service-card">
//             <img src="image7.jpg" alt="Service 7" />
//             <p>Service 7</p>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="service-card">
//             <img src="image8.jpg" alt="Service 8" />
//             <p>Service 8</p>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default AllServices;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import rupee from '../assets/Rupee.png';
import PetCloths from './PetCloths';
import Toys from './PetToys';

function Items() {
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);
    const [editedProduct, setEditedProduct] = useState({});
  
    useEffect(() => {
      fetch('http://localhost:1112/api/food')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);



  // Split products into groups of 4
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
      <Navbar />
      <div class="offers-header" style={{ textAlign: "center", margin: "20px 0" }}>
  <hr class="line" style={{ width: "200px" }} />
  <h2 style={{fontFamily:"serif"}}>Food Items</h2>
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
                
                {/* <p style={{ marginTop: '5px', color: 'red', fontWeight: 'bold' }}>After Discount Price:<img src={rupee} style={{width:"13px", height:"12px"}}/>{product.afterdiscountprice}</p> */}
                <p style={{color:"darkred"}}>Do you want see more ? Login below to see</p>
                <Link to="/userprofilelogin"><button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '8px', padding: '5px 10px', marginTop: '10px' }}>Click Here to Login!</button></Link>
                {/* <button style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '8px', padding: '5px 10px', marginTop: '10px', marginLeft:"60px" }}>Add to Cart</button> */}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <PetCloths/>
        <Toys/>
      </div>
    </div>
  );
};

export default Items;

