import { all, call } from "redux-saga/effects";

import { userSagas } from "./user.sagas";
import { cartSagas } from "./cart.sagas";
import { shopSagas } from "./shop.sagas";

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
