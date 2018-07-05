import { cloneableGenerator} from "redux-saga/utils";
import { call, take, fork,put } from "redux-saga/effects";
import { startSubmit, stopSubmit, reset } from "redux-form";
import { submitRecovery } from "./sagas";
import Api from "../../../../api";

describe("init saga recovery", () => {
  const generator = cloneableGenerator(submitRecovery)();
  const payload = { name: "test", password: "1324431" };

  it("waits for start action", () => {
    expect(generator.next().value).toEqual(put(startSubmit("recoveryForm")));
   // expect(generator.next(payload).value).toEqual(call(Api.fetch,"oapi/recoveryPass", payload));
  });

  // it("call the service", () => {
  //   console.log(generator.clone.name)
  // });

//   it("waits for logout or error action", () => {
//     expect(generator.next().value).toEqual(take(["LOGOUT", "LOGIN_ERROR"]));
//   });

//   it("call remove function ", () => {
//     expect(generator.next().value).toEqual(call(Api.clearItem, "data"));
//   });
});
