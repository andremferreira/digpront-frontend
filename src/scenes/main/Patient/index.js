import React from "react";
import CardHeader from "../../../components/cardHeader";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import Address from "./components/Address";
import Contact from "./components/Contact";
import Personal from "./components/Personal";
import Button from "../../../components/button";

const required = value => (value ? undefined : "Campo obrigatório");

class Patient extends React.Component {

  handleChange = e => {
    this.props.submitCep(e.target.value);
  };

  render() {
    const { handleSubmit, submitValues, submitting, invalid } = this.props;

    return (
        <CardHeader title="Digital Prontuário">
          <form onSubmit={handleSubmit(submitValues)}>
            <div className="form-row">
              <Personal required={required} />
            </div>
            <div className="form-row">
              <Address required={required} onChange={this.handleChange} />
            </div>
            <div className="form-row">
              <Contact required={required} />
            </div>
          <Button name="salvar" color="primary" submitting={submitting} />
          </form>
        </CardHeader>
    );
  }
}

Patient = reduxForm({
  form: "patientForm",
  initialValues: {},
  enableReinitialize: true
})(Patient);

const mapDispatchToProps = dispatch => {
  return {
    submitCep: values => dispatch({ type: "CEP_REQUEST", payload: values }),
    submitValues: values => dispatch({ type: "SUBMIT_PATIENT", payload: values })
  };
};

const mapStateToProps = state => ({
  initialValues: state.patient
});

Patient = connect(
  mapStateToProps,
  mapDispatchToProps
)(Patient);

export default Patient;
