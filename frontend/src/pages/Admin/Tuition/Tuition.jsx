import React, { useEffect } from 'react'
import HeaderContent from '../../../components/Admin/HeaderContent/HeaderContent'
import ActionComponent from '../../../components/ActionComponent/ActionComponent'
import './style.scss'
const Tuition = () => {
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
        <HeaderContent nameNavigate={"Học phí"}/>
        {!active?
          <div className='actionComponent'>
          <button className='change'>
              Chọn năm học 
          </button>
          <button className='change'>
              Chọn kỳ học 
          </button>
      </div>:
      <div>
        <div className="fee-container">
            <p className="fee-container_d">
                Năm học: 2024-2025
                <br />
                Học kỳ II
            </p>
        <table className="fee-table">
            <thead>
            <tr>
                <th>Ngày xuất</th>
                <th>Tên phí</th>
                <th>Số tiền</th>
                <th>Loại tiền</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>00:50:34 - 13/01/2025</td>
                <td>Học phí của trường mẫu giáo XXX</td>
                <td>xxxxxxx</td>
                <td>Việt Nam đồng</td>
            </tr>
            <tr className="total-row">
                <td colSpan="2">Tổng tiền</td>
                <td>xxxxxxx</td>
                <td>Việt Nam đồng</td>
            </tr>
            </tbody>
        </table>
        </div>
        </div>}
      
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <ActionComponent btn1={"Chỉnh sửa"} btn2={"Trờ lại"} btn3={"Cập Nhât"} setModal={setModalAdd} toggle={toggle} setActive={setActive} toggleModal={toggleModal} toggleModal1={toggleModal1}/>
    </div>
  )
}

export default Tuition