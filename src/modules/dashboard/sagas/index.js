import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../actions/types";
import * as apiMethods from "../api";

function* getSampleListSaga({ data, filters, resolve, reject }) {
  try {
    const response = yield call(apiMethods.getSampleApi, filters, data);
    yield put(actions.setSampleAction(response));
    resolve(response);
  } catch (err) {
    reject(err);
  }
}

export function* watchDashboard() {
  yield takeEvery(types.GET_SAMPLE_LIST, getSampleListSaga);
}

export default function* dashboardSaga() {
  yield all([fork(watchDashboard)]);
}
