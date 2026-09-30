import { create } from "zustand";

const savedCart =
  JSON.parse(localStorage.getItem("addiseats_cart")) || [];

const useCartStore = create((set, get) => ({
  cart: savedCart,

  addToCart: (dish) => {
    const currentCart = get().cart;

    const existingItem = currentCart.find(
      (item) => item.id === dish.id
    );

    let newCart;

    if (existingItem) {
      newCart = currentCart.map((item) =>
        item.id === dish.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );
    } else {
      newCart = [
        ...currentCart,
        {
          ...dish,
          quantity: 1
        }
      ];
    }

    localStorage.setItem(
      "addiseats_cart",
      JSON.stringify(newCart)
    );

    set({ cart: newCart });
  },

  increaseQuantity: (id) => {
    const newCart = get().cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    );

    localStorage.setItem(
      "addiseats_cart",
      JSON.stringify(newCart)
    );

    set({ cart: newCart });
  },

  decreaseQuantity: (id) => {
    const newCart = get()
      .cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    localStorage.setItem(
      "addiseats_cart",
      JSON.stringify(newCart)
    );

    set({ cart: newCart });
  },

  removeFromCart: (id) => {
    const newCart = get().cart.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "addiseats_cart",
      JSON.stringify(newCart)
    );

    set({ cart: newCart });
  },

  clearCart: () => {
    localStorage.removeItem("addiseats_cart");
    set({ cart: [] });
  },

  getTotal: () => {
    return get().cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }
}));

export default useCartStore;