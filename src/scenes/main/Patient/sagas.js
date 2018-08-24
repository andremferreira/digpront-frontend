import { put, call } from "redux-saga/effects";
import { startSubmit, stopSubmit, reset } from "redux-form";
import Api from "../../../api";

export function* findCep(action) {
  try {
    const { data } = yield call(Api.fetchGet, "oapi/ceps/", action.payload);
    yield put({ type: "CEP_SUCCESS", data });
  } catch (e) {
    yield put({ type: "CEP_ERROR", payload: e.response.data });
  }
}

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
    yield put({ type: "PATIENT_ERROR", payload: e.response.data });
    yield put(stopSubmit("patientForm", e.response.data));
  }
}
