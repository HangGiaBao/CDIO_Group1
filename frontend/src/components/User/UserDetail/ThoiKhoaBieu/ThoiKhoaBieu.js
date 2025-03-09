import React from 'react'
import { useNavigate } from 'react-router-dom';

const ThoiKhoaBieu =  () =>{
    const navigate = useNavigate();
    const hanldeNhay1 = () =>{
        navigate("/HoatDongCuaBe")
    }
  return (
    <div>
       
    </div>
  )
}

export default ThoiKhoaBieu;