import { fork, takeLatest } from "redux-saga/effects";
import submitLogin from "../scenes/Sign/scenes/Login/sagas";
import submitRecovery from "../scenes/Sign/scenes/Recovery/sagas";
import submitRegister from "../scenes/Sign/scenes/Register/sagas";
import { findCep, submitPatient } from "../scenes/main/Patient/sagas";
import authenticated from "../auth/sagas";
//Li@7031811
export default function* rootSaga() {
  yield [
    fork(submitLogin),
    fork(authenticated),
    fork(takeLatest, "SUBMIT_RECOVERY", submitRecovery),
    fork(takeLatest, "SUBMIT_REGISTER", submitRegister),
    fork(takeLatest, "SUBMIT_PATIENT", submitPatient),
    fork(takeLatest, "CEP_REQUEST", findCep),
  ];
}
