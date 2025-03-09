import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5001");

const useWebSocket = (setSchedule) => {
    useEffect(() => {
        socket.on("scheduleUpdated", (updatedSchedule) => {
            setSchedule(updatedSchedule); // Cập nhật UI ngay khi có thay đổi
        });

        return () => socket.off("scheduleUpdated");
    }, [setSchedule]);
};

export { socket, useWebSocket };
