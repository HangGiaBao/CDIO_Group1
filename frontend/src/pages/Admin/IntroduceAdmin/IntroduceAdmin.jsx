import React, { useEffect } from 'react'
import "./style.scss"
import image from "../../../assets/images/image.png"
import HeaderContent from '../../../components/Admin/HeaderContent/HeaderContent'
import ActionComponent from '../../../components/ActionComponent/ActionComponent'
const IntroduceAdmin = () => {
    const [modalAdd, setModalAdd] = React.useState(false);
    const [active, setActive] = React.useState(false);
    const [toggle, setToggle] = React.useState(false);

    const toggleModal = () => {
        setActive(true);
        setToggle(true);
    }
    const toggleModal1 = () => {
      setActive(false);
      setToggle(false);
      setModalAdd(false);
    }
    useEffect(() => {
      toggleModal1()
    }, [modalAdd])
  return (
    <div>
       <HeaderContent nameNavigate={"Giới thiệu"}/>
       <div className='infoSchool'>
         <h2>Giới thiệu trường</h2>
            <p>Trường mầm non Gia Viên An</p>
            <p>Địa chỉ: 123, Đường ABC, Quận XYZ, TP.HCM</p>
            <p>Số điện thoại: 0123456789</p>
            <p>Email:dasdasdss</p>
            <p>Website: www.giavienan.com</p>
           
       </div>
        <div className='admin-page'>
            <div>
              <div>
                <img src={image} alt="Hình" />
              </div>
              <div>
                <h2>Admin Page</h2>
                <p>Đây là trang quản trị</p>
                
              </div>
            </div>
          </div>
          <ActionComponent btn1={"Xác nhận"} btn2={"Hủy"} btn3={"Cập Nhât"} setModal={setModalAdd} toggle={toggle} setActive={setActive} toggleModal={toggleModal} toggleModal1={toggleModal1}/>
    </div>
  )
}

export default IntroduceAdmin