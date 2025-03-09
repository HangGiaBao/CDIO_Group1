import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './GioiThieu.scss'; // Import SCSS
import background1 from "../../../assets/images/background1.jpg"
import background4 from "../../../assets/images/background4.jpg"
import backgroud3 from "../../../assets/images/backgroud3.jpg"
const GioiThieuTruong = () => {
  const navigate = useNavigate();

  const handleClickNhay = () => {
    navigate("/GioiThieuTruong");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="gioi-thieu-container">
      {/* Carousel section */}
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <img
              src={background1} alt="Placeholder 1"
              className="carousel-image"
            />
          </div>
          <div>
            <img
               src={background4}
              alt="Placeholder 2"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src={backgroud3}
              alt="Placeholder 3"
              className="carousel-image"
            />
          </div>
        </Slider>
      </div>

      {/* Content below carousel */}
      <h1 className="title">Little Angel</h1>
      <h2 className="subtitle">CHƯƠNG TRÌNH THÔNG MINH CẢM XÚC HOA KỲ</h2>
      <p className="description">
        DÀNH CHO TRẺ MẦM NON ĐƯỢC GIẢNG DẠY TỪ NĂM HỌC 2019-2020
      </p>
      <h2 className="section-title">GIỚI THIỆU VỀ TRƯỜNG</h2>
      <p className="section-text">
    Trường Mầm non Little Angel là một môi trường giáo dục lý tưởng dành cho các bé từ 2 đến 6 tuổi, 
    nơi các em không chỉ được học mà còn được khám phá, phát triển và trưởng thành trong một không gian tràn đầy yêu thương, 
    sáng tạo và đam mê học hỏi. Với phương châm "Học mà chơi, chơi mà học", 
    Little Angel tạo ra một môi trường học tập năng động và đầy màu sắc, nơi trẻ em được tự do thể hiện bản thân, 
    phát huy trí tưởng tượng và khám phá thế giới xung quanh qua các hoạt động học tập đa dạng, từ vẽ tranh, làm thủ công, đến các trò chơi vận động. Trẻ được học qua việc trải nghiệm, không chỉ qua sách vở, giúp trẻ phát triển khả năng tư duy, sáng tạo và kỹ năng giải quyết vấn đề ngay từ khi còn nhỏ. Chương trình giảng dạy của trường được xây dựng dựa trên các phương pháp giáo dục tiên tiến, kết hợp giữa giáo dục truyền thống và các kỹ năng sống hiện đại. Các môn học như Toán học, Ngữ văn, Khoa học, và Nghệ thuật được thiết kế phù hợp với lứa tuổi, nhằm giúp trẻ phát triển toàn diện về trí tuệ, cảm xúc và thể chất. Học sinh không chỉ học cách làm bài, mà còn học cách làm người, học cách tôn trọng, yêu thương và chia sẻ. Bên cạnh việc phát triển trí tuệ, Trường Mầm non Little Angel đặc biệt chú trọng đến việc nuôi dưỡng những giá trị đạo đức và nhân văn cho trẻ, khuyến khích các em luôn tôn trọng sự khác biệt, đoàn kết và yêu thương nhau. Trẻ sẽ được học cách giao tiếp, làm việc nhóm và giải quyết xung đột một cách hòa bình, góp phần xây dựng nền tảng vững chắc cho một tương lai tươi sáng. Ngoài ra, trường còn tổ chức các buổi ngoại khóa, các chuyến tham quan và hoạt động ngoài trời nhằm tăng cường sự kết nối giữa trẻ với thiên nhiên và cộng đồng. Những hoạt động này không chỉ giúp trẻ rèn luyện thể chất mà còn kích thích trí tò mò và sự khám phá của trẻ về thế giới xung quanh. Với đội ngũ giáo viên tận tâm, giàu kinh nghiệm và luôn sáng tạo trong công tác giảng dạy, Trường Mầm non Little Angel cam kết mang đến cho trẻ một nền giáo dục vững chắc, một nền tảng tốt để các em phát triển trở thành những công dân toàn cầu với đầy đủ kiến thức, kỹ năng và giá trị sống.

      </p>
    </div>
  );
};

export default GioiThieuTruong;

