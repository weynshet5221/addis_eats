import {
  Link,
  useParams
} from "react-router-dom";
import OrderDetails from "../orders/OrderDetails";
import ReorderButton from "../orders/ReorderButton";

function AdminOrderDetails() {
  const { id } = useParams();

  const orders =
    JSON.parse(
      localStorage.getItem(
        "addiseats_orders"
      )
    ) || [];

  const order = orders.find(
    (item) =>
      String(item.id) === id
  );

  if (!order) {
    return (
      <section className="empty-state">
        <h2>Order not found</h2>

        <Link to="/admin/orders">
          Back to orders
        </Link>
      </section>
    );
  }

  return (
    <section className="admin-page">

      <div className="admin-header">
        <div>
          <span>ADMIN</span>
          <h1>Order Details</h1>
        </div>

        <Link
          to="/admin/orders"
          className="secondary-button"
        >
          Back
        </Link>
      </div>

      <OrderDetails order={order} />

      <div className="order-detail-actions">
        <ReorderButton
          order={order}
        />
      </div>

    </section>
  );
}

export default AdminOrderDetails;