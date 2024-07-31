import React, { useContext } from 'react';
import CartContext from './CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="summary">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
