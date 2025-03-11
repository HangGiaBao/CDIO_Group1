import React from 'react';
import './GioiThieuDoiNguGiaoVien.scss';
import { useNavigate } from 'react-router-dom';
import GVA3 from "../../../assets/images/GVA3.jpg";
import GVA1 from "../../../assets/images/GVA1.jpeg";
import GVA from "../../../assets/images/GVA.webp";
import GV from "../../../assets/images/GV.jpg";
import GV2 from "../../../assets/images/GV2.jpg";
import GVA2 from "../../../assets/images/GVA2.jpg";
import GVA4 from "../../../assets/images/GVA4.png";

const GioiThieuDoiNguGiaoVien = () => {
  const navigate = useNavigate();

  const handleClickNhay = () => {
    navigate("/GioiThieuDoiNguGiaoVien");
  };

  return (
    <div className="container">
      <h1 className="title1">ĐỘI NGŨ NHÂN SỰ</h1>
      <p className="intro-description">
        Đội ngũ nhân sự của Trường Mầm Non Anh Đào bao gồm các cán bộ quản lý, giáo viên, bảo mẫu, cấp dưỡng và nhân viên phục vụ có trình độ chuyên môn cao, yêu nghề, tận tâm và trách nhiệm. Chúng tôi cam kết mang lại môi trường học tập an toàn, thân thiện và phát triển toàn diện cho trẻ.      </p>

      <div className="section">
        <div className="section-header">
          <div className="icon">
            <img src={GVA3} alt="Thumbs Up" className='anh1' />
          </div>
          <h1 className="title1">BAN GIÁM HIỆU</h1>
        </div>
        <p className="section-description">Ban Giám Hiệu của trường là những người có kinh nghiệm lâu năm trong lĩnh vực giáo dục mầm non, có trình độ chuyên môn cao và luôn tận tâm với sự nghiệp giáo dục trẻ em.</p>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="icon">
            <img src={GV2} alt="Thumbs Up" className='anh1' />
          </div>
          <h1 className="title1">GIÁO VIÊN</h1>
        </div>
        <p className="section-description">
          Đội ngũ giáo viên của trường là những người có chuyên môn vững vàng, luôn tận tâm, yêu thương trẻ và không ngừng học hỏi, sáng tạo để nâng cao chất lượng giảng dạy.
        </p>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="icon">
            <img src={GVA1} alt="Thumbs Up" className='anh1' />
          </div>
          <h1 className="title1">BẢO MẪU</h1>
        </div>
        <p className="section-description">
          Đội ngũ bảo mẫu có đầy đủ chứng chỉ chuyên môn, giàu kinh nghiệm, chu đáo và tận tâm trong việc chăm sóc trẻ, tạo môi trường an toàn và thân thiện.
        </p>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="icon">
            <img src={GVA2} alt="Thumbs Up" className='anh1' />
          </div>
          <h1 className="title1">ĐỘI NGŨ CẤP DƯỠNG</h1>
        </div>
        <p className="section-description">
          Những cô cấp dưỡng có nhiều năm kinh nghiệm, được đào tạo bài bản về dinh dưỡng và vệ sinh an toàn thực phẩm, đảm bảo cung cấp những bữa ăn ngon miệng và đầy đủ dinh dưỡng cho trẻ.
        </p>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="icon">
            <img src={GV} alt="Thumbs Up" className='anh1' />
          </div>
          <h1 className="title1">ĐỘI NGŨ TƯ VẤN VIÊN</h1>
        </div>
        <p className="section-description">
          Tư vấn viên của trường luôn sẵn sàng hỗ trợ, giải đáp thắc mắc của phụ huynh, đồng thời cung cấp thông tin cần thiết để giúp các bậc cha mẹ yên tâm khi gửi gắm con em mình.
        </p>
      </div>
      <div className="section">
  <div className="section-header">
    <div className="icon">
      <img src={GV} alt="Nhân viên phục vụ và bảo vệ" className="anh1" />
    </div>
    <h1 className="title2">ĐỘI NGŨ NHÂN VIÊN PHỤC VỤ, BẢO VỆ</h1>
  </div>
  <p className="section-description1">
    Nhân viên phục vụ và bảo vệ của trường là những người tận tụy, nhiệt tình, luôn đảm bảo sự sạch sẽ, an toàn và trật tự trong khuôn viên trường học.
  </p>
  <div className="icon">
    <img src={GVA4} alt="Nhân viên phục vụ và bảo vệ" className="anh2" />
  </div>
</div>



    </div>
  );
};

export default GioiThieuDoiNguGiaoVien;



