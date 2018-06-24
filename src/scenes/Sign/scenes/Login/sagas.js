import { put, call } from "redux-saga/effects";
import { startSubmit, stopSubmit, reset } from "redux-form";
import Api from "../../../../api";

export default function* submitLogin(action) {
  try {
    yield put(startSubmit("loginForm"));
    const response = yield call(Api.fetch, "oapi/login", action.payload);

    const { nome } = response.data;
    save(response.data)

    yield put({ type: "LOGIN_SUCCESS", payload: { name: nome, logged: true } });
    yield put(stopSubmit("loginForm"));
    yield put(reset("loginForm"));
  } catch (e) {
    yield put({ type: "LOGIN_ERROR", payload: e.response.data });
    yield put(stopSubmit("loginForm", e.response.data));
  }
}

const save = (data)=>{
  localStorage.setItem("data", JSON.stringify(data));
};
