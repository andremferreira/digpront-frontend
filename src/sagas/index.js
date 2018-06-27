import { all, fork } from "redux-saga/effects";
import submitLogin from "../scenes/Sign/scenes/Login/sagas";
import submitRecovery from "../scenes/Sign/scenes/Recovery/sagas";

//Li@7031811
export default function* rootSaga() {
  yield all([fork(submitLogin)]);
}
