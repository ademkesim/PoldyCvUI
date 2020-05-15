import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function applyListReducer(state=initialState.apply,action){
    switch (action.type) {
        case actionTypes.GET_BYID_APPLY:
            return action.payload;
        default:
            return state;
    }
}