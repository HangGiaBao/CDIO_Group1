import React from 'react'
import "./style.scss"
const ActionComponent = ({setModal,toggleModal,toggleModal1,toggle,btn1,btn2,btn3,active}) => {

  return (
    <div className='actionComponent'>
        {toggle ? 
        <>
            <button className='change' onClick={()=>setModal(true)}>{btn1}</button>
            <button onClick={()=>toggleModal1()}>{btn2}</button>
        </>
        :
        <>
            <button className={`${active?"":"change"}`} onClick={()=>{toggleModal();if(active)setModal(false)}}>{btn3}</button>
        </>
        }
       
    </div>
  )
}

export default ActionComponent