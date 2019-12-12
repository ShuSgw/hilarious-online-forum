import authReducer from "./authReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authReducer: authReducer,
  postReducer: postReducer
});

export default rootReducer;
