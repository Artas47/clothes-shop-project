import { createSelector } from "reselect";

const selectCollection = (state, ownProps) => {
  return state.collections[ownProps.match.params.collectionTitle];
};

export const getCollection = createSelector(
  [selectCollection],
  collection => collection
);
