import React from 'react'
import TeacherTable from '../../../components/Admin/TeacherTable/TeacherTable'
import HeaderContent from '../../../components/Admin/HeaderContent/HeaderContent'
import ActionComponent from '../../../components/ActionComponent/ActionComponent';

const IntroduceTeacher = () => {
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
  return (
    <div>
         <HeaderContent nameNavigate={"Giới thiệu đội ngũ giáo viên"} Active={active}  nameActive={"Thêm"} toggleModal1={toggleModal1}/>
        <TeacherTable/>
        <ActionComponent btn1={"Xác nhận"} btn2={"Hủy"} btn3={"Cập Nhât"} setModal={setModalAdd} toggle={toggle} setActive={setActive} toggleModal={toggleModal} toggleModal1={toggleModal1}/>
    </div>
  )
}

export default IntroduceTeacher