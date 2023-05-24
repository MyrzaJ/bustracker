import React from "react";
import "./modal.css";

const Modal = ({ modal, setModal, children }) => {
  return (
    <div
      className={modal ? "modal_active" : "modal"}
      onClick={() => setModal(false)}
    >
      <div
        className={modal ? "modal__mainActive" : "modal__main"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
