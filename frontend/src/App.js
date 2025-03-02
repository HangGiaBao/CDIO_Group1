import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import AdminHomePage from "./components/Admin/AdminHomePage/AdminHomePage";
import UserHomePage from "./components/User/UserhomePage/UserHomePage";
import GioiThieu from "./components/User/UserDetail/GioiThieuDoiNguGiaoVien/GioiThieuDoiNguGiaoVien";
import GioiThieu2 from "./components/User/UserDetail/GioiThieuTruong/GioiThieuTruong"
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/admin" element={<AdminHomePage />} />
            <Route path="/user" element={<UserHomePage />} >
                <Route index element={<GioiThieu />} />
                <Route path="gioithieu2" element={<GioiThieu2 />}/>
            </Route>
        </Routes>
    );
};

export default App;
