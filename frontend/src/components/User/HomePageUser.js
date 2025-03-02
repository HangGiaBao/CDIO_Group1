import React from "react";
import UserHeader from "./UserHeader/UserHeader";  // Import header
import UserMenu from "./UserMenu/Menu";           // Import menu
import UserDetail from "./UserDetail/UserDetail"; // Import chi tiết người dùng

const HomePageUser = () => {
    return (
        <div>
            <UserHeader />  {/* Header của trang */}
            <UserMenu />    {/* Menu bên trái hoặc trên */}
            <UserDetail />  {/* Chi tiết người dùng */}
            
        </div>
    );
};

export default HomePageUser;
