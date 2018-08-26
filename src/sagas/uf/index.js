import { put, call } from "redux-saga/effects";
import Api from "../../api";

export function* getAllUf() {
  try {
    const { data } = yield call(Api.fetchGet, "oapi", "/slgUf");
    yield put({ type: "UF_SUCCESS", payload: data });
  } catch (e) {
    console.log(e);
    yield put({ type: "UF_FAILED", payload: e.response.data });
  }
}
