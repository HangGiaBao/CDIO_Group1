import axios from "axios";

const API_URL = "http://localhost:5001/v1/auth"; // URL backend của bạn

// Đăng ký tài khoản
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Server error!" };
  }
};

// Đăng nhập tài khoản
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data; // Trả về dữ liệu user từ server
  } catch (error) {
    throw error.response?.data || { message: "Lỗi đăng nhập! Vui lòng kiểm tra lại." };
  }
};

export const RegisterUser = async (username, password,email ) => {
  return axios.post(`${API_URL}/register`, { username, password,email });
}