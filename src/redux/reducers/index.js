import { combineReducers } from "redux";
import authReducer from "./authReducer";
import applyListReducer from "./applyListReducer";
import departmentListReducer from "./departmentListReducer";
import titleListReducer from "./titleListReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  applyListReducer,
  departmentListReducer,
  titleListReducer,
});

export default rootReducer;
