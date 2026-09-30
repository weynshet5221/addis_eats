import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { loadDishes } from "../api/menuApi";
import DishCard from "../menu/DishCard";

function Home() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDishes() {
      try {
        const data = await loadDishes();
        setDishes(data.slice(0, 3));
      } catch {
        setDishes([]);
      } finally {
        setLoading(false);
      }
    }

    getDishes();
  }, []);

  return (
    <div className="home-page">

      <section className="hero">
        <div className="hero-content">

          <span className="hero-small">
            WELCOME TO ADDIS EATS
          </span>

          <h1>
            Delicious food,
            <br />
            <span>made for you.</span>
          </h1>

          <p>
            Enjoy authentic Ethiopian flavors and
            delicious meals delivered straight to
            your door.
          </p>

          <Link to="/menu" className="hero-button">
            Explore Menu
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="hero-image">
          <img
            src="/images/pizza.png"
            alt="Delicious food"
          />
        </div>
      </section>

      <section className="home-menu">

        <div className="section-heading">
          <div>
            <span>FRESH & DELICIOUS</span>
            <h2>All</h2>
          </div>

          <Link
            to="/menu"
            className="view-all-button"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="home-category-buttons">
          <Link
            to="/menu"
            className="home-category active"
          >
            All
          </Link>

          <Link
            to="/menu?category=fasting"
            className="home-category"
          >
            Fasting
          </Link>

          <Link
            to="/menu?category=non%20fasting"
            className="home-category"
          >
            Non Fasting
          </Link>

          <Link
            to="/menu?category=drinks"
            className="home-category"
          >
            Drinks
          </Link>

          <Link
            to="/menu?category=desserts"
            className="home-category"
          >
            Desserts
          </Link>
        </div>

        {loading ? (
          <div className="home-loading">
            Loading menu...
          </div>
        ) : (
          <div className="dish-grid">
            {dishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
              />
            ))}
          </div>
        )}

      </section>

      <section className="home-info">
        <div>
          <span>ADDIS ABABA</span>
          <h2>Good food is always nearby.</h2>
          <p>
            Order your favorite meals and enjoy
            convenient delivery across Addis Ababa.
          </p>
        </div>

        <Link to="/contact" className="secondary-button">
          Contact Us
        </Link>
      </section>

    </div>
  );
}

export default Home;