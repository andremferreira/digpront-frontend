import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import login from "../scenes/Sign/scenes/Login/reducer";
import recovery from "../scenes/Sign/scenes/Recovery/reducer";

const rootReducer = combineReducers({
  form: reduxForm,
  login,
  recovery
});

export default rootReducer;
