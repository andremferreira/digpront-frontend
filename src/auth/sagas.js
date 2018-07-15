import { put, call, take } from "redux-saga/effects";
import Api from "../api";

export default function* authenticated() {
  const { history } = yield take("AUTHENTICATED");
  const response = yield call(Api.getStorageItem, "data");
  if (response) {
    const { nome } = response;
    yield put({ type: "LOGIN_SUCCESS", payload: { name: nome, logged: true } });
    return;
  }
  yield history.push("/");
}
