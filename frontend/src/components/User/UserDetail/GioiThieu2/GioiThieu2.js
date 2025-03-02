import React from 'react'
import { useNavigate } from 'react-router-dom';

const GioiThieu2 =  () =>{
    const navigate = useNavigate();
    const hanldeNhay1 = () =>{
        navigate("/user")
    }
  return (
    <div>GioiThieu 2
        <button onClick={()=> hanldeNhay1()}> ok</button>
    </div>
  )
}

export default GioiThieu2;