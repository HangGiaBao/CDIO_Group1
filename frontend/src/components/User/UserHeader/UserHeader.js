import React from 'react'
import logo from "../../../assets/images/Logo_image.png"
import "./UserHeader.scss"
const UserHeader = () => {
    return (
        <div className='userHeader-container'>
            <div className="header-logo">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default UserHeader