import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useChatStore = create((set) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  //   Get users function:
  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response.data.messages);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  //   Get message function:
  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ isMessagesLoading: res.data });
    } catch (error) {
      toast.error(error.response.data.messages);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  //   Set selected user function:
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
