import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ilearnbackend.onrender.com/api",
  withCredentials: true,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
