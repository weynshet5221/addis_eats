import {
  Minus,
  Plus,
  Trash2
} from "lucide-react";
import useCartStore from "../store/cartStore";

function CartItem({ item }) {
  const increaseQuantity =
    useCartStore(
      (state) => state.increaseQuantity
    );

  const decreaseQuantity =
    useCartStore(
      (state) => state.decreaseQuantity
    );

  const removeFromCart =
    useCartStore(
      (state) => state.removeFromCart
    );

  return (
    <div className="cart-item">

      <img
        src={`/${item.image}`}
        alt={item.name}
      />

      <div className="cart-item-info">
        <h3>{item.name}</h3>

        <p>
          {item.price.toLocaleString()} ETB
        </p>
      </div>

      <div className="quantity-control">

        <button
          onClick={() =>
            decreaseQuantity(item.id)
          }
        >
          <Minus size={15} />
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() =>
            increaseQuantity(item.id)
          }
        >
          <Plus size={15} />
        </button>

      </div>

      <strong className="cart-item-total">
        {(item.price * item.quantity)
          .toLocaleString()}{" "}
        ETB
      </strong>

      <button
        className="remove-button"
        onClick={() =>
          removeFromCart(item.id)
        }
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}

export default CartItem;