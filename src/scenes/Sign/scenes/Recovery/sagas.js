import { put, call } from "redux-saga/effects";
import { startSubmit, stopSubmit, reset } from "redux-form";
import Api from "../../../../api";

export default function* submitRecovery(action) {
  try {
    yield put(startSubmit("recoveryForm"));
    const response = yield call(Api.fetch, "oapi/recoveryPass", action.payload);
    yield put({ type: "RECOVERY_SUCCESS", payload: response });
    yield put(stopSubmit("recoveryForm"));
    yield put(reset("recoveryForm"));
  } catch (e) {
    yield put({ type: "RECOVERY_ERROR", payload: e.response.data });
    yield put(stopSubmit("recoveryForm", e.response.data));
  }
}