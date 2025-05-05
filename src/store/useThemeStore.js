import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "emerald", // Fixed localStorage key
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });

    // Ensure data-theme is updated correctly even for non-dark/light themes
    document.documentElement.setAttribute("data-theme", theme);
  },
}));
