import { put, call, take, fork } from "redux-saga/effects";
import { startSubmit, stopSubmit, reset } from "redux-form";
import Api from "../../../api";

export default function* findCep(action) {
  try {
    yield put(startSubmit("patientForm"));
    const { token } = yield call(Api.getStorageItem, "data");
    const response = yield call(Api.post, "oapi/ceps", action.payload);
    console.log(response);
    const { data } = response.data;
    yield put({ type: "CEP_SUCCESS", payload: data });
    yield put(stopSubmit("patientForm"));
    yield put(reset("patientForm"));
  } catch (e) {
    yield put({ type: "CEP_ERROR", payload: e.response.data });
    yield put(stopSubmit("patientForm", e.response.data));
  }
}
