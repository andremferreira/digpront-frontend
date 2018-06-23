import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import reducerLogin from "../scenes/Sign/scenes/Login/reducer";
import reducerRecovery from "../scenes/Sign/scenes/Recovery/reducer";

const rootReducer = combineReducers({
  form: reduxForm,
  reducerLogin,
  reducerRecovery
});

export default rootReducer;
