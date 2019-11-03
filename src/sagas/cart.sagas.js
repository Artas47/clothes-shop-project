import { takeLatest, call, put, all } from "redux-saga/effects";

import { SIGN_OUT_SUCCESS } from "../actions/types";
import { clearCartItems } from "../actions/index";

export function* clearCartOnSignOut() {
  yield put(clearCartItems());
}

export function* onSignOutClearCartItems() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutClearCartItems)]);
}
