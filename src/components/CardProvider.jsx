import React, { useEffect } from 'react';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://drive.google.com/file/d/1mBA4azCOF4ouh5iVie-Pe7F_CX2d-gYD/view')
      .then(response => response.json())
      .then(data => setCart(data.products));
  }, []);

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
