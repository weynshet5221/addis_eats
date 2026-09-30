import { Link } from "react-router-dom";
import DishCard from "../menu/DishCard";
import useFavoriteStore from "../store/favoriteStore";

function Favorites() {
  const favorites = useFavoriteStore(
    (state) => state.favorites
  );

  return (
    <section className="favorites-page">

      <div className="page-heading">
        <span>SAVED FOR LATER</span>
        <h1>Favorites</h1>
        <p>
          Your favorite dishes in one place.
        </p>
      </div>

      {!favorites.length ? (
        <div className="empty-state">
          <h2>No favorites yet</h2>

          <p>
            Add dishes to your favorites
            and find them here.
          </p>

          <Link
            to="/menu"
            className="primary-button"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="dish-grid">
          {favorites.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default Favorites;