import React from 'react';

const CartContext = React.createContext({
    items: [{amount: 0}],
    totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  resetCart: () => {}
});

export default CartContext;