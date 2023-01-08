/*
 * combines all th existing reducers
 */
import { combineReducers } from "redux";
import dashboardReducer from "../modules/dashboard/reducer";

const reducers = combineReducers({
  dashboard: dashboardReducer,
});

export default reducers;
