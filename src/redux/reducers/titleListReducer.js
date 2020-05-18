import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function applyListReducer(state=initialState.titles,action){
    switch (action.type) {
        case actionTypes.GET_TITLE_SUCCESS:
            return action.payload;
            case actionTypes.DELETE_TİTLE_SUCCESS:
                const newState = state.filter(title=>(title.titleId!==action.payload.titleId))
                return newState;
        default:
            return state;
    }
}