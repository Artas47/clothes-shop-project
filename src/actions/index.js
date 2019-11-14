import {
  SET_USER,
  TOGGLE_CART,
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  REMOVE_CART_ITEM,
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  CLEAR_CART_ITEMS,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "./types";

export const setUser = (userId, userData) => {
  return {
    type: SET_USER,
    payload: userId,
    ...userData
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

export const fetchCollectionsStart = () => {
  return {
    type: FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsSuccess = collectionsMap => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  };
};

export const fetchCollectionsFailure = errorMessege => {
  return {
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessege
  };
};

export const googleSignInStart = () => {
  return {
    type: GOOGLE_SIGN_IN_START
  };
};

export const signInSuccess = user => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user
  };
};

export const signInFailure = error => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error
  };
};

export const emailSignInStart = emailAndPassword => {
  return {
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword
  };
};

export const signOutStart = () => {
  return {
    type: SIGN_OUT_START
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS
  };
};

export const signOutFailure = error => {
  return {
    type: SIGN_OUT_FAILURE,
    payload: error
  };
};

export const checkUserSession = () => {
  return { type: CHECK_USER_SESSION };
};

export const clearCartItems = () => {
  return { type: CLEAR_CART_ITEMS };
};

export const signUpStart = formValues => {
  return {
    type: SIGN_UP_START,
    payload: formValues
  };
};

export const signUpSuccess = ({ user, additionalData }) => {
  return { type: SIGN_UP_SUCCESS, payload: { user, additionalData } };
};

export const signUpFailure = error => {
  return { type: SIGN_UP_FAILURE, payload: error };
};
