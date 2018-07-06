import { put, call, take, fork } from "redux-saga/effects";
import { startSubmit, stopSubmit, reset } from "redux-form";
import Api from "../../../../api";

export function* authorize(payload) {
  try {
    yield put(startSubmit("loginForm"));
    const response = yield call(Api.post, "oapi/login", payload);
    const { nome } = response.data;
    yield put({ type: "LOGIN_SUCCESS", payload: { name: nome, logged: true } });
    yield call(Api.storageItem, "data", response.data);
    yield put(stopSubmit("loginForm"));
    yield put(reset("loginForm"));
    return response;
  } catch (e) {
    yield put({ type: "LOGIN_ERROR", payload: e.response.data });
    yield put(stopSubmit("loginForm", e.response.data));
  }
}

export default  function* submitLogin() {
  while (true) {
    const { payload } = yield take("LOGIN_REQUEST");
    yield fork(authorize, payload);
    yield take(["LOGOUT", "LOGIN_ERROR"]);
    yield call(Api.clearItem, "data");
  }
}
