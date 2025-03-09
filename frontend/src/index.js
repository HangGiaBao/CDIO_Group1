import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MenuProvider } from "./contexts/MenuContext";

// ✅ Chỉ bỏ qua cảnh báo cụ thể
const originalWarn = console.warn;
console.warn = (message, ...args) => {
    if (!message.includes("React Router Future Flag Warning")) {
        originalWarn(message, ...args);
    }
};

// ✅ Cấu hình Router với Future Flags
const router = createBrowserRouter([
    { path: "/*", element: <App /> },
], {
    future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true
    }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <MenuProvider>
        <RouterProvider router={router} />
    </MenuProvider>
=======
import { BrowserRouter } from "react-router-dom";
// import "./css/index.css"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
>>>>>>> 955f45ffd5889e74a5708fb3e3bdea7c6ac362a4
);
