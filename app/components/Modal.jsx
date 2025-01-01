import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container relative h-full w-full overflow-y-auto">
        <button
          className="absolute top-0 right-0 z-10 p-2 bg-white text-black"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="modal-content p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
