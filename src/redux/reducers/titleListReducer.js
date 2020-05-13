import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function applyListReducer(state=initialState.titles,action){
    switch (action.type) {
        case actionTypes.GET_TITLE_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}