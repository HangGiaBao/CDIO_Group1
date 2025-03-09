import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderContent from '../../../components/Admin/HeaderContent/HeaderContent';
import image1 from '../../../assets/images/teacher1.jpg';  
import './ThongTinGiaoVienChuNhiem.scss';  // Sửa đường dẫn nếu cần

const ThongTinGiaoVienChuNhiem = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderContent nameNavigate="Thông tin của giáo viên" />
      <div className='teacher1'>
        <div className='teacher-info'>
          <p><strong>Tên giáo viên:</strong> Nguyễn Văn A</p>
          <p><strong>Giới tính:</strong> Nam</p>
          <p><strong>Gmail:</strong> nguyenvana@gmail.com</p>
          <p><strong>Số điện thoại:</strong> 01304058302</p>
          <p><strong>Dạy lớp:</strong> Hoa Hồng</p>
        </div>
        <div className='teacherimage'>
          <img src={image1} alt="Giáo viên" />
        </div>
      </div>
    </div>
  );
};

export default ThongTinGiaoVienChuNhiem;
