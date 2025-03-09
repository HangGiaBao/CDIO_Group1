import React, { useState } from 'react';
import HeaderContent from '../../../components/Admin/HeaderContent/HeaderContent';
import './HocPhi.scss';

const HocPhi = () => {
  const [hocKy, setHocKy] = useState('Học kỳ I');
  const [namHoc, setNamHoc] = useState('2025-2026'); // Đổi mặc định thành 2025-2026

  return (
    <div>
      <HeaderContent nameNavigate={"Học phí"} />
      <div className="fee-container1">
        {/* Chọn năm học & học kỳ */}
        <div className="fee-header">
          <div className="btn-group">
            <p className="fee-title">Năm học:</p>
            <button 
              className={`btn ${namHoc === '2025-2026' ? 'active' : ''}`} 
              onClick={() => setNamHoc('2025-2026')}
            >
              2025-2026
            </button>
            <button 
              className={`btn ${namHoc === '2026-2027' ? 'active' : ''}`} 
              onClick={() => setNamHoc('2026-2027')}
            >
              2026-2027
            </button>
          </div>

          <div className="btn-group">
            <p className="fee-title">Học kỳ:</p>
            <button 
              className={`btn ${hocKy === 'Học kỳ I' ? 'active' : ''}`} 
              onClick={() => setHocKy('Học kỳ I')}
            >
              Học kỳ I
            </button>
            <button 
              className={`btn ${hocKy === 'Học kỳ II' ? 'active' : ''}`} 
              onClick={() => setHocKy('Học kỳ II')}
            >
              Học kỳ II
            </button>
          </div>
        </div>

        {/* Hiển thị năm học & học kỳ được chọn */}
        <p className="fee-container_d1">
          Năm học: {namHoc} <br />
          {hocKy}
        </p>

        {/* Bảng học phí */}
        <table className="fee-table">
          <thead>
            <tr>
              <th>Ngày xuất</th>
              <th>Tên phí</th>
              <th>Số tiền</th>
              <th>Loại tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>00:50:34 - 13/01/2025</td>
              <td>Học phí của trường mẫu giáo XXX</td>
              <td>xxxxxxx</td>
              <td>Việt Nam đồng</td>
            </tr>
            <tr className="total-row">
              <td colSpan="2">Tổng tiền</td>
              <td>xxxxxxx</td>
              <td>Việt Nam đồng</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HocPhi;


