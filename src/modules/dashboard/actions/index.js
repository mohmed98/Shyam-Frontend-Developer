import * as types from "../actions/types";

export const getCapsuleListAction = (params) => ({
  type: types.GET_CAPSULE_LIST,
  ...params,
});

export const setCapsuleListAction = (data) => ({
  type: types.SET_CAPSULE_LIST,
  data,
});
