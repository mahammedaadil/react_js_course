import CartItem from "./CartItem.jsx";
function Cart({ cart, onUpdateQuantity, onRemove, total }) {
  if (cart.length === 0) {
    return <div className="cart empty">Your Cart Is Empty</div>;
  }

  return (
    <div>
      <h2 className="cart">Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
      <div className="cart-total">
        <h3>Total: ${typeof total === "string" ? total : total.toFixed(2)}</h3>

        <button className="checkout-btn">CheckOut</button>
      </div>
    </div>
  );
}

export default Cart;
