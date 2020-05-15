import { combineReducers } from "redux";
import authReducer from "./authReducer";
import applyListReducer from "./applyListReducer";
import applyReducer from "./applyReducer";
import departmentListReducer from "./departmentListReducer";
import titleListReducer from "./titleListReducer";
import cvListReducer from "./cvListReducer";
import userAddCvReducer from "./userAddCvReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  applyListReducer,
  departmentListReducer,
  titleListReducer,
  cvListReducer,
  userAddCvReducer,
  applyReducer,
});

export default rootReducer;
