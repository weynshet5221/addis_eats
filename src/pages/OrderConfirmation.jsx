import { Link, useParams } from "react-router-dom";

function OrderConfirmation() {
  const { id } = useParams();

  return (
    <section className="confirmation-page">

      <div className="confirmation-card">

        <div className="confirmation-icon">
          ✓
        </div>

        <span>ORDER RECEIVED</span>

        <h1>
          Thank you for your order!
        </h1>

        <p>
          Your order has been successfully
          placed.
        </p>

        <p>
          Order #{id}
        </p>

        <div className="confirmation-actions">
          <Link
            to="/orders"
            className="primary-button"
          >
            View Orders
          </Link>

          <Link
            to="/menu"
            className="secondary-button"
          >
            Continue Shopping
          </Link>
        </div>

      </div>

    </section>
  );
}

export default OrderConfirmation;