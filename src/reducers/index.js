import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import login from "../scenes/Sign/scenes/Login/reducer";
import recovery from "../scenes/Sign/scenes/Recovery/reducer";
import register from "../scenes/Sign/scenes/Register/reducer";
import patient from "../scenes/main/Patient/reducer";
import cep from "../sagas/cep/reducer";
import professional from "../sagas/professional/reducer";
import uf from "../sagas/uf/reducer";

const rootReducer = combineReducers({
  form: reduxForm,
  login,
  recovery,
  register,
  patient,
  cep,
  professional,
  uf
});

export default rootReducer;
