import React from "react";
import Button from "../../../../components/button";
import CardHeader from "../../../../components/CardHeader";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import renderField from "../../../../components/RenderField";
import LinkButton from "../../../Sign/scenes/LinkButton";

const required = value => (value ? undefined : "Campo obrigatório");

let Patient = props => {
  
  return (
    <div className="layout-center">

      <form  className="form-signin">
        <CardHeader title="Digital Prontuário">
          <Field
            name="email"
            id="email"
            className="form-control"
            component={renderField}
            type="text"
            label="Email"
            validate={[required]}
          />
        </CardHeader>
      </form>
    </div>
  );
};

Patient = reduxForm({ form: "patientForm", initialValues: {} })(Patient);

const mapDispatchToProps = dispatch => {
  return {
    submitValues: values => dispatch({ type: "LOGIN_REQUEST", payload: values })
  };
};

const mapStateToProps = state => ({
  logged: state.login.logged
});

export default connect(null,null)(Patient);
