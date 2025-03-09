import React from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
const HeaderContent = ({nameNavigate,Active,nameActive,toggleModal1}) => {
  
  return (
    <div className='headerContent'>
        <div className='linkNavigate'>
            <Link to="">{nameNavigate} &gt;</Link>
        </div>
        {Active && 
        <div onClick={()=>toggleModal1()}>
            <button>{nameActive}</button>
        </div>}
       
    </div>
  )
}

export default HeaderContent