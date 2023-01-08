/* eslint-disable import/no-anonymous-default-export */
import * as types from "../actions/types";

const initialState = {
  capsuleList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CAPSULE_LIST:
      return {
        ...state,
        capsuleList: [...state.capsuleList, ...action.data],
      };

    default:
      return state;
  }
};
