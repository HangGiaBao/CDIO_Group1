import React from 'react'
import { useNavigate } from 'react-router-dom'

const GioiThieuTruong= () =>{
    const navigate = useNavigate();
    const handleClickNhay = () => {
        navigate("/GioiThieuTruong")
    }
  return (
    <div>
        
    </div>
  )
}

export default GioiThieuTruong