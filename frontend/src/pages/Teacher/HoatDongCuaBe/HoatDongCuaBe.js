import React from 'react';
import { useNavigate } from 'react-router-dom';
import ST from '../../../assets/images/ST.jpg';
import BT from '../../../assets/images/BT.jpg';
import BTT from '../../../assets/images/BTT.jpg';
import HeaderContent from '../../../components/Admin/HeaderContent/HeaderContent';
import './HoatDongCuaBe.scss';

const activities = [
    { id: 1, name: "Tham Quan Sở Thú", description: "Chuyến tham quan Sở Thú giúp bé khám phá động vật và thiên nhiên.", image: ST },
    { id: 2, name: "Tham Quan Vườn Bách Thảo", description: "Trải nghiệm thiên nhiên qua chuyến đi tham quan Vườn Bách Thảo.", image: BT },
    { id: 3, name: "Tham Quan Bảo Tàng", description: "Khám phá lịch sử và văn hóa qua chuyến tham quan Bảo Tàng.", image: BTT },
];

const HoatDongCuaBe = () => {
    const navigate = useNavigate();

    return (
        <div className="hoat-dong">
            <HeaderContent nameNavigate={"Hoạt Động Của Bé"} />
            <div className="hoat-dong-list">
                {activities.map((activity) => (
                    <div key={activity.id} className="hoat-dong-item">
                        <div className="hoat-dong-image">
                            <img src={activity.image} alt={activity.name} />
                        </div>
                        <div className="hoat-dong-content">
                            <h2>{activity.name}</h2>
                            <p>{activity.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HoatDongCuaBe;
