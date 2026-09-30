import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { loadDishes } from "../api/menuApi";
import useCartStore from "../store/cartStore";
import useFavoriteStore from "../store/favoriteStore";
import Spinner from "../ui/Spinner";

function DishDetail() {
  const { id } = useParams();

  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const favorites = useFavoriteStore(
    (state) => state.favorites
  );

  const toggleFavorite = useFavoriteStore(
    (state) => state.toggleFavorite
  );

  useEffect(() => {
    async function getDish() {
      try {
        const dishes = await loadDishes();
        const found = dishes.find(
          (item) => String(item.id) === id
        );

        setDish(found);
      } finally {
        setLoading(false);
      }
    }

    getDish();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!dish) {
    return (
      <div className="empty-state page-state">
        <h2>Dish not found</h2>
        <Link to="/menu">Back to menu</Link>
      </div>
    );
  }

  const favorite = favorites.some(
    (item) => item.id === dish.id
  );

  return (
    <section className="detail-page">

      <Link to="/menu" className="back-link">
        <ArrowLeft size={18} />
        Back to menu
      </Link>

      <div className="detail-container">

        <div className="detail-image">
          <img
            src={`/${dish.image}`}
            alt={dish.name}
          />
        </div>

        <div className="detail-content">

          <span className="dish-category">
            {dish.category}
          </span>

          <h1>{dish.name}</h1>

          <p className="detail-description">
            {dish.description}
          </p>

          <h2>
            {dish.price.toLocaleString()} ETB
          </h2>

          {dish.ingredients && (
            <div className="ingredients">
              <h3>Ingredients</h3>

              <div className="ingredient-list">
                {dish.ingredients.map(
                  (ingredient) => (
                    <span key={ingredient}>
                      {ingredient}
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          <div className="detail-actions">

            <button
              className="primary-button"
              onClick={() => addToCart(dish)}
            >
              Add to Cart
            </button>

            <button
              className={
                favorite
                  ? "favorite-large active"
                  : "favorite-large"
              }
              onClick={() =>
                toggleFavorite(dish)
              }
            >
              <Heart
                size={19}
                fill={
                  favorite
                    ? "currentColor"
                    : "none"
                }
              />
              Favorite
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DishDetail;