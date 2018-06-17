import React from "react";
import Button from "../../components/button";
import CardHeader from "../../components/CardHeader";
import Input from "../../components/input";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class Login extends React.Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="login">
        <form onSubmit={handleSubmit}>
          <CardHeader title="Digital Prontuário">
            <Field
              name="username"
              component={Input}
              //readOnly={readOnly}
              cols="12"
              //normalize={upper}
              //validate={[required]}
            />
            <Field
              name="password"
              component={Input}
              //readOnly={readOnly}
              cols="12"
              //normalize={upper}
              //validate={[required]}
            />
            {/* <Input place="Login" />
          <Input place="Senha" /> */}
            <Button  name="Login" />
          </CardHeader>
        </form>
      </div>
    );
  }
}

Login = reduxForm({
  form: "login"
})(Login);

const mapDispatchToProps = {};
Login = connect(
  null,
  mapDispatchToProps
)(Login);

export default Login;
