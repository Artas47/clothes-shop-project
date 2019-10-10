import { SET_USER, TOGGLE_CART, ADD_CART_ITEM } from "./types";

export const setUser = (userId, userData) => {
  return {
    type: SET_USER,
    payload: { userId, ...userData }
  };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART
  };
};

export const addCartItem = item => {
  return {
    type: ADD_CART_ITEM,
    payload: item
  };
};
