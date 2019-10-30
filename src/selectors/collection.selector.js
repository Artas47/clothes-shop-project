import { createSelector } from "reselect";

const selectCollections = state => {
  return state.shopData.collections;
};

export const getCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collection => (collection ? collection[collectionUrlParam] : null)
  );
