import React, { useContext } from 'react';
import CartContext from './CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useContext(CartContext);

  const handleChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="details">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <input type="number" value={item.quantity} onChange={handleChange} />
        <button onClick={() => removeItem(item.id)}>Remove</button>
      </div>
      <div className="total">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
