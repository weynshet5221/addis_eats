import { Heart } from "lucide-react";
import useFavoriteStore from "../store/favoriteStore";

function FavoriteButton({ dish }) {
  const favorites = useFavoriteStore(
    (state) => state.favorites
  );

  const toggleFavorite =
    useFavoriteStore(
      (state) => state.toggleFavorite
    );

  const active = favorites.some(
    (item) => item.id === dish.id
  );

  return (
    <button
      className={
        active
          ? "favorite-button active"
          : "favorite-button"
      }
      onClick={() => toggleFavorite(dish)}
    >
      <Heart
        size={18}
        fill={
          active
            ? "currentColor"
            : "none"
        }
      />
    </button>
  );
}

export default FavoriteButton;