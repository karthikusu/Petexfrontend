// import React from 'react';
// import './Model.css';

// const Modal = ({ show, closeModal, pet }) => {
//   if (!show) {
//     return null;
//   }

//   return (
//     <div className="modal-overlay" style={{ width: "30%", marginLeft: "40%", textAlign: 'center' }}>
//       <div className="modal">
//         <div className="modal-header">
//           <h2 >Pet Details</h2>
//           <button className="close-modal" onClick={closeModal} style={{marginTop: "12%", color: "red"}}>×</button>
//         </div>
//         <div className="modal-content">
//           <div className="pet-info">
//             <div className="pet-image-container">
//               <img src={`data:image/jpeg;base64,${pet.image}`} alt="Pet" className="pet-image" style={{ width: "50%" }} />
//             </div>
//             <div className="pet-details">
//             <p><strong>Id:</strong> {pet.id}</p>
//               <p><strong>Name:</strong> {pet.name}</p>
//               <p><strong>Breed:</strong> {pet.breed}</p>
//               <p><strong>Price:</strong> {pet.price}</p>
//               <p><strong>City</strong> Hyderabad </p>
//               <p><strong>Vaccinated</strong> Yes </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

// import React from 'react';
// import './Model.css';

// const Modal = ({ show, closeModal, pet }) => {
//   return (
//     <div className={`modal ${show ? 'show' : 'hide'}`}>
//       <div className="modal-content">
//         <span className="close" onClick={closeModal}>&times;</span>
//         {pet && (
//           <div>
//             <h2>Pet Details</h2>
//             <img src={`data:image/jpeg;base64,${pet.image}`} alt="Pet" className="pet-image" style={{ width: "100%" }} />

//             <p>Name: {pet.name}</p>
//             <p>Breed: {pet.breed}</p>
//             <p>Price: {pet.price}</p>
//             <p>Description: {pet.description}</p>
//             {/* Add more details as needed */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React from 'react';
import './Modal.css';

const Modal = ({ show, closeModal, pet }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{backgroundColor:"white"}}>
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>Pet Details</h2>
        <div>
        <img src={`data:image/jpeg;base64,${pet.image}`} alt="Pet" className="pet-image" style={{ width: "100%" }} />
          <p><strong>Name:</strong> {pet.name}</p>
          <p><strong>Breed:</strong> {pet.breed}</p>
          <p><strong>Price:</strong> {pet.price}</p>
          <p><strong>Discription:</strong> {pet.description}</p>
          <p><strong>Color:</strong> {pet.color}</p>
          <p><strong>Vaccinated:</strong> {pet.vaccinated}</p>
          <p><strong>Weight:</strong> {pet.weight}</p>
          <p><strong>Height:</strong> {pet.height}</p>
          {/* Add more pet details here */}
        </div>
      </div>
    </div>
  );
};

export default Modal;



