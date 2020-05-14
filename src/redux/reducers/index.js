import { combineReducers } from "redux";
import authReducer from "./authReducer";
import applyListReducer from "./applyListReducer";
import departmentListReducer from "./departmentListReducer";
import titleListReducer from "./titleListReducer";
import cvListReducer from "./cvListReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  applyListReducer,
  departmentListReducer,
  titleListReducer,
  cvListReducer,
});

export default rootReducer;
