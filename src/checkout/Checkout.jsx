import { useState } from "react";
import {
  useNavigate
} from "react-router-dom";
import Field from "./Field";
import { validateCheckout } from "./validate";
import useCartStore from "../store/cartStore";
import useAuthStore from "../store/authStore";

function Checkout() {
  const navigate = useNavigate();

  const user = useAuthStore(
    (state) => state.user
  );

  const cart = useCartStore(
    (state) => state.cart
  );

  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  const getTotal = useCartStore(
    (state) => state.getTotal
  );

  const [values, setValues] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    deliveryArea: "",
    notes: ""
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] =
    useState(false);

  const total = getTotal();
  const deliveryFee = 50;

  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors =
      validateCheckout(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) {
      return;
    }

    if (!cart.length) {
      return;
    }

    setSubmitting(true);

    const orders =
      JSON.parse(
        localStorage.getItem(
          "addiseats_orders"
        )
      ) || [];

    const order = {
      id: Date.now(),
      customer: values,
      items: cart,
      subtotal: total,
      deliveryFee,
      total: total + deliveryFee,
      status: "pending",
      date: new Date().toISOString()
    };

    localStorage.setItem(
      "addiseats_orders",
      JSON.stringify([
        order,
        ...orders
      ])
    );

    clearCart();

    navigate(
      `/order-confirmation/${order.id}`
    );
  }

  if (!cart.length) {
    return (
      <section className="checkout-page">
        <div className="empty-state">
          <h2>Your cart is empty</h2>

          <button
            className="primary-button"
            onClick={() =>
              navigate("/menu")
            }
          >
            Browse Menu
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">

      <div className="page-heading">
        <span>FINAL STEP</span>
        <h1>Checkout</h1>
        <p>
          Enter your delivery information.
        </p>
      </div>

      <div className="checkout-layout">

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >

          <Field
            label="Full Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Enter your name"
          />

          <Field
            label="Phone Number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="09XXXXXXXX"
          />

          <Field
            label="Delivery Area"
            name="deliveryArea"
            value={values.deliveryArea}
            onChange={handleChange}
            error={errors.deliveryArea}
            placeholder="e.g. Bole"
          />

          <div className="form-field">
            <label htmlFor="notes">
              Special Instructions
            </label>

            <textarea
              id="notes"
              name="notes"
              value={values.notes}
              onChange={handleChange}
              placeholder="Any special instructions?"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="primary-button full-button"
            disabled={submitting}
          >
            {submitting
              ? "Placing Order..."
              : "Place Order"}
          </button>

        </form>

        <aside className="checkout-summary">

          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div
              className="checkout-item"
              key={item.id}
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <strong>
                {(item.price *
                  item.quantity)
                  .toLocaleString()}{" "}
                ETB
              </strong>
            </div>
          ))}

          <hr />

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>
              {total.toLocaleString()} ETB
            </strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <strong>50 ETB</strong>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>
              {(total + 50)
                .toLocaleString()}{" "}
              ETB
            </strong>
          </div>

        </aside>

      </div>
    </section>
  );
}

export default Checkout;