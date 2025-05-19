import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ilearnbackend-1rsc.onrender.com/api/",
  withCredentials: true,
});
