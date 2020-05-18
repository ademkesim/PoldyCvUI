import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function DepartmentListReducer(state=initialState.departments,action){

    switch (action.type) {
        
        case actionTypes.GET_DEPARTMENTS_SUCCESS:
            return action.payload;
        case actionTypes.GET_BY_DEPARTMENT_SUCCESS:
            return action.payload;
        case actionTypes.DELETE_DEPARTMENT_SUCCESS:
            const newState = state.filter(department=>(department.departmentId!==action.payload.departmentId))
            return newState;
            
        default:
            return state;
    }
}