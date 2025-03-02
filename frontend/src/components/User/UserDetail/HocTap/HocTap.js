import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HocTap.scss";

const HocTap = () => {
  const [hocTapData, setHocTapData] = useState([]);

  useEffect(() => {
    const fetchHocTap = async () => {
      try {
        const response = await axios.get("http://localhost:5001/v1/hoctap");
        setHocTapData(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu học tập:", error);
      }
    };

    fetchHocTap();
  }, []);

  return (
    <div className="content">
      <h2>Học tập</h2>
      {hocTapData.map((item, index) => (
        <div key={index} className="content-box">
          <img src={item.image} alt="Children studying" className="content-image" />
          <div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HocTap;
