import React from 'react';
import './GioiThieuDoiNguGiaoVien.scss';  // Import SCSS styles
import { useNavigate } from 'react-router-dom';
import GVA3 from "../../../../assets/images/GVA3.jpg"
import GVA1 from "../../../../assets/images/GVA1.jpeg"
import GVA from "../../../../assets/images/GVA.webp"
import GV from "../../../../assets/images/GV.jpg"
import GV2 from "../../../../assets/images/GV2.jpg"
import GVA2 from "../../../../assets/images/GVA2.jpg"
import GVA4 from "../../../../assets/images/GVA4.png"
const GioiThieuDoiNguGiaoVien = () => {
  const navigate = useNavigate();

  const handleClickNhay = () => {
    navigate("/GioiThieuDoiNguGiaoVien");
  };

  return (
    <div className="container">
      <h1 className="title">Đội ngũ nhân sự</h1>
      <p className="description">
        Đội ngũ cán bộ quản lý, giáo viên, nhân viên có đạo đức, lối sống lành mạnh, yêu thương trẻ thơ, tận tụy, công bằng và đầy trách nhiệm. Tất cả đều có trình độ đạt chuẩn và tay nghề cao, có năng lực chuyên môn và phương pháp phù hợp để đáp ứng nhu cầu phát triển mỗi ngày của trẻ. Hội đồng sư phạm nhà trường luôn có thái độ đúng mực, chân thành, hợp tác và đáp ứng những nhu cầu chính đáng của phụ huynh, tất cả vì sự phát triển của trẻ.
      </p>

      {/* Section: Ban Giám Hiệu */}
      <div className="section">
        <div className="section-header">
          <div className="icon">
            <img src={GVA3} alt="Thumbs Up" className='anh1'/>
          </div>
          <h2 className="section-title">BAN GIÁM HIỆU</h2>
        </div>
        <p className="section-description">
          Trường Mầm Non Anh Đào tự hào có đội ngũ lãnh đạo gồm các cô giáo được đào tạo bài bản và chuyên sâu về giáo dục mầm non, có tâm huyết với sự nghiệp giáo dục, có kinh nghiệm quản lý thực tế trường mầm non nhiều năm.
        </p>
      </div>

      {/* Section: Giáo Viên */}
      <div className="section">
        <div className="section-header">
          <div className="icon">
            <img src={GV2} alt="Thumbs Up"className='anh1'/> 
          </div>
          <h2 className="section-title">GIÁO VIÊN</h2>
        </div>
        <p className="section-description">
          Trường Mầm Non Anh Đào có một đội ngũ giáo viên tâm huyết, tận tụy với nghề, hết lòng yêu thương con trẻ.
        </p>
      </div>

      {/* Section: Bảo Mẫu */}
      <div className="section">
        <div className="section-header">
          <div className="icon">
            <img src={GVA1} alt="Thumbs Up"className='anh1'/> 
          </div>
          <h2 className="section-title">BẢO MẪU</h2>
        </div>
        <p className="section-description">
          Đội ngũ bảo mẫu sạch sẽ, cẩn thận, yêu thương trẻ, tận tâm trong công việc. Tất cả các cô nuôi đều có chứng chỉ cô nuôi dạy trẻ do trường Đại Học Sư Phạm thành phố Hồ Chí Minh, trường Cao Đẳng Sư Phạm Mẫu Giáo Trung Ương 3, trường Đại Học Sài Gòn cấp. Tất cả các cô nuôi đều được tham dự các khóa học sơ cấp cứu và vệ sinh an toàn thực phẩm.
        </p>
      </div>

      {/* Section: Cấp Dưỡng */}
      <div className="section">
        <div className="section-header">
          <div className="icon">
            <img src={GVA2} alt="Thumbs Up" className='anh1'/> 
          </div>
          <h2 className="section-title">ĐỘI NGŨ CẤP DƯỠNG</h2>
        </div>
        <p className="section-description">
          Trường Mầm Non Anh Đào có một đội ngũ cấp dưỡng nhiều năm kinh nghiệm, được đào tạo chuyên nghiệp phục vụ cho trẻ mầm non. Có chứng chỉ vệ sinh an toàn thực phẩm, sức khỏe tốt, có chứng chỉ nấu ăn chuyên nghiệp.
        </p>
      </div>

      {/* Section: Tư Vấn Viên */}
      <div className="section">
        <div className="section-header">
          <div className="icon">
            <img src={GV} alt="Thumbs Up" className='anh1'/> 
          </div>
          <h2 className="section-title">ĐỘI NGŨ TƯ VẤN VIÊN</h2>
        </div>
        <p className="section-description">
          Có trình độ chuyên môn về giáo dục mầm non. Luôn tận tình hướng dẫn, trả lời tất cả những thắc mắc, ghi nhận tất cả yêu cầu từ quý phụ huynh và sẵn sàng hỗ trợ khi quý phụ huynh cần sự giúp đỡ.
        </p>
      </div>

      {/* Section: Nhân Viên Phục Vụ */}
      <div className="section">
        <div className="section-header">
          <div className="icon">
            <img src={GVA} alt="Thumbs Up"className='anh1'/> 
          </div>
          <h2 className="section-title">ĐỘI NGŨ NHÂN VIÊN PHỤC VỤ, BẢO VỆ</h2>
        </div>
        <p className="section-description">
          Có sức khỏe tốt, tận tụy, nhiệt tình, cẩn thận, chu đáo. Có nghiệp vụ chuyên môn để thực hiện tốt nhiệm vụ.
        </p>
        <img src={GVA4} alt="Thumbs Up"className='anh1'/> 
      </div>
    </div>
  );
};

export default GioiThieuDoiNguGiaoVien;


