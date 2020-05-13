import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function userAddCvReducer(state=initialState.cv,action){
    switch (action.type) {
        case actionTypes.CREATE_CV_SUCCESS:
            return action.payload;
        default:
           return state;
    }

}