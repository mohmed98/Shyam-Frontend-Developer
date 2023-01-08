/* eslint-disable import/no-anonymous-default-export */
import * as types from "../actions/types";

const initialState = {
  sampleList: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SAMPLE_LIST:
      return {
        ...state,
        sampleList: action.data,
      };

    default:
      return state;
  }
};
