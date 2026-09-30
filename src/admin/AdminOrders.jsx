import { Link } from "react-router-dom";

function AdminOrders() {
  const orders =
    JSON.parse(
      localStorage.getItem(
        "addiseats_orders"
      )
    ) || [];

  function updateStatus(
    id,
    newStatus
  ) {
    const updated =
      orders.map((order) =>
        order.id === id
          ? {
              ...order,
              status: newStatus
            }
          : order
      );

    localStorage.setItem(
      "addiseats_orders",
      JSON.stringify(updated)
    );

    window.location.reload();
  }

  function deleteOrder(id) {
    if (
      !window.confirm(
        "Delete this order?"
      )
    ) {
      return;
    }

    const updated =
      orders.filter(
        (order) =>
          order.id !== id
      );

    localStorage.setItem(
      "addiseats_orders",
      JSON.stringify(updated)
    );

    window.location.reload();
  }

  return (
    <section className="admin-page">

      <div className="admin-header">
        <div>
          <span>ADMIN</span>
          <h1>Orders</h1>
        </div>

        <Link
          to="/admin"
          className="secondary-button"
        >
          Dashboard
        </Link>
      </div>

      <div className="admin-table">

        {!orders.length && (
          <div className="empty-state">
            <h3>No orders</h3>
          </div>
        )}

        {orders.map((order) => (
          <div
            className="admin-row"
            key={order.id}
          >
            <div>
              <strong>
                #{order.id}
              </strong>

              <span>
                {order.customer.name}
              </span>
            </div>

            <select
              value={order.status}
              onChange={(e) =>
                updateStatus(
                  order.id,
                  e.target.value
                )
              }
            >
              <option value="pending">
                Pending
              </option>

              <option value="preparing">
                Preparing
              </option>

              <option value="delivering">
                Delivering
              </option>

              <option value="delivered">
                Delivered
              </option>
            </select>

            <strong>
              {order.total.toLocaleString()} ETB
            </strong>

            <Link
              to={`/admin/orders/${order.id}`}
              className="detail-link"
            >
              Details
            </Link>

            <button
              className="delete-button"
              onClick={() =>
                deleteOrder(order.id)
              }
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default AdminOrders;