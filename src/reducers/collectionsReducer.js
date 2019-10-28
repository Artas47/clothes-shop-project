import _ from "lodash";

export default (state = null, action) => {
  switch (action.type) {
    case "GET_COLLECTIONS":
      return { ...state, ..._.mapKeys(action.payload, "routeName") };
    case "FETCH_COLLECTIONS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
