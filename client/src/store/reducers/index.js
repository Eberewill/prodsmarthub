import { combineReducers } from "redux";
import customerReducer from "./customer";
import alert from "./alert";
import auth from "./auth";

export default combineReducers({
  alert,
  auth,
});
