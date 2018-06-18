import React from "react";
import Button from "../../components/button";
import CardHeader from "../../components/CardHeader";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

const renderField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div className={`form-group${touched && error ? ' has-error' : ''}`}>
      <input {...input} placeholder={label} type={type} className={className} />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
);

const required = value => (value ? undefined : "Campo obrigatório");

let Login = props => {
  const { handleSubmit, submitValues, submitting } = props;
  return (
    <div className="layout-center">
      <form onSubmit={handleSubmit(submitValues)} className="was-validated">
        <CardHeader title="Digital Prontuário">
          <Field
            name="username"
            id="username"
            className="form-control mb-3"
            component={renderField}
            type="text"
            label="Email"
            validate={[required]}
          />
          <Field
            name="password"
            id="password"
            className="form-control mb-3"
            component={renderField}
            type="password"
            label="Senha"
            validate={[required]}
          />
          <Button name="Login" submitting={submitting} />
        </CardHeader>
      </form>
    </div>
  );
};

Login = reduxForm({ form: "loginForm", initialValues: {} })(Login);

const mapDispatchToProps = dispatch => {
  return {
    submitValues: values => dispatch({ type: "SUBMIT_LOGIN", payload: values })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
