import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function departmentReducer(state=initialState.department,action){
    switch (action.type) {
        case actionTypes.GET_BY_DEPARTMENT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}