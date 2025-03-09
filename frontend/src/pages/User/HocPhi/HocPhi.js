import React from 'react'
import { useNavigate } from 'react-router-dom';

const HocPhi =  () =>{
    const navigate = useNavigate();
    const hanldeNhay1 = () =>{
        navigate("/HoatDongCuaBe")
    }
  return (
    <div>
       
    </div>
  )
}

export default HocPhi;