import React from 'react'
import UserHeader from '../TeacherHeader/TeacherHeader'
import Menu from '../MenuTeacher/Menu'
import UserDetail from '../TeacherDetail/TeacherDetail'
import './TeacherHomePage.scss'  
import TeacherFooter from '../TeacherFooter/TeacherFooter'

const UserHomePage = () => {
  return (
    <div className='teacherHomePage'>
      <div className='teacherHeader'>
        <UserHeader />
      </div>
      <div className='teacherContent'>
        <div className='teacherMenu'>
          <Menu />
        </div>
        <div className='teacherDetail'>
          <UserDetail />
        </div>
      </div>
      <div className='teacherFooter'>
        <TeacherFooter />
      </div> 
    </div>
  )
}

export default UserHomePage
