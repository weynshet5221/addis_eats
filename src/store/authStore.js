import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: JSON.parse(
    localStorage.getItem("addiseats_user") || "null"
  ),

  login: (user) => {
    localStorage.setItem(
      "addiseats_user",
      JSON.stringify(user)
    );

    set({ user });
  },

  logout: () => {
    localStorage.removeItem("addiseats_user");

    set({ user: null });
  }
}));

export default useAuthStore;