import React from 'react'
import { useNavigate } from 'react-router-dom'

const GioiThieu= () =>{
    const navigate = useNavigate();
    const handleClickNhay = () => {
        navigate("gioithieu2")
    }
  return (
    <div>GioiThieu
        <div className="qua">
            <button onClick={() => handleClickNhay()}>ok</button>
        </div>
    </div>
  )
}

export default GioiThieu