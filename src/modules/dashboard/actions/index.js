import * as types from "../actions/types";

export const getSampleAction = (params) => ({
  type: types.GET_SAMPLE_LIST,
  ...params,
});

export const setSampleAction = (data) => ({
  type: types.SET_SAMPLE_LIST,
  data,
});
