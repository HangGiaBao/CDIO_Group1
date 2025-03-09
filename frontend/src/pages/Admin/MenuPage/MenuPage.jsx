import React, { useEffect } from 'react'
import MenuTable from '../../../components/Admin/MenuTable/MenuTable'
import MenuSchedule from '../../../components/Admin/MenuSchedule/MenuSchedule'
import ActionComponent from '../../../components/ActionComponent/ActionComponent'
import HeaderContent from '../../../components/Admin/HeaderContent/HeaderContent'

const MenuPage = () => {
      const [active, setActive] = React.useState(false);
      const [active1, setActive1] = React.useState(false);
      const [toggle, setToggle] = React.useState(false);
      const [modalAdd, setModalAdd] = React.useState(false);
      const toggleModal = () => {
          setActive(true);
          setToggle(true);
      }
      const toggleModal1 = () => {
        setActive(false);
        setToggle(false);
        setActive1(false)
    }
    useEffect(()=>{
      if (modalAdd){
        toggleModal1()
        setActive1(true)
      }
    },[modalAdd])
  return (
    <div>
        <HeaderContent nameNavigate={"Thực đơn"} Active={false}  nameActive={"Hủy"} toggleModal1={toggleModal1}/>
        {active?<MenuTable/>:<MenuSchedule/>}
        
        <ActionComponent btn1={"Chỉnh sửa"} btn2={"Trở lại"} btn3={modalAdd?"Xác nhận":"Cập Nhât"} active={active1} setModal={setModalAdd} toggle={toggle} setActive={setActive} toggleModal={toggleModal} toggleModal1={toggleModal1}/>
    </div>
  )
}

export default MenuPage