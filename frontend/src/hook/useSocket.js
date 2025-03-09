import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5001", {
    transports: ["websocket"], 
    withCredentials: true,
});

export const useSocket = (event, callback) => {
    useEffect(() => {
        socket.on(event, callback);
        return () => socket.off(event, callback);
    }, [event, callback]);
};

export default socket;
