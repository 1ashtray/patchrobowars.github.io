// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null; // Do not render modal if `show` is false

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
