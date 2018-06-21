import React from "react";

import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import CardHeader from "../../../../components/CardHeader";
import PersonalData from "../Register/components/PersonalData";
import Degree from "../Register/components/Degree";
import Personalize from "../Register/components/Personalize";

import Stepper from "react-stepper-horizontal";
import ButtonNext from "./components/ButtonNext";
import ButtonBack from "./components/ButtonBack";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      steps: [
        {
          title: "Dados pessoais"
        },
        {
          title: "Formação"
        },
        {
          title: "Personalizar"
        }
      ],
      currentStep: 0
    };

    this.onClickNext = this.onClickNext.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
  }

  onClickNext() {
    const { currentStep } = this.state;
    if (currentStep <= 3) {
      this.setState({
        currentStep: currentStep + 1
      });
    }
  }

  onClickBack() {
    const { currentStep } = this.state;
    if (currentStep >= 0) {
      this.setState({
        currentStep: currentStep - 1
      });
    }
  }

  render() {
    const { handleSubmit, submitValues, submitting } = this.props;
    const { steps, currentStep } = this.state;
    return (
      <div className="layout-center">
        <form onSubmit={handleSubmit(submitValues)} className="form-register">
          <Stepper
            className="mb-3"
            steps={steps}
            activeStep={currentStep}
            disabledSteps={[3]}
          />
          <CardHeader>
            {currentStep === 0 && <PersonalData />}
            {currentStep === 1 && <Degree />}
            {currentStep === 2 && <Personalize />}

            <ButtonBack name="voltar" onClick={this.onClickBack}/>
            <ButtonNext
              name="Avançar"
              // submitting={submitting}
              onClick={this.onClickNext}
            />
          </CardHeader>
        </form>
      </div>
    );
  }
}

Register = reduxForm({ form: "registerForm", initialValues: {} })(Register);

const mapDispatchToProps = dispatch => {
  return {
    submitValues: values =>
      dispatch({ type: "SUBMIT_REGISTER", payload: values })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
