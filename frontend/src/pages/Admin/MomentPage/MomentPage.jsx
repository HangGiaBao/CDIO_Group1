import React from 'react'
import image1  from "../../../assets/images/image1.png"
import image2  from "../../../assets/images/image2.png"
import "./style.scss"
import ActionComponent from '../../../components/ActionComponent/ActionComponent'
import HeaderContent from '../../../components/Admin/HeaderContent/HeaderContent'
import { useLocation } from 'react-router-dom'
const MomentPage = () => {
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
        <HeaderContent nameNavigate={lastSegment==="learning"?"Học tập":lastSegment==="entertainment"?"Vui chơi":""} Active={active}  nameActive={"Hủy"} toggleModal1={toggleModal1}/>
        <div className='momentPage'>
            <div>              
                <img src={image1} alt="" />
                <button className='activedecrease'>-</button>
                <div className={`buttonadd ${modalAdd ? 'active' : ''}`}>
                    <img src={image2} alt="" />
                </div >
                <ActionComponent btn1={"Thêm ảnh"} btn2={"Xác nhận"} btn3={"Cập Nhât"} setModal={setModalAdd} toggle={toggle} setActive={setActive} toggleModal={toggleModal} toggleModal1={toggleModal1}/>
            </div>
        
        </div>
    </div>
  )
}

export default MomentPage