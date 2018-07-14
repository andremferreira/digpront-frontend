import React from "react";
import Button from "../../../../components/button";
import CardHeader from "../../../../components/cardHeader";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import renderInput from "../../../../components/renderInput";
import LinkButton from "../LinkButton";
import Alert from "../../../../components/alert";

const required = value => (value ? undefined : "Campo obrigatório");

class Recovery extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: "INIT" });
  }

  render() {
    const { handleSubmit, submitValues, submitting, errors, data } = this.props;
    return (
      <div className="layout-center">
        <form onSubmit={handleSubmit(submitValues)} className="form-signin">
          <CardHeader title="Recuperar Senha" shadow="shadow-sm">
            <Alert errors={errors} data={data} />
            <Field
              name="crm"
              id="crm"
              className="form-control"
              component={renderInput}
              type="text"
              label="CRM"
              validate={[required]}
            />
            <Field
              name="email"
              id="email"
              className="form-control"
              component={renderInput}
              type="email"
              label="Email"
              validate={[required]}
            />

            <Button
              name="Recuperar senha"
              submitting={submitting}
              color="info"
            />
            <div className="d-flex justify-content-between mt-2 ">
              <LinkButton color="text-muted " url="/">
                Voltar ao login
              </LinkButton>
            </div>
          </CardHeader>
        </form>
      </div>
    );
  }
}

Recovery = reduxForm({ form: "recoveryForm", initialValues: {} })(Recovery);

const mapDispatchToProps = dispatch => {
  return {
    submitValues: values =>
      dispatch({ type: "SUBMIT_RECOVERY", payload: values })
  };
};

const mapStateToProps = state => ({
  data: state.recovery.data,
  errors: state.recovery.errors
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recovery);
