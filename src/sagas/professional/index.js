import { put, call } from "redux-saga/effects";
import Api from "../../api";

export function* getAllProfessional() {
  try {
    const { data } = yield call(Api.fetchGet, "oapi", "/profissoes");
    yield put({ type: "PROFESSIONAL_SUCCESS", payload: data });
  } catch (e) {
    console.log(e);
    yield put({ type: "PROFESSIONAL_FAILED", payload: e.response.data });
  }
}
