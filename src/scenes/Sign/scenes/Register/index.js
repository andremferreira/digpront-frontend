import React from "react";

import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import CardHeader from "../../../../components/CardHeader";
import PersonalData from "../Register/components/PersonalData";
import Degree from "../Register/components/Degree";
import Personalize from "../Register/components/Personalize";

import Stepper from "react-stepper-horizontal";
import Button from "./components/Button";

const required = value => (value ? undefined : "Campo obrigatório");

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
    const { handleSubmit, submitValues, submitting, invalid } = this.props;
    const { steps, currentStep } = this.state;
    return (
      <div className="container">
        <form onSubmit={handleSubmit(submitValues)}>
          <Stepper
            className="mb-3"
            steps={steps}
            activeStep={currentStep}
            disabledSteps={[3]}
          />
          <CardHeader>
            {currentStep === 0 && <PersonalData required={required} />}
            {currentStep === 1 && <Degree required={required} />}
            {currentStep === 2 && <Personalize required={required} />}
            {currentStep !== 0 && (
              <Button
                name="voltar"
                onClick={this.onClickBack}
                outline="btn-outline-primary"
              />
            )}
            <Button
              name="Avançar"
              onClick={this.onClickNext}
              outline="btn-primary"
              submitting={submitting}
              invalid={invalid}
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
