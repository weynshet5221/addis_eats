import { create } from "zustand";

const savedTheme =
  localStorage.getItem("addiseats_theme") || "light";

document.documentElement.setAttribute(
  "data-theme",
  savedTheme
);

const useThemeStore = create((set) => ({
  theme: savedTheme,

  toggleTheme: () => {
    set((state) => {
      const newTheme =
        state.theme === "light" ? "dark" : "light";

      localStorage.setItem(
        "addiseats_theme",
        newTheme
      );

      document.documentElement.setAttribute(
        "data-theme",
        newTheme
      );

      return {
        theme: newTheme
      };
    });
  }
}));

export default useThemeStore;