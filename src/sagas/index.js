import { takeLatest } from "redux-saga/effects";
import submitLogin from "../scenes/Sign/scenes/Login/sagas";
import submitRecovery from "../scenes/Sign/scenes/Recovery/sagas";

//Li@7031811
export default function* rootSaga() {
  yield [
    takeLatest("SUBMIT_LOGIN", submitLogin),
    takeLatest("SUBMIT_RECOVERY", submitRecovery)
  ];
}
