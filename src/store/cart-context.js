import React from "react";

const CartContext = React.createContext({
  item: [],
  totalAmlount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
