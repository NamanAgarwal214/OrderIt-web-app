import React, { useReducer } from "react";
import context from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE":
      const existCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existCartItemIndex];
      const updateTotalAmount = state.totalAmount - existingItem.price;
      let updateItems;
      if (existingItem.amount === 1) {
        updateItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updateItems = [...state.items];
        updateItems[existCartItemIndex] = updatedItem;
      }
      return {
        items: updateItems,
        totalAmount: updateTotalAmount,
      };
    default:
      return initialState;
  }
  //   return initialState;
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const addItemCart = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeItemCart = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCart,
    removeItem: removeItemCart,
  };
  return (
    <context.Provider value={cartContext}>{props.children}</context.Provider>
  );
};

export default CartProvider;
