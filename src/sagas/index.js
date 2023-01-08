import { all } from "redux-saga/effects";
import dashboardSagas from "../modules/dashboard/sagas";

export default function* rootSaga() {
  yield all([dashboardSagas()]);
}
