import _ from "lodash";
import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from "../actions/types";

const INITAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessege: undefined
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessege: action.payload
      };
    case "GET_COLLECTIONS":
      return { ...state, ..._.mapKeys(action.payload, "routeName") };
    case "FETCH_COLLECTIONS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
