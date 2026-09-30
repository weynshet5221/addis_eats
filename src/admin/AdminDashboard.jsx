import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const loggedIn =
    localStorage.getItem(
      "adminLoggedIn"
    ) === "true";

  if (!loggedIn) {
    navigate("/admin/login");
    return null;
  }

  const dishes =
    JSON.parse(
      localStorage.getItem(
        "addiseats_menu"
      )
    ) || [];

  const orders =
    JSON.parse(
      localStorage.getItem(
        "addiseats_orders"
      )
    ) || [];

  const revenue = orders.reduce(
    (total, order) =>
      total + Number(order.total || 0),
    0
  );

  function logout() {
    localStorage.removeItem(
      "adminLoggedIn"
    );

    navigate("/admin/login");
  }

  return (
    <section className="admin-page">

      <div className="admin-header">
        <div>
          <span>ADMIN</span>
          <h1>Dashboard</h1>
        </div>

        <button
          className="secondary-button"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="admin-nav">
        <Link to="/admin">
          Dashboard
        </Link>

        <Link to="/admin/menu">
          Menu
        </Link>

        <Link to="/admin/orders">
          Orders
        </Link>
      </div>

      <div className="analytics-grid">

        <div className="analytics-card">
          <span>Total Dishes</span>
          <strong>{dishes.length}</strong>
        </div>

        <div className="analytics-card">
          <span>Total Orders</span>
          <strong>{orders.length}</strong>
        </div>

        <div className="analytics-card">
          <span>Revenue</span>
          <strong>
            {revenue.toLocaleString()} ETB
          </strong>
        </div>

        <div className="analytics-card">
          <span>Pending Orders</span>
          <strong>
            {
              orders.filter(
                (order) =>
                  order.status ===
                  "pending"
              ).length
            }
          </strong>
        </div>

      </div>

    </section>
  );
}

export default AdminDashboard;