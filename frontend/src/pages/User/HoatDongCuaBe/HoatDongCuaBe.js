import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ST from '../../../assets/images/ST.jpg';
import BT from '../../../assets/images/BT.jpg';
import BTT from '../../../assets/images/BTT.jpg';
import HeaderContent from '../../../components/Admin/HeaderContent/HeaderContent';
import './HoatDongCuaBe.scss';

const HoatDongCuaBe = () => {
    const [modalAdd, setModalAdd] = React.useState(false);
    const [active, setActive] = React.useState(false);
    const [toggle, setToggle] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const lastSegment = location.pathname.split("/").filter(Boolean).pop();
    
    const toggleModal1 = () => {
        setActive(false);
        setToggle(false);
        setModalAdd(false);
    };

    const hanldeNhay1 = () => {
        navigate("/HoatDongCuaBe");
    };

    return (
        <div>
            <HeaderContent nameNavigate={"Hoạt Động Của Bé"} />
            <div className="HoatDong">
                <div className="HoatDong-item">
                    <div className="HoatDong-image">
                        <img src={ST} alt="Tham Quan Sở Thú" />
                    </div>
                    <div className="HoatDong-content">
                        <h2>Tham Quan Sở Thú</h2>
                        <p>Chuyến tham quan Sở Thú dành cho các bé mầm non, giúp bé khám phá động vật và thiên nhiên.</p>
                    </div>
                </div>
                <div className="HoatDong-item">
                    <div className="HoatDong-image">
                        <img src={BT} alt="Tham Quan Vườn Bách Thảo" />
                    </div>
                    <div className="HoatDong-content">
                        <h2>Tham Quan Vườn Bách Thảo</h2>
                        <p>Trải nghiệm thiên nhiên qua chuyến đi tham quan Vườn Bách Thảo, học hỏi về các loài cây và hoa.</p>
                    </div>
                </div>
                <div className="HoatDong-item">
                    <div className="HoatDong-image">
                        <img src={BTT} alt="Tham Quan Bảo Tàng" />
                    </div>
                    <div className="HoatDong-content">
                        <h2>Tham Quan Bảo Tàng</h2>
                        <p>Khám phá lịch sử và văn hóa qua chuyến tham quan Bảo Tàng, giúp bé mở rộng kiến thức.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HoatDongCuaBe;

