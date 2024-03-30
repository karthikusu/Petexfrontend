// import React, { useState, useEffect } from 'react';
// // import image from './images/OIP (1).jfif';

// const ProductDetails = ({ product }) => {
//   const [productData, setProductData] = useState(null);

//   useEffect(() => {
//     const storedProductDetails = localStorage.getItem('product');
//     if (storedProductDetails) {
//       setProductData(JSON.parse(storedProductDetails));
//     }
//   }, []);

//   return (
//     <div style={{
//       backgroundImage: `url(${'https://wallpaperaccess.com/full/327832.jpg'})`,
//       backgroundSize: 'cover',
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center'
//     }}>
//       <div style={{
//         maxWidth: '300px',
//         marginRight: '500px',
//         border: '1px solid #ccc',
//         borderRadius: '8px',
//         padding: '20px',
//         boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         backgroundColor: '#fff' // White background color
//       }}>
//         {/* Image section */}
//         <div style={{ width: '100%', marginBottom: '5px' }}>
//           <img
//             alt=""
//             src={productData.image}
//             style={{
//               width: '100%',
//               height: 'auto',
//               borderRadius: '8px',
//               boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//             }}
//           />
//           <div style={{ textAlign: 'center', marginBottom: '5px' }}>
//             <h2>{productData&& productData.name}</h2>
//           </div>
//         </div>

//         {/* Product name and details section */}
//         <div style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           width: '100%',
//           marginBottom: '10px'
//         }}>
//           <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '5px',
//             width: '30%',
//             height: "50px"
//           }}>
//             <div>Age:</div>
//             <div style={{
//       paddingLeft: '60px'
//     }}>
//             <div>{productData && productData.age}</div>
//             </div>
//           </div>
//           <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '5px',
//             width: '30%',
//             height: "50px"
//           }}>
//             <div>Gender:</div>
//             <div style={{
//       paddingLeft: '60px'
//     }}>
//             <div>{productData && productData.gender}</div>
//             </div>
//           </div>
//           <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '5px',
//             width: '30%',
//             height: "50px"
//           }}>
//             <div>Price:</div>
//             <div style={{
//       paddingLeft: '60px'
//     }}>
//       <div>{productData && productData.price}</div>
//     </div>
//           </div>
//         </div>

//         {/* Product details section */}
//         <div>
//           <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//             <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Category:</label>
//             <span>{productData && productData.category}</span>
//           </div>
//           <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//             <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Discount:</label>
//             <span>{productData && productData.discount}</span>
//           </div>
//           <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//             <label style={{ marginRight: '10px', width: '120px', color: '#666', textAlign: 'right' }}>Description:</label>
//             <span>{productData && productData.description}</span>
//           </div>
//           <div style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             width: '100%'
//           }}>
//             <button style={{
//               backgroundColor: '#4CAF50',
//               color: 'white',
//               padding: '10px 20px',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               fontSize: '16px',
//             }} >
//               Back
//             </button>
//             <button style={{
//               backgroundColor: '#4CAF50',
//               color: 'white',
//               padding: '10px 20px',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               fontSize: '16px',
//             }}>
//               Adopt Me
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProductDetails;

import React from 'react';
// import './Model.css';

const Modal = ({ show, closeModal, pet }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" style={{ width: "30%", marginLeft: "40%", textAlign: 'center' }}>
      <div className="modal">
        <div className="modal-header">
          <h2 >Pet Details</h2>
          <button className="close-modal" onClick={closeModal} style={{marginTop: "12%", color: "red"}}>×</button>
        </div>
        <div className="modal-content">
          <div className="pet-info">
            <div className="pet-image-container">
              <img src={`data:image/jpeg;base64,${pet.image}`} alt="Pet" className="pet-image" style={{ width: "50%" }} />
            </div>
            <div className="pet-details">
            <p><strong>Id:</strong> {pet.id}</p>
              <p><strong>Name:</strong> {pet.name}</p>
              <p><strong>Breed:</strong> {pet.breed}</p>
              <p><strong>Price:</strong> {pet.price}</p>
              <p><strong>City</strong> Hyderabad </p>
              <p><strong>Vaccinated</strong> Yes </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
