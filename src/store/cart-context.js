import { createContext } from "react";

const context = createContext({
  items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: (id) => {},
});

export default context;
