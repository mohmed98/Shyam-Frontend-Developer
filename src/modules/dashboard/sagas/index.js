import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../actions/types";
import * as apiMethods from "../api";

function* getCapsuleListSaga({ filters, resolve, reject }) {
  try {
    const response = yield call(apiMethods.getCapsuleDataApi, filters);
    yield put(actions.setCapsuleListAction(response));
    resolve(response);
  } catch (err) {
    reject(err);
  }
}

export function* watchDashboard() {
  yield takeEvery(types.GET_CAPSULE_LIST, getCapsuleListSaga);
}

export default function* dashboardSaga() {
  yield all([fork(watchDashboard)]);
}
