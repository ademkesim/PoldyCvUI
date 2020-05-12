import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function applyListReducer(state=initialState.applies,action){
    switch (action.type) {
        case actionTypes.GET_APPLIES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}