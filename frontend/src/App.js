import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import AdminHomePage from "./components/Admin/AdminHomePage/AdminHomePage";
import UserHomePage from "./components/User/UserhomePage/UserHomePage";
import GioiThieuDoiNguGiaoVien from "./components/User/UserDetail/GioiThieuDoiNguGiaoVien/GioiThieuDoiNguGiaoVien";
import GioiThieuTruong from "./components/User/UserDetail/GioiThieuTruong/GioiThieuTruong";
import HoatDongCuaBe from "./components/User/UserDetail/HoatDongCuaBe/HoatDongCuaBe";
import HocPhi from "./components/User/UserDetail/HocPhi/HocPhi";
import HocTap from "./components/User/UserDetail/HocTap/HocTap";
import SuKien from "./components/User/UserDetail/SuKien/SuKien";
import ThoiKhoaBieu from "./components/User/UserDetail/ThoiKhoaBieu/ThoiKhoaBieu";
import ThongTinCuaBe from "./components/User/UserDetail/ThongTinCuaBe/ThongTinCuaBe";
import ThongTinGiaoVienChuNhiem from "./components/User/UserDetail/ThongTinGiaoVienChuNhiem/ThongTinGiaoVienChuNhiem";
import ThucDon from "./components/User/UserDetail/ThucDon/ThucDon";
import VuiChoi from "./components/User/UserDetail/VuiChoi/VuiChoi";



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/admin" element={<AdminHomePage />} />
            <Route path="/user" element={<UserHomePage />} >
                <Route path="GioiThieuDoiNguGiaoVien" element={<GioiThieuDoiNguGiaoVien />} />
                <Route path="GioiThieuTruong" element={<GioiThieuTruong />}/>
                <Route path="HoatDongCuaBe" element={<HoatDongCuaBe />}/>
                <Route path="HocTap" element={<HocTap />}/>
                <Route path="SuKien" element={<SuKien />}/>
                <Route path="ThoiKhoaBieu" element={<ThoiKhoaBieu/>}/>
                <Route path="ThongTinCuaBe" element={<ThongTinCuaBe />}/>
                <Route path="ThongTinGiaoVienChuNhiem" element={<ThongTinGiaoVienChuNhiem />}/>
                <Route path="ThucDon" element={<ThucDon />}/>
                <Route path="VuiChoi" element={<VuiChoi />}/>     
                <Route path="HocPhi" element={<HocPhi />}/>          
            </Route>
        </Routes>
    );
};

export default App;
