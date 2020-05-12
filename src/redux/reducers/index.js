import { combineReducers } from 'redux'
import authReducer from './authReducer'
import applyListReducer from './applyListReducer'

const rootReducer = combineReducers({ 
   auth: authReducer,
   applyListReducer,
});

export default rootReducer;