import React from "react";
import "./UserFooter.scss";

const UserFooter = () => {
  return (
    <footer className="user-footer">
      <div className="container">
        <p className="text">&copy; {new Date().getFullYear()} Nhà trẻ The Angel. All rights reserved.</p>
        <div className="links">
          <a className="button" href="https://luatpvlgroup.com/quy-dinh-ve-viec-bao-mat-thong-tin-cua-hoc-sinh-trong-qua-trinh-giang-day/" target="_blank" rel="noopener noreferrer">
            Chính sách bảo mật
          </a>
          <a className="button" href="https://www.facebook.com/giabao.hang.52" target="_blank" rel="noopener noreferrer">
            Liên hệ
          </a>
        </div>
      </div>
    </footer>
  );
};

export default UserFooter;
