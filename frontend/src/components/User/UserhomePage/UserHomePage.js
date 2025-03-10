import React from 'react';
import UserHeader from '../UserHeader/UserHeader';
import Menu from '../UserMenu/Menu';
import UserDetail from '../UserDetail/UserDetail';
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
          <UserDetail />
        </div>  
      </div>
      <div className='userFooter'>
        <UserFooter />
      </div> 
    </div>
  );
};

export default UserHomePage;
