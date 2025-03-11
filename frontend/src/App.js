import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";

// User Routes
import UserHomePage from "./components/User/UserhomePage/UserHomePage";
import GioiThieuDoiNguGiaoVien from "./pages/User/GioiThieuDoiNguGiaoVien/GioiThieuDoiNguGiaoVien";
import GioiThieuTruong from "./pages/User/GioiThieuTruong/GioiThieuTruong";
import HoatDongCuaBe from "./pages/User/HoatDongCuaBe/HoatDongCuaBe";
import HocPhi from "./pages/User/HocPhi/HocPhi";
import HocTap from "./pages/User/HocTap/HocTap";
import SuKien from "./pages/User/SuKien/SuKien";
import ThongTinCuaBe from "./pages/User/ThongTinCuaBe/ThongTinCuaBe";
import ThongTinGiaoVienChuNhiem from "./pages/User/ThongTinGiaoVienChuNhiem/ThongTinGiaoVienChuNhiem";
import ThucDon from "./pages/User/ThucDon/ThucDon";
import VuiChoi from "./pages/User/VuiChoi/VuiChoi";
import UserClassDetail from "./pages/User/ThongTinCuaBe/ClassDetailUser";
import TeacherListUser from "./pages/User/ThongTinGiaoVienChuNhiem/TeacherListUser";
import ClassScheduleUser from "./pages/User/ThoiKhoaBieu/ClassSchedule";
import ClassScheduleListUser from "./pages/User/ThoiKhoaBieu/ClassScheduleList";

// Admin Routes
import HomePageAdmin from "./pages/Admin/HomePageAdmin";
import MenuPage from "./pages/Admin/MenuPage/MenuPage";
import MomentPage from "./pages/Admin/MomentPage/MomentPage";
import ListClass from "./pages/Admin/ListClass/ListClass";
import ClassDetail from "./pages/Admin/ClassDetail/ClassDetail";
import ClassSchedule from "./pages/Admin/ClassSchedule/ClassSchedule";
import AdminPage from "./pages/Admin/AdminPage/AdminPage";
import IntroduceAdmin from "./pages/Admin/IntroduceAdmin/GioiThieuTruong";
import IntroduceTeacher from "./pages/Admin/IntroduceTeacher/GioiThieuDoiNguGiaoVien";
import Notification from "./pages/Admin/Notification/Notification";
import TeacherList from "./pages/Admin/Teacher/TeacherList";
import Tuition from "./pages/Admin/Tuition/Tuition";
import ScheduleTable from "./components/Admin/ScheduleTable/ScheduleTable";
import MenuSchedule from "./components/Admin/MenuSchedule/MenuSchedule";
import TeacherDetail from "./pages/Admin/Teacher/TeacherDetail";
import ClassScheduleList from "./pages/Admin/ClassSchedule/ClassScheduleList";

// Teacher Routes
import TeacherPage from "./components/Teacher/TeacherHomePage/TeacherHomePage";
import GioiThieuDoiNguGiaoVien1 from "./pages/Teacher/GioiThieuDoiNguGiaoVien/GioiThieuDoiNguGiaoVien";
import GioiThieuTruong1 from "./pages/Teacher/GioiThieuTruong/GioiThieuTruong";
import HoatDongCuaBe1 from "./pages/Teacher/HoatDongCuaBe/HoatDongCuaBe";
import HocTap1 from "./pages/Teacher/HocTap/HocTap";
import SuKien1 from "./pages/Teacher/SuKien/SuKien";
import ThongTinCuaBe1 from "./pages/Teacher/ThongTinCuaBe/ThongTinCuaBe";
import ThongTinGiaoVienChuNhiem1 from "./pages/Teacher/ThongTinGiaoVienChuNhiem/TeacherDetailTeacher";
import ThucDon1 from "./pages/Teacher/ThucDon/ThucDon";
import VuiChoi1 from "./pages/Teacher/VuiChoi/VuiChoi";
import TeacherClassDetail from "./pages/Teacher/ThongTinGiaoVienChuNhiem/TeacherDetailTeacher";
import TeacherListTeacher from "./pages/Teacher/ThongTinGiaoVienChuNhiem/TeacherListTeacher";
import ClassScheduleTeacher from "./pages/Teacher/ThoiKhoaBieu/ClassSchedule";
import ClassScheduleListTeacher from "./pages/Teacher/ThoiKhoaBieu/ClassScheduleList";
import StudentClassDetail from "./pages/Teacher/ThongTinCuaBe/ClassDetailTeacher";

