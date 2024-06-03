import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => (
  <div className={`modal ${isOpen ? 'open' : ''}`}>
    <div className="modal-content">
      <button onClick={onClose}>Close</button>
      {children}
    </div>
  </div>
);

export default Modal;