import { call, put } from "redux-saga/effects";
import { startSubmit, stopSubmit, reset } from "redux-form";
import Api from "../../../../api";

export default function* submitRegister(action) {
  try {
    yield put(startSubmit("registerForm"));
    console.log("register",action.payload)
    //const response = yield call(Api.post, "/signup", action.payload);
   // yield put({ type: "REGISTER_SUCCESS", payload: response });
    yield put(stopSubmit("registerForm"));
    yield put(reset("registerForm"));
  } catch (e) {
    yield put({ type: "REGISTER_ERROR", payload: e.response.data });
    yield put(stopSubmit("registerForm", e.response.data));
  }
}