const App = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Auth />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<HomePageAdmin />}>
        <Route path="adminpage" element={<AdminPage />} />
        <Route path="listclass" element={<ListClass />} />
        <Route path="classdetail/:id" element={<ClassDetail />} />    
        <Route path="introduce" element={<IntroduceAdmin />} />
        <Route path="introduceteacher" element={<IntroduceTeacher />} />
        <Route path="menupage" element={<MenuPage />} />
        <Route path="learning" element={<MomentPage />} />
        <Route path="entertainment" element={<MomentPage />} />
        <Route path="event" element={<Notification />} />
        <Route path="babyactivities" element={<Notification />} />
        <Route path="teacherlist" element={<TeacherList />} />
        <Route path="tuition" element={<Tuition />} />
        <Route path="scheduletable" element={<ScheduleTable />} />
        <Route path="menuschedule" element={<MenuSchedule />} />
        <Route path="teacher/:id" element={<TeacherDetail />} />
        <Route path="schedulelist" element={<ClassScheduleList />} />
        <Route path="schedule/:id" element={<ClassSchedule />} />
      </Route>

      {/* User Routes */}
      <Route path="/user" element={<UserHomePage />}>
        <Route path="gioithieutruong" element={<GioiThieuTruong />} />
        <Route path="gioithieudoingugiaovien" element={<GioiThieuDoiNguGiaoVien />} />
        <Route path="hoatdongcuabe" element={<HoatDongCuaBe />} />
        <Route path="hoctap" element={<HocTap />} />
        <Route path="sukien" element={<SuKien />} />
        <Route path="thongtincuabe" element={<ThongTinCuaBe />} />
        <Route path="/user/teacher/:id" element={<ThongTinGiaoVienChuNhiem />} />
        <Route path="thucdon" element={<ThucDon />} />
        <Route path="vuichoi" element={<VuiChoi />} />
        <Route path="hocphi" element={<HocPhi />} />
        <Route path="classdetail/:id" element={<UserClassDetail />} />
        <Route path="/user/teachers" element={<TeacherListUser />} />
        <Route path="schedulelist" element={<ClassScheduleListUser />} />
        <Route path="schedule/:id" element={<ClassScheduleUser />} />
      </Route>

      {/* Teacher Routes */}
      <Route path="/teacher" element={<TeacherPage />}>
        <Route path="gioithieudoingugiaovien1" element={<GioiThieuDoiNguGiaoVien1 />} />
        <Route path="hoatdongcuabe1" element={<HoatDongCuaBe1 />} />
        <Route path="hoctap1" element={<HocTap1 />} />
        <Route path="gioithieutruong1" element={<GioiThieuTruong1 />} />
        <Route path="sukien1" element={<SuKien1 />} />
        <Route path="thongtincuabe1" element={<ThongTinCuaBe1 />} />
        <Route path="thongtingiaovienchunhiem1" element={<ThongTinGiaoVienChuNhiem1 />} />
        <Route path="thucdon1" element={<ThucDon1 />} />
        <Route path="vuichoi1" element={<VuiChoi1 />} />
        <Route path="/teacher/teacher1/:id" element={<TeacherClassDetail />} />
        <Route path="/teacher/teachers1" element={<TeacherListTeacher />} />
        <Route path="schedulelist" element={<ClassScheduleListTeacher />} />
        <Route path="schedule/:id" element={<ClassScheduleTeacher />} />
        <Route path="/teacher/classdetail/:id" element={<StudentClassDetail />} />
        
      </Route>
    </Routes>
  );
};

export default App;
