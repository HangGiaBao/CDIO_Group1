import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
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
);
