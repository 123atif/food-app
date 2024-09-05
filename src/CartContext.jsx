import React, { createContext, useState } from "react";

const initialState = {
  isCartOpen: false,
  items: [],
  toggleCart: () => {},
  setCartOpen: (val) => {},
  addToCart: () => {},
  removeFromCart: () => {},
};

export const CartContext = createContext(initialState);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };

  const addToCart = (item) => {
    if (!cart.find((cartItem) => cartItem.id === item.id))
      setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        items: cart,
        toggleCart,
        setCartOpen,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
