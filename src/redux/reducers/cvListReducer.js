import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function applyListReducer(state = initialState.cv, action) {
  switch (action.type) {
    case actionTypes.GET_CV_SUCCESS:
      return action.payload;
    case actionTypes.GET_BYCV_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
