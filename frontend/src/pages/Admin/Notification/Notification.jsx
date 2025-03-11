import React from 'react'
import image from '../../../assets/images/GVA.webp'
import image1 from '../../../assets/images/image.png'
import HeaderContent from '../../../components/Admin/HeaderContent/HeaderContent'
import { useLocation } from 'react-router-dom'
import ActionComponent from '../../../components/ActionComponent/ActionComponent'
const Notification = () => {
    const [modalAdd, setModalAdd] = React.useState(false);
    const [active, setActive] = React.useState(false);
    const [toggle, setToggle] = React.useState(false);
    const location = useLocation();
    const lastSegment = location.pathname.split("/").filter(Boolean).pop();
    const toggleModal = () => {
        setActive(true);
        setToggle(true);
    }
    const toggleModal1 = () => {
        setActive(false);
        setToggle(false);
        setModalAdd(false);
    }
  return (
    <div>
        <HeaderContent nameNavigate={lastSegment==="babyactivities"?"Hoạt động của bé":lastSegment==="event"?"Sự kiện":""} Active={false}  nameActive={"Hủy"} toggleModal1={toggleModal1}/>
        <div className='admin-page'>
            <div>
            <div>
                <img src={image} alt="Hình" />
            </div>
            <div>
                <h2>Admin Page</h2>
                <p>Đây là trang </p>
                
            </div>
            </div>
            {active&&
            <div>
            <div>
                <img src={image1} alt="Hình" />
            </div>
            <div>
                <h2>Admin Page</h2>
                <p>Đây là trang quản trị</p>
                
            </div>
            </div>
            }
        </div>
        <ActionComponent btn1={"Xác nhận"} btn2={"Hủy"} btn3={"Cập Nhât"} setModal={setModalAdd} toggle={toggle} setActive={setActive} toggleModal={toggleModal} toggleModal1={toggleModal1}/>
    </div>
  )
}

export default Notification