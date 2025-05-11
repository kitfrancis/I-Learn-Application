import { create } from "zustand";
import { axiosInstance } from "../services/axios";

const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/registerStudent", data);
      set({ authUser: res.data });
      get().connectSocket?.();
    } catch (error) {
      console.error(
        "Signup failed:",
        error.response?.data?.message || error.message
      );
    } finally {
      set({ isSigningUp: false });
    }
  },
}));

export default useAuthStore;
