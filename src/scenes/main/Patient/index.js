import React from "react";
import CardHeader from "../../../components/cardHeader";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import Address from "./components/Address";
import Contact from "./components/Contact";
import Personal from "./components/Personal";

const required = value => (value ? undefined : "Campo obrigatório");

class Patient extends React.Component {


  handleChange = (e) => {
    console.log(e.target.value);
    this.props.getCep()
  }

  render() {
    return (
      <form>
        <CardHeader title="Digital Prontuário">
          <div className="form-row">
            <Personal required={required}/>
          </div>
          <div className="form-row">
            <Address required={required}  onChange={this.handleChange}/>
          </div>
          <div className="form-row">
            <Contact required={required} />
          </div>
        </CardHeader>
      </form>
    );
  }
}

Patient = reduxForm({ form: "patientForm", initialValues: {} })(Patient);

const mapDispatchToProps = dispatch => {
  return {
    getCep: values => dispatch({ type: "CEP_REQUEST", payload: values })
  };
};

const mapStateToProps = state => ({
  logged: state.login.logged
});

export default connect(
  null,
  mapDispatchToProps
)(Patient);
