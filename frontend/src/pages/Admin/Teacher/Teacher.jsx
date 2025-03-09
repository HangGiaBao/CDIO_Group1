import React, { useEffect } from 'react'
import image from '../../../assets/images/GVA.webp'
import image1 from '../../../assets/images/image.png'
import './style.scss'
import ActionComponent from '../../../components/ActionComponent/ActionComponent'
import HeaderContent from '../../../components/Admin/HeaderContent/HeaderContent'
const Teacher = () => {
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
      useEffect(()=>{
        toggleModal1()
      },[modalAdd])
  return (
    <div>
         <HeaderContent nameNavigate={"Thông tin của giáo viên"}/>
        <div className='teacher'>
            <div>
                <p>Tên giáo viên: Nguyễn Văn A </p>
                <p>Giới tính: Nam </p>
                <p>Gmail: nguyenvana@gmail.com </p>
                <p>Số điện thoại: 01304058302 </p>
                <p>dạy lớp: Hoa hồng</p>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
        {active&&  <div className='teacher'>
            <div>
                <p>Tên giáo viên: <input type="text" />  </p>
                <p>Giới tính: <input type="text" />  </p>
                <p>Gmail: <input type="text" />  </p>
                <p>Số điện thoại: <input type="text" />  </p>
                <p>dạy lớp: <input type="text" /> </p>
            </div>
            <div>
                <img src={image1} alt="" />
            </div>
        </div>}
      
        <ActionComponent btn1={"Xác nhận"} btn2={"Hủy"} btn3={"Cập Nhât"} setModal={setModalAdd} toggle={toggle} setActive={setActive} toggleModal={toggleModal} toggleModal1={toggleModal1}/>
    </div>
  )
}

export default Teacher