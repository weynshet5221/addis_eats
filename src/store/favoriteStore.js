import { create } from "zustand";

const STORAGE_KEY = "addiseats_favorites";

function getFavorites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

const useFavoriteStore = create((set, get) => ({
  favorites: getFavorites(),

  toggleFavorite: (dish) => {
    const favorites = get().favorites;

    const exists = favorites.some(
      (item) => item.id === dish.id
    );

    const updatedFavorites = exists
      ? favorites.filter((item) => item.id !== dish.id)
      : [...favorites, dish];

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedFavorites)
    );

    set({ favorites: updatedFavorites });
  },

  isFavorite: (dishId) =>
    get().favorites.some((item) => item.id === dishId),

  clearFavorites: () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    set({ favorites: [] });
  }
}));

export default useFavoriteStore;