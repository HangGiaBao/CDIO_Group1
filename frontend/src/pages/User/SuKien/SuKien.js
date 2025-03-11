import React from 'react';
import { useNavigate } from 'react-router-dom';
import Halloween from '../../../assets/images/Halloween.jpg';
import GS from '../../../assets/images/GS.jpg';
import Tet from '../../../assets/images/Tet.jpg';
import HeaderContent from '../../../components/Admin/HeaderContent/HeaderContent';
import './SuKien.scss';

const events = [
    { id: 1, name: "Halloween", date: "31/10/2025", image: Halloween },
    { id: 2, name: "Giáng Sinh", date: "25/12/2025", image: GS },
    { id: 3, name: "Tết Âm", date: "10/02/2026", image: Tet },
];

const SuKien = () => {
    const navigate = useNavigate();

    return (
        <div className="su-kien">
            <HeaderContent nameNavigate={"Sự Kiện"} />
            <div className="su-kien-list">
                {events.map((event) => (
                    <div key={event.id} className="su-kien-item">
                        <div className="su-kien-image">
                            <img src={event.image} alt={event.name} />
                        </div>
                        <div className="su-kien-content">
                            <h2>{event.name}</h2>
                            <p>Sự kiện {event.name} sẽ bắt đầu từ ngày {event.date}.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuKien;
