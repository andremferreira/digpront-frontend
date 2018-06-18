
import { put, takeLatest, call} from "redux-saga/effects";
import { startSubmit, stopSubmit, reset, initialize } from "redux-form";

function* submitLogin(action) {
   // yield put(startSubmit("loginForm"));
    try {
      console.log("loginForm", action.payload);
      //yield call(saveProvider, action.payload);
     // yield put(stopSubmit("loginForm"));
     // yield put(reset("loginForm"));
    } catch (e) {
      console.log("loginForm", e.response.data);
      yield put(stopSubmit("loginForm", e.response.data));
    }
  }


export default function* rootSaga(){
    console.log("hello Sagas");
    yield [
        takeLatest("SUBMIT_LOGIN", submitLogin)
      ];
}