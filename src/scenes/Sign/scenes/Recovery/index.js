import React from "react";
import Button from "../../../../components/button";
import CardHeader from "../../../../components/CardHeader";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import renderField from "../../../../components/RenderField";
import LinkButton from "../LinkButton";

const required = value => (value ? undefined : "Campo obrigatório");

let Recovery = props => {
  const { handleSubmit, submitValues, submitting, errors } = props;
  return (
    <div className="layout-center">
      <form onSubmit={handleSubmit(submitValues)} className="form-signin">
        <CardHeader title="Recuperar Senha">
          <span className ="badge error mb-2">{errors && errors}</span>
          <Field
            name="crm"
            id="crm"
            className="form-control"
            component={renderField}
            type="text"
            label="CRM"
            validate={[required]}
          />
          <Field
            name="email"
            id="email"
            className="form-control"
            component={renderField}
            type="email"
            label="Email"
            validate={[required]}
          />

          <Button name="Recuperar senha" submitting={submitting} color="info" />
          <div className="d-flex justify-content-between mt-2 ">
            <LinkButton color="text-muted " url="/">
              Voltar ao login
            </LinkButton>
          
          </div>
        </CardHeader>
      </form>
    </div>
  );
};

Recovery = reduxForm({ form: "recoveryForm", initialValues: {} })(Recovery);

const mapDispatchToProps = dispatch => {
  return {
    submitValues: values =>
      dispatch({ type: "SUBMIT_RECOVERY", payload: values })
  };
};

const mapStateToProps = state => ({
  errors: state.recovery.errors
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recovery);
