import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Heart,
  Sun,
  Moon,
  User
} from "lucide-react";
import useCartStore from "../store/cartStore";
import useThemeStore from "../store/themeStore";
import useAuthStore from "../store/authStore";
import AdminLogin from "../admin/AdminLogin";

function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const cart = useCartStore((state) => state.cart);
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const user = useAuthStore((state) => state.user);

  const search = searchParams.get("search") || "";

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function handleSearch(e) {
    const value = e.target.value;

    if (value.trim()) {
      navigate(
        `/menu?search=${encodeURIComponent(value)}`
      );
    } else {
      navigate("/menu");
    }
  }

  return (
    <header className="header">
      <div className="header-container">

        <Link to="/" className="logo">
          Addis <span>Eats</span>
        </Link>

        <div className="search-box">
          <Search size={18} />

          <input
            value={search}
            onChange={handleSearch}
            type="text"
            placeholder="Search for dishes..."
          />
        </div>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <NavLink to="/favorites" className="icon-link">
            <Heart size={18} />
            <span>Favorites</span>
          </NavLink>

          <Link to="/cart" className="cart-link">
            <ShoppingCart size={18} />
            <span>Cart</span>
            <span className="cart-badge">{cartCount}</span>
          </Link>

          <button
            className="theme-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={18} />
            ) : (
              <Sun size={18} />
            )}
          </button>

          <Link
  to={localStorage.getItem("adminLoggedIn") === "true"
    ? "/admin"
    : "/admin/login"
  }
  className="user-link"
>
            <User size={18} />Admin
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;