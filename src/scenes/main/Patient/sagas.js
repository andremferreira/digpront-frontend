import { put, call } from "redux-saga/effects";
import { startSubmit, stopSubmit, reset } from "redux-form";
import Api from "../../../api";

export function* submitPatient(action) {
  try {
    yield put(startSubmit("patientForm"));
    console.log("patient", JSON.stringify(action.payload));
    const response = yield call(
      Api.post,
      "api/cadastroPaciente",
      action.payload
    );
  //  yield put({ type: "PATIENT_SUCCESS", payload: response });
    yield put(stopSubmit("patientForm"));
    yield put(reset("patientForm"));
  } catch (e) {
    console.log("error",e.response.data);
    yield put({ type: "ERROR", payload: e.response.data });
    yield put(stopSubmit("patientForm", e.response.data));
  }
}
