import React from "react";
import CardHeader from "../../../components/cardHeader";
import { connect } from "react-redux";
import { reduxForm, change } from "redux-form";
import Address from "./components/Address";
import Contact from "./components/Contact";
import Personal from "./components/Personal";
import Button from "../../../components/button";

const required = value => (value ? undefined : "Campo obrigatório");

class Patient extends React.Component {
  componentDidMount() {
    this.props.getUf();
    this.props.getProfessional();
  }

  findCepChange = e => {
    this.props.submitCep(e.target.value);
    const cep = {
      estado: "",
      cidade: "",
      bairro: ""
    };
    this.updateFieldComingCep(cep);
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.cep !== nextProps.cep) {
      this.updateFieldComingCep(nextProps.cep);
      return true;
    }
    return false;
  }

  updateFieldComingCep(cep) {
    this.props.setEstado(cep.estado);
    this.props.setCidade(cep.cidade);
    this.props.setBairro(cep.bairro);
  }

  convertDataUf() {
    const list = this.props.uf || [];
    return list.length > 0 && list.map(l => ({ name: l.slgUf }));
  }

  convertDataProfessional() {
    const list = this.props.professional || [];
    return list.length > 0 && list.map(l => ({ name: l.dscProf }));
  }

  render() {
    const { handleSubmit, submitValues, submitting, invalid } = this.props;
    return (
      <CardHeader title="Digital Prontuário">
        <form onSubmit={handleSubmit(submitValues)}>
          <div className="form-row">
            <Personal required={required} />
          </div>
          <div className="form-row">
            <Address
              required={required}
              onChange={this.findCepChange}
              ufs={this.convertDataUf()}
            />
          </div>
          <div className="form-row">
            <Contact
              required={required}
              professional={this.convertDataProfessional()}
            />
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
  enableReinitialize: false
})(Patient);

const mapDispatchToProps = dispatch => {
  return {
    submitCep: values => dispatch({ type: "CEP_REQUEST", payload: values }),
    submitValues: values =>
      dispatch({ type: "SUBMIT_PATIENT", payload: values }),
    getUf: () => dispatch({ type: "UF_ALL" }),
    getProfessional: () => dispatch({ type: "PROFESSIONAL_ALL" }),
    setEstado: value => dispatch(change("patientForm", "estado", value)),
    setCidade: value => dispatch(change("patientForm", "cidade", value)),
    setBairro: value => dispatch(change("patientForm", "bairro", value))
  };
};


const mapStateToProps = state => ({
  cep: state.cep,
  uf: state.uf,
  professional: state.professional,
});

Patient = connect(
  mapStateToProps,
  mapDispatchToProps
)(Patient);

export default Patient;
