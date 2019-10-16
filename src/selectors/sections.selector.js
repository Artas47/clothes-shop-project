import { createSelector } from "reselect";

const selectSections = state => state.sections;

export const getSections = createSelector(
  [selectSections],
  sections => sections
);
