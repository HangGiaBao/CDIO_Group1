import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/v1",
    withCredentials: true, // Bật gửi cookie
});

export default instance;
