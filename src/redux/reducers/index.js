import { combineReducers } from "redux";
import authReducer from "./authReducer";
import applyListReducer from "./applyListReducer";
import departmentListReducer from "./departmentListReducer";
import titleListReducer from "./titleListReducer";
import userAddCvReducer from "./userAddCvReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  applyListReducer,
  departmentListReducer,
  titleListReducer,
  userAddCvReducer
});

export default rootReducer;
