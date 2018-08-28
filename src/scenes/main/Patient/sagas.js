import { put, call, select } from "redux-saga/effects";
import { startSubmit, stopSubmit, reset } from "redux-form";
import Api from "../../../api";

export function* submitPatient(action) {
  try {
    const { token } = yield select(state => state.login);
    yield put(startSubmit("patientForm"));
    console.log("patient", JSON.stringify(action.payload));
    const response = yield call(
      Api.post,
      "api/cadastroPaciente",
      action.payload,
      token
    );
    yield put({ type: "PATIENT_SUCCESS", payload: response });
    yield put(stopSubmit("patientForm"));
    yield put(reset("patientForm"));
  } catch (e) {
    console.log("error", e);
    yield put({ type: "ERROR", payload: e.response.data });
    yield put(stopSubmit("patientForm", e.response.data));
  }
}
