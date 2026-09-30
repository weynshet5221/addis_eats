function OrderDetails({ order }) {
  if (!order) {
    return null;
  }

  return (
    <div className="order-details">
      <h2>Order #{order.id}</h2>

      <p>Customer: {order.customer.name}</p>

      <p>Phone: {order.customer.phone}</p>

      <p>Area: {order.customer.deliveryArea}</p>

      <h3>Items</h3>

      {order.items.map((item) => (
        <div className="checkout-item" key={item.id}>
          <span>
            {item.name} × {item.quantity}
          </span>

          <strong>{(item.price * item.quantity).toLocaleString()} ETB</strong>
        </div>
      ))}
    </div>
  );
}

export default OrderDetails;
