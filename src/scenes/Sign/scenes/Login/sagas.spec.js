import { cloneableGenerator } from "redux-saga/utils";
import { call, take, fork } from "redux-saga/effects";

import { submitLogin, authorize } from "./sagas";
import Api from "../../../../api";

describe("init saga login", () => {
  const generator = cloneableGenerator(submitLogin)();
  const payload = { name: "test", password: "1324431" };

  it("waits for start action", () => {
    expect(generator.next().value).toEqual(take("LOGIN_REQUEST"));
  });

  it("forks the service", () => {
    expect(generator.next({ payload }).value).toEqual(fork(authorize, payload));
  });

  it("waits for logout or error action", () => {
    expect(generator.next().value).toEqual(take(["LOGOUT", "LOGIN_ERROR"]));
  });

  it("call remove function ", () => {
    expect(generator.next().value).toEqual(call(Api.clearItem, "data"));
  });
});
