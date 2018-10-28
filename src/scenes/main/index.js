import React from "react";
import "../../App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Patient from "./Patient";
import NavBar from "../../components/navBar";
import DropDown from "../../components/dropDown";
import NavMenu from "../../components/navMenu";
import Dashboard from "./Dashboard";
import MedicalRecord from "./MedicalRecord";

const menu = [
  { label: "DashBoard", url: "/dashboard" },
  { label: "Pacientes", url: "/patient" },
  { label: "Fila de Atendimento", url: "/patient" },
  { label: "Agendamentos", url: "/medicalRecord" }
];

class Main extends React.Component {
  componentDidMount() {}

  render() {
    const { logout } = this.props;
    return (
      <Router>
        <div>
          <NavBar
            title="DigProntuário"
            color="navbar-light"
            bg="bg-white"
            shadow="shadow-sm"
          >
            <DropDown onClick={logout} />
          </NavBar>

          <div className="container-fluid">
            <div className="row">
              <NavMenu items={menu} />
              <main
                role="main"
                className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
              >
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/patient" component={Patient} />
                <Route path="/medicalRecord" component={MedicalRecord} />
              </main>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: "LOGOUT" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Main);
