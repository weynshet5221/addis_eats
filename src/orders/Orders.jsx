import { Link } from "react-router-dom";

function Orders() {
  const orders =
    JSON.parse(
      localStorage.getItem(
        "addiseats_orders"
      )
    ) || [];

  return (
    <section className="orders-page">

      <div className="page-heading">
        <span>YOUR HISTORY</span>
        <h1>Orders</h1>
        <p>
          View your previous orders.
        </p>
      </div>

      {!orders.length ? (
        <div className="empty-state">
          <h2>No orders yet</h2>

          <p>
            Your orders will appear here.
          </p>

          <Link
            to="/menu"
            className="primary-button"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="orders-list">

          {orders.map((order) => (
            <div
              className="order-card"
              key={order.id}
            >
              <div>
                <span>
                  Order #{order.id}
                </span>

                <h3>
                  {order.items.length} item(s)
                </h3>

                <p>
                  {new Date(
                    order.date
                  ).toLocaleDateString()}
                </p>
              </div>

              <div>
                <span
                  className={`status ${order.status}`}
                >
                  {order.status}
                </span>

                <strong>
                  {order.total.toLocaleString()} ETB
                </strong>

                <Link
                  to={`/admin/orders/${order.id}`}
                  className="detail-link"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}

        </div>
      )}

    </section>
  );
}

export default Orders;