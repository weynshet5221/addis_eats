import useCartStore from "../store/cartStore";

function ReorderButton({ order }) {
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  function reorder() {
    order.items.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        addToCart(item);
      }
    });
  }

  return (
    <button
      className="primary-button"
      onClick={reorder}
    >
      Reorder
    </button>
  );
}

export default ReorderButton;