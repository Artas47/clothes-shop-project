import {
  SET_USER,
  TOGGLE_CART,
  ADD_CART_ITEM,
  CLEAR_CART_ITEM,
  REMOVE_CART_ITEM,
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS
} from "./types";

import {
  firestore,
  covertCollectionsSnapshotToMap
} from "../firebase/firebase.utils";

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

export const changeLoading = () => {
  return {
    type: "CHANGE_LOADING"
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

export const fetchCollectionsStartAsync = () => async dispatch => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());
  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = covertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch(error => dispatch(fetchCollectionsFailure(error)));
};

// export const getCollections = () => async dispatch => {
//   const collectionRef = firestore.collection("collections");
//   const collectionSnapshot = await collectionRef.get();

//   // collectionRef.onSnapshot(async snapshot => {
//   //   covertCollectionsSnapshotToMap(snapshot);
//   // });

//   dispatch({
//     type: "GET_COLLECTIONS",
//     payload: {
//       ...collectionSnapshot.docs.map(collection => collection.data())
//     }
//   });
// };
