import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function applyListReducer(state=initialState.departments,action){
    switch (action.type) {
        case actionTypes.GET_DEPARTMENTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}