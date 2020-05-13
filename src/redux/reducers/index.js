import { combineReducers } from 'redux'
import authReducer from './authReducer'
import applyListReducer from './applyListReducer'
import userAddCvReducer from './userAddCvReducer';

const rootReducer = combineReducers({ 
   auth: authReducer,
   applyListReducer,
   userAddCvReducer,
});

export default rootReducer;