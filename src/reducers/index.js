import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import  reducerLogin  from "../scenes/Login/reducer";

const rootReducer = combineReducers({
  form: reduxForm,
  reducerLogin
});

export default rootReducer;
