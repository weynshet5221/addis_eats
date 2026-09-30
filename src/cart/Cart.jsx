import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import useCartStore from "../store/cartStore";

function Cart() {
  const cart = useCartStore(
    (state) => state.cart
  );

  const getTotal = useCartStore(
    (state) => state.getTotal
  );

  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  const total = getTotal();

  if (!cart.length) {
    return (
      <section className="cart-page">

        <div className="page-heading">
          <span>YOUR ORDER</span>
          <h1>Your Cart</h1>
        </div>

        <div className="empty-state">
          <h2>Your cart is empty</h2>

          <p>
            Add some delicious food to your cart.
          </p>

          <Link
            to="/menu"
            className="primary-button"
          >
            Browse Menu
          </Link>
        </div>

      </section>
    );
  }

  return (
    <section className="cart-page">

      <div className="page-heading">
        <span>YOUR ORDER</span>
        <h1>Your Cart</h1>
      </div>

      <div className="cart-layout">

        <div className="cart-list">

          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

          <button
            className="clear-cart"
            onClick={clearCart}
          >
            Clear Cart
          </button>

        </div>

        <aside className="cart-summary">

          <h2>Order Summary</h2>

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

          <Link
            to="/checkout"
            className="primary-button full-button"
          >
            Proceed to Checkout
          </Link>

        </aside>

      </div>

    </section>
  );
}

export default Cart;