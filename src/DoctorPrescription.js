// PrescriptionModal.js
import React from "react";

function PrescriptionModal({ isOpen, appointment, prescription, onChange, onSubmit, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Write Prescription</h2>
        <textarea value={prescription} onChange={onChange} />
        <button onClick={onSubmit}>Submit Prescription</button>
      </div>
    </div>
  );
}

export default PrescriptionModal;
