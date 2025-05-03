import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const authStore = create((set) => ({
  //These are the states that we will be using:
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  //CheckAuth Function:
  checkAuth: async () => {
    try {
      const response = axiosInstance.get("/auth/check");
      set({ authUser: response.data });
    } catch (error) {
      console.log("Error in checkAuth", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  //SignUp Function:
  signUp: async (data) => {
    
  },
}));
