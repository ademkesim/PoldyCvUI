<<<<<<< HEAD
import { combineReducers } from 'redux'
import authReducer from './authReducer'
import applyListReducer from './applyListReducer'
import userAddCvReducer from './userAddCvReducer';

const rootReducer = combineReducers({ 
   auth: authReducer,
   applyListReducer,
   userAddCvReducer,
=======
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import applyListReducer from "./applyListReducer";
import departmentListReducer from "./departmentListReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  applyListReducer,
  departmentListReducer,
>>>>>>> 3d1f3a182856f88b1ec46ff8e199e85bf9cbd51d
});

export default rootReducer;
