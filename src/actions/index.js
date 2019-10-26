import {
  SET_USER,
  TOGGLE_CART,
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  REMOVE_CART_ITEM
} from "./types";

import { firestore } from "../firebase/firebase.utils";
import { covertCollectionsSnapshotToMap } from "../firebase/firebase.utils";

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

export const getCollections = () => async dispatch => {
  const collectionRef = firestore.collection("collections");
  const collectionSnapshot = await collectionRef.get();

  // collectionRef.onSnapshot(async snapshot => {
  //   covertCollectionsSnapshotToMap(snapshot);
  // });

  dispatch({
    type: "GET_COLLECTIONS",
    payload: {
      ...collectionSnapshot.docs.map(collection => collection.data())
    }
  });
};
