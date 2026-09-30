import { createPortal } from "react-dom";
import { X } from "lucide-react";

function Modal({ children, onClose }) {
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;