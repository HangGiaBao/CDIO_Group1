import React from 'react'
import "./HomePageAdmin.scss"
import Menu from '../../components/Admin/MenuAdmin/Menu'
import AdminHeader from '../../components/Admin/HeaderAdmin/AdminHeader'
import { Outlet } from 'react-router-dom'

const HomePageAdmin = () => {
  return (
    <div className='adminPage'>      
      <div>
        <AdminHeader/>
      </div>
      <div className='adminContent'>
        <div>
          <Menu />
        </div>
        <div>
          <Outlet />
        </div>  
      </div>    
      
    </div>
  )
}

export default HomePageAdmin