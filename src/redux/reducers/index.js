import { combineReducers } from "redux";
import authReducer from "./authReducer";
import applyListReducer from "./applyListReducer";
import departmentListReducer from "./departmentListReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  applyListReducer,
  departmentListReducer,
});

export default rootReducer;
