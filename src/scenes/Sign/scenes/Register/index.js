import React from "react";

import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import CardHeader from "../../../../components/cardHeader";
import PersonalData from "../Register/components/PersonalData";
import Degree from "../Register/components/Degree";
import Personalize from "../Register/components/Personalize";

import Button from "./components/Button";
import NavBar from "../../../../components/navBar";
import { Apresentation } from "./components/Apresentation";
import { required } from "../../../../util";
import LinkMenu from "../../../../components/linkMenu";

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
    const { currentStep } = this.state;
    if (currentStep <= 3) {
      e.preventDefault();
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
          <LinkMenu url="/" label="Login" btn="true"/>
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
                {currentStep !== 2 && (
                  <Button
                    name="Próximo"
                    onClick={this.onClickNext}
                    outline="btn-primary float-right"
                    // submitting={submitting}
                    invalid={invalid}
                  />
                )}
                {currentStep !== 0 && (
                  <Button
                    name="voltar"
                    onClick={this.onClickBack}
                    outline="btn-outline-primary float-right"
                  />
                )}
                {currentStep === 2 && (
                  <button type="submit" className={`btn  mr-3 `}>
                    Enviar
                  </button>
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
