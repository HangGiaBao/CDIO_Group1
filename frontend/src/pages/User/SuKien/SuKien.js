import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Halloween from '../../../assets/images/Halloween.jpg';
import GS from '../../..//assets/images/GS.jpg';
import Tet from '../../../assets/images/Tet.jpg';
import HeaderContent from '../../../components/Admin/HeaderContent/HeaderContent';
import './SuKien.scss';

const SuKien = () => {
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
        navigate("/SuKien");
    };

    return (
        <div>
            <HeaderContent nameNavigate={"Sự Kiện"} />
            <div className="SuKien">
                <div className="SuKien-item">
                    <div className="SuKien-image">
                        <img src={Halloween} alt="Halloween" />
                    </div>
                    <div className="SuKien-content">
                        <h2>Halloween</h2>
                        <p>Sự Kiện Halloween sẽ bắt đầu từ ngày......................................</p>
                    </div>
                </div>
                <div className="SuKien-item">
                    <div className="SuKien-image">
                        <img src={GS} alt="Giáng Sinh" />
                    </div>
                    <div className="SuKien-content">
                        <h2>Giáng Sinh</h2>
                        <p>Sự Kiện Giáng Sinh sẽ bắt đầu từ ngày.....................................</p>
                    </div>
                </div>
                <div className="SuKien-item">
                    <div className="SuKien-image">
                        <img src={Tet} alt="Tết Âm" />
                    </div>
                    <div className="SuKien-content">
                        <h2>Tết Âm</h2>
                        <p>Sự Kiện Tết Âm sẽ bắt đầu từ ngày..........................</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuKien;
