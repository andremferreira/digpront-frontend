import { fork, takeLatest } from "redux-saga/effects";
import submitLogin from "../scenes/Sign/scenes/Login/sagas";
import submitRecovery from "../scenes/Sign/scenes/Recovery/sagas";
import submitRegister from "../scenes/Sign/scenes/Register/sagas";
import { submitPatient } from "../scenes/main/Patient/sagas";
import authenticated from "../auth/sagas";
import { getAllProfessional } from "../sagas/professional";
import { getAllUf } from "../sagas/uf";
import { getCep } from "../sagas/cep/";

//Li@7031811
export default function* rootSaga() {
  yield [
    fork(submitLogin),
    fork(authenticated),
    fork(takeLatest, "SUBMIT_RECOVERY", submitRecovery),
    fork(takeLatest, "SUBMIT_REGISTER", submitRegister),
    fork(takeLatest, "SUBMIT_PATIENT", submitPatient),
    fork(takeLatest, "CEP_REQUEST", getCep),
    fork(takeLatest, "UF_ALL", getAllUf),
    fork(takeLatest, "PROFESSIONAL_ALL", getAllProfessional)
  ];
}
