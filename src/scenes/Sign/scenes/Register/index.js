import React from "react";

import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import CardHeader from "../../../../components/CardHeader";
import PersonalData from "../Register/components/PersonalData";
import Degree from "../Register/components/Degree";
import Personalize from "../Register/components/Personalize";

import Stepper from "react-stepper-horizontal";
import Button from "./components/Button";
import { NavBar } from "../../../../components/NavBar";
import { Apresentation } from "./components/Apresentation";

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

  onClickNext(e) {
    e.preventDefault();
    const { currentStep } = this.state;
    if (currentStep <= 3) {
      this.setState({
        currentStep: currentStep + 1
      });
    }
  }

  onClickBack(e) {
    e.preventDefault();
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
        <NavBar title="DigProntuário" color="navbar-light">
          <button className="btn btn-outline-primary"> Login</button>
        </NavBar>

        <form onSubmit={handleSubmit(submitValues)}>
          {/* <Stepper
            className="mb-3"
            steps={steps}
            activeStep={currentStep}
            disabledSteps={[3]}
          /> */}
          <CardHeader shadow="shadow-sm">
            <div className="row">
              <div className="col-6 ">
                <Apresentation title="Software DigProntuário">
                  <small>
                    {" "}
                    Fácil de usar, com agenda, prontuário médico, prescrição
                    eletrônica.{" "}
                  </small>
                </Apresentation>
                <Apresentation title="Suporte">
                  {" "}
                  <small>
                    {" "}
                    Preocupado com nossos clientes estamos com suporte 24/7{" "}
                  </small>
                </Apresentation>
                <Apresentation title="Na nuvem">
                  {" "}
                  <small>Funciona na web , é rapido e prático.</small>
                </Apresentation>
              </div>
              <div className="col-6 mt-3">
                {currentStep === 0 && <PersonalData required={required} />}
                {currentStep === 1 && <Degree required={required} />}
                {currentStep === 2 && <Personalize required={required} />}
              </div>
              <div className="col-12 ">
                <Button
                  name="Próximo"
                  onClick={this.onClickNext}
                  outline="btn-primary float-right"
                  submitting={submitting}
                  invalid={invalid}
                />
                {currentStep !== 0 && (
                  <Button
                    name="voltar"
                    onClick={this.onClickBack}
                    outline="btn-outline-primary float-right"
                  />
                )}
              </div>
            </div>
            
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
