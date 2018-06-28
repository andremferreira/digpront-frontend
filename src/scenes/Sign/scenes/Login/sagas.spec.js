import { createMockTask } from "redux-saga/utils";
import { put, call, take, fork, apply } from "redux-saga/effects";

import { submitLogin, authorize } from "./sagas";

describe("main", () => {
  const generator = submitLogin();
  const payload = { name: "test" };
  it("waits for start action", () => {
    const expectedYield = take("LOGIN_REQUEST");
    // console.log(generator.next().value)
    expect(generator.next().value).toEqual(expectedYield);
  });

  it("forks the service", () => {
   // const testValue = generator.next(payload).value;
   //console.log(testValue)
  const expectedYield = 
    //const mockedAction = { type: "START_BACKGROUND_SYNC" };
    expect(generator.next(payload).value).toEqual(fork(authorize, payload));
  });

  //   it('waits for stop action and then cancels the service', () => {
  //     const mockTask = createMockTask();

  //     const expectedTakeYield = take(STOP_BACKGROUND_SYNC);
  //     expect(generator.next(mockTask).value).to.deep.equal(expectedTakeYield);

  //     const expectedCancelYield = cancel(mockTask);
  //     expect(generator.next().value).to.deep.equal(expectedCancelYield);
  //   });
});

// xport function FetchTestData(){
//     return fetch('testdata.json')
//        .then((res)=> res.json())
//        .then((jsondata)=> {
//            const {dummyOutput} = jsondata.dummy
//            return dummyOutput
//        })
// }

// export  function* testFunction0 (action){
//     yield call(testFunction1,action.output)
//     yield call(delay,1000)
//     yield put(asyncFetchInitial())
//     try {
//         const dummyOutput = yield call(FetchTestData)
//         yield put(asyncFetchSuccess(dummyOutput))
//     } catch (error) {
//         console.log("Error in fetch" + error)
//         yield put(asyncFetchError())
//     }
// }

// export  function* testFunction1 (sagaPut){
//     yield call(delay, 1000)
//     yield put({type: 'ASYNC_TEST', output:"ASYNC_TEST -" + sagaPut})
//     yield put(asyncTestInitial())
//     yield put({type: 'ASYNC_TEST_NOACTIONCREATOR', output:"This action is not present in ActionCreator"})
// }
