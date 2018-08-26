import { put, call } from "redux-saga/effects";
import Api from "../../api";

export function* getCep(action) {
  try {
    const { data } = yield call(Api.fetchGet, "oapi/ceps/", action.payload);
    if (data.length > 0) {
      yield put({ type: "CEP_SUCCESS", payload: data[0] });
      return;
    }
    yield put({ type: "CEP_NOT_FIND", payload: {} });
  } catch (e) {
    yield put({ type: "CEP_FAILED", payload: e.response.data });
  }
}
