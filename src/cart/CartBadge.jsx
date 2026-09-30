import useCartStore from "../store/cartStore";

function CartBadge() {
  const cart = useCartStore(
    (state) => state.cart
  );

  const count = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <span className="cart-badge">
      {count}
    </span>
  );
}

export default CartBadge;