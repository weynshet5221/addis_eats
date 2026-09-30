import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="empty-state page-state">
      <h1>404</h1>

      <h2>Page not found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="primary-button"
      >
        Back Home
      </Link>
    </section>
  );
}

export default NotFound;