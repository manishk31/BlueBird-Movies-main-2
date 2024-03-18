// src/CartContext.js

/*
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (movie) => {
    setCart([...cart, movie]);
  };

  const removeFromCart = (movieId) => {
    setCart(cart.filter(movie => movie.id !== movieId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

*/

