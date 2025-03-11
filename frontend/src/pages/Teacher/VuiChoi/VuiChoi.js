import React, { useState, useEffect } from "react";
import axios from "axios";
import "./VuiChoi.scss";

const VuiChoi = () => {
  const [VuiChoiData, setVuiChoiData] = useState([]);

  useEffect(() => {
    const fetchVuiChoi = async () => {
      try {
        const response = await axios.get("http://localhost:5001/v1/vuichoi");
        setVuiChoiData(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu học tập:", error);
      }
    };

    fetchVuiChoi();
  }, []);

  return (
    <div className="content">
      <h2>Vui Chơi</h2>
      {VuiChoiData.map((item, index) => (
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

export default VuiChoi;
