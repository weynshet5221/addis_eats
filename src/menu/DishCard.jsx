import { Link } from "react-router-dom";
import { Heart, Plus } from "lucide-react";
import useCartStore from "../store/cartStore";
import useFavoriteStore from "../store/favoriteStore";

function DishCard({ dish }) {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const favorites = useFavoriteStore(
    (state) => state.favorites
  );

  const toggleFavorite = useFavoriteStore(
    (state) => state.toggleFavorite
  );

  const favorite = favorites.some(
    (item) => item.id === dish.id
  );

  return (
    <article className="dish-card">

      <div className="dish-image-wrapper">
   <img
  src={dish.image.startsWith("/") ? dish.image : `/${dish.image}`}
  alt={dish.name}
  className="dish-image"
/>

        <button
          className={
            favorite
              ? "favorite-button active"
              : "favorite-button"
          }
          onClick={() => toggleFavorite(dish)}
          aria-label="Add to favorites"
        >
          <Heart
            size={18}
            fill={favorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="dish-content">

       

        <h3>{dish.name}</h3>

        <p>{dish.description}</p>

        <div className="dish-bottom">

          <strong>
            {dish.price.toLocaleString()} ETB
          </strong>

          <button
            className="add-button"
            onClick={() => addToCart(dish)}
          >
            <Plus size={16} />
            Add
          </button>  

        </div>

        <Link
          to={`/menu/${dish.id}`}
          className="detail-link"
        >
          View Detail
        </Link>

      </div>
    </article>
  );
}

export default DishCard;