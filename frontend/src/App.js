import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import HomePage from "./pages/HomePage";
import UserHomePage from "./components/User/UserhomePage/UserHomePage";
import GioiThieu from "./components/User/UserDetail/GioiThieu/GioiThieu";
import GioiThieu2 from "./components/User/UserDetail/GioiThieu2/GioiThieu2"
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/user" element={<UserHomePage />} >
                <Route index element={<GioiThieu />} />
                <Route path="gioithieu2" element={<GioiThieu2 />}/>
            </Route>
        </Routes>
    );
};

export default App;
