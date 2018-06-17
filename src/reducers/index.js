import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

const rootReducer = combineReducers({
  reduxForm: reduxForm
});

export default rootReducer;
