import React from 'react'
import { useNavigate } from 'react-router-dom'

const GioiThieu= () =>{
    const navigate = useNavigate();
    const handleClickNhay = () => {
        navigate("/gioithieu2")
    }
  return (
    <div>
        
    </div>
  )
}

export default GioiThieu