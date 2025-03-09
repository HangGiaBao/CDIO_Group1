import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
<<<<<<< HEAD
import UserHomePage from "./components/User/UserhomePage/UserHomePage";
import GioiThieuDoiNguGiaoVien from "./pages/User/GioiThieuDoiNguGiaoVien/GioiThieuDoiNguGiaoVien";
import GioiThieuTruong from "./pages/User/GioiThieuTruong/GioiThieuTruong";
import HoatDongCuaBe from "./pages/User/HoatDongCuaBe/HoatDongCuaBe";
import HocPhi from "./pages/User/HocPhi/HocPhi";
import HocTap from "./pages/User/HocTap/HocTap";
import SuKien from "./pages/User/SuKien/SuKien";
import ThoiKhoaBieu from "./pages/Teacher/ThoiKhoaBieu/ThoiKhoaBieu";
import ThongTinCuaBe from "./pages/User/ThongTinCuaBe/ThongTinCuaBe";
import ThongTinGiaoVienChuNhiem from "./pages/User/ThongTinGiaoVienChuNhiem/ThongTinGiaoVienChuNhiem";
import ThucDon from "./pages/User/ThucDon/ThucDon";
import VuiChoi from "./pages/User/VuiChoi/VuiChoi";
import HomePageAdmin from "./pages/Admin/HomePageAdmin";
import MenuPage from "./pages/Admin/MenuPage/MenuPage";
import MomentPage from "./pages/Admin/MomentPage/MomentPage";
import ListClass from "./pages/Admin/ListClass/ListClass";
import ClassDetail from "./pages/Admin/ClassDetail/ClassDetail";
import ClassSchedule from "./pages/Admin/ClassSchedule/ClassSchedule";
import AdminPage from "./pages/Admin/AdminPage/AdminPage";
import IntroduceAdmin from "./pages/Admin/IntroduceAdmin/IntroduceAdmin";
import IntroduceTeacher from "./pages/Admin/IntroduceTeacher/IntroduceTeacher";
import Notification from "./pages/Admin/Notification/Notification";
import Teacher from "./pages/Admin/Teacher/Teacher";
import Tuition from "./pages/Admin/Tuition/Tuition";
import ScheduleTable from "./components/Admin/ScheduleTable/ScheduleTable";
import MenuSchedule from "./components/Admin/MenuSchedule/MenuSchedule";
import UserClassDetail from "./pages/User/ThongTinCuaBe/ClassDetailUser";
import TeacherPage from "./components/Teacher/TeacherHomePage/TeacherHomePage";
import GioiThieuDoiNguGiaoVien1 from "./pages/Teacher/GioiThieuDoiNguGiaoVien/GioiThieuDoiNguGiaoVien";
import GioiThieuTruong1 from "./pages/Teacher/GioiThieuTruong/GioiThieuTruong";
import HoatDongCuaBe1 from "./pages/Teacher/HoatDongCuaBe/HoatDongCuaBe";
import HocTap1 from "./pages/Teacher/HocTap/HocTap";
import SuKien1 from "./pages/Teacher/SuKien/SuKien";
import ThoiKhoaBieu1 from "./pages/Teacher/ThoiKhoaBieu/ThoiKhoaBieu";
import ThongTinCuaBe1 from "./pages/Teacher/ThongTinCuaBe/ThongTinCuaBe";
import ThongTinGiaoVienChuNhiem1 from "./pages/Teacher/ThongTinGiaoVienChuNhiem/ThongTinGiaoVienChuNhiem";
import ThucDon1 from "./pages/Teacher/ThucDon/ThucDon";
import VuiChoi1 from "./pages/Teacher/VuiChoi/VuiChoi";
=======
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



>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
<<<<<<< HEAD
            
            <Route path="/admin" element={<HomePageAdmin />}>
                <Route path="" element={<AdminPage />} />
                <Route path="listclass" element={<ListClass />} />
                <Route path="classdetail/:id" element={<ClassDetail />} />
                <Route path="classschedule/:id" element={<ClassSchedule />} />
                <Route path="introduce" element={<IntroduceAdmin />} />
                <Route path="introduceteacher" element={<IntroduceTeacher />} />
                <Route path="menupage" element={<MenuPage />} />
                <Route path="learning" element={<MomentPage />} />
                <Route path="entertainment" element={<MomentPage />} />
                <Route path="event" element={<Notification />} />
                <Route path="babyactivities" element={<Notification />} />
                <Route path="teacher" element={<Teacher />} />
                <Route path="tuition" element={<Tuition />} />
                <Route path="ScheduleTable" element={<ScheduleTable />} />
                <Route path="MenuSchedule" element={<MenuSchedule />} />
            </Route>
            
            <Route path="/user" element={<UserHomePage />}>
                <Route path="GioiThieuDoiNguGiaoVien" element={<GioiThieuDoiNguGiaoVien />} />
                <Route path="GioiThieuTruong" element={<GioiThieuTruong />} />
                <Route path="HoatDongCuaBe" element={<HoatDongCuaBe />} />
                <Route path="HocTap" element={<HocTap />} />
                <Route path="SuKien" element={<SuKien />} />
                <Route path="ThoiKhoaBieu" element={<ThoiKhoaBieu />} />
                <Route path="ThongTinCuaBe" element={<ThongTinCuaBe />} />
                <Route path="ThongTinGiaoVienChuNhiem" element={<ThongTinGiaoVienChuNhiem />} />
                <Route path="ThucDon" element={<ThucDon />} />
                <Route path="VuiChoi" element={<VuiChoi />} />
                <Route path="HocPhi" element={<HocPhi />} />
                <Route path="classdetail/:id" element={<UserClassDetail />} />
            </Route>
            <Route path="/teacher" element={<TeacherPage />}>
            <Route path="TeacherPage" element={<TeacherPage />} />
            <Route path="GioiThieuDoiNguGiaoVien1" element={<GioiThieuDoiNguGiaoVien1 />} />
            <Route path="HoatDongCuaBe1" element={<HoatDongCuaBe1 />} />
            <Route path="HocTap1" element={<HocTap1 />} />
            <Route path="GioiThieuTruong1" element={<GioiThieuTruong1 />} />
            <Route path="SuKien1" element={<SuKien1 />} />
            <Route path="ThoiKhoaBieu1" element={<ThoiKhoaBieu1 />} />
            <Route path="ThongTinCuaBe1" element={<ThongTinCuaBe1 />} />
            <Route path="ThongTinGiaoVienChuNhiem1" element={<ThongTinGiaoVienChuNhiem1/>} />
            <Route path="ThucDon1" element={<ThucDon1 />} />
            <Route path="VuiChoi1" element={<VuiChoi1 />} />
=======
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
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
            </Route>
        </Routes>
    );
};

export default App;
