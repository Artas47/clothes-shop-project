import { createSelector } from "reselect";

const selectCollection = (state, ownProps) =>
  state.collections[ownProps.match.params.collectionTitle];

export const getCollection = createSelector(
  [selectCollection],
  collection => (collection ? collection : null)
);
