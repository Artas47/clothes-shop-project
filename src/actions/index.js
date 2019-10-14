import {
  SET_USER,
  TOGGLE_CART,
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  REMOVE_CART_ITEM
} from "./types";

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

export const clearCartItem = id => {
  return {
    type: CLEAR_CART_ITEM,
    payload: id
  };
};

export const removeCartItem = item => {
  return {
    type: REMOVE_CART_ITEM,
    payload: item
  };
};
