import React from 'react'

import './App.css';

const Modal = ({ expectedBill, actualBill, costReduced, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <h3 style={{ fontWeight: "bold" }}>Billing Summary</h3>
        <p>Expected Bill: ₹{expectedBill.toFixed(2)}</p>
        <p>Actual Bill: ₹{actualBill.toFixed(2)}</p>
        <p>Cost Reduced: ₹{costReduced.toFixed(2)}</p>
        <div className="close-btn">
            <button id='close-btn' style={{textAlign:"center"}} onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;