// src/components/Modal/Modal.jsx
import React from "react";
import "./Modal.scss";  // Đảm bảo rằng CSS đã được định nghĩa đúng

const Modal = ({ isOpen, closeModal, children }) => {
  // Nếu isOpen là false, modal sẽ không được render
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          {/* Nút đóng modal */}
          <button className="close-btn" onClick={closeModal}>
            &times;
          </button>
        </div>

        {/* Phần nội dung của modal */}
        <div className="modal-body">{children}</div>

        <div className="modal-footer">
          {/* Nút Lưu */}
          <button className="save-btn" onClick={closeModal}>
            Lưu
          </button>
          {/* Nút Đóng */}
          <button className="cancel-btn" onClick={closeModal}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
