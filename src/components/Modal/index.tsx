import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string; 
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, className = "", children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
