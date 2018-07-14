import React from "react";
import Button from "../../../../components/button";
import CardHeader from "../../../../components/cardHeader";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import renderInput from "../../../../components/renderInput";
import LinkButton from "../LinkButton";
import { Redirect } from "react-router-dom";
import Alert from "../../../../components/alert";

const required = value => (value ? undefined : "Campo obrigatório!");

class Login extends React.Component {

  componentDidMount() {
    this.props.dispatch({ type: "INIT" });
  }
  
  render() {
    const { handleSubmit, submitValues, submitting, logged, errors } = this.props;
    return (
      <div className="layout-center">
        {logged && <Redirect to="/dashboard" />}

        <form onSubmit={handleSubmit(submitValues)} className="form-signin">
          <CardHeader title="Digital Prontuário" shadow="shadow-sm">
            <Alert errors={errors} />
            <Field
              name="email"
              id="email"
              className="form-control"
              component={renderInput}
              type="text"
              label="Email"
              validate={[required]}
            />
            <Field
              name="password"
              id="password"
              className="form-control"
              component={renderInput}
              type="password"
              label="Senha"
              validate={[required]}
            />
            <Button name="Entrar" submitting={submitting} color="primary" />

            <div className="d-flex justify-content-between mt-2 ">
              <LinkButton color="text-muted" url="/recovery">
                Esqueceu a senha?
              </LinkButton>
              <LinkButton color="text-primary" url="/register">
                Criar Conta
              </LinkButton>
            </div>
          </CardHeader>
        </form>
      </div>
    );
  }
}

Login = reduxForm({ form: "loginForm", initialValues: {} })(Login);

const mapDispatchToProps = dispatch => {
  return {
    submitValues: values => dispatch({ type: "LOGIN_REQUEST", payload: values })
  };
};

const mapStateToProps = state => ({
  logged: state.login.logged,
  errors: state.login.errors
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
