import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';
import Menu from '../UserMenu/Menu';
import UserFooter from '../UserFooter/UserFooter';
import './UserHomePage.scss';

const UserHomePage = () => {
  return (
    <div className='userHomePage'>
      <div className='userHeader'>
        <UserHeader />
      </div>
      <div className='userContent'>
        <div className='userMenu'>
          <Menu />
        </div>
        <div className='userDetail'>
          <Outlet />
        </div>  
      </div>
      <div className='userFooter'>
        <UserFooter />
      </div> 
    </div>
  );
};

export default UserHomePage;
