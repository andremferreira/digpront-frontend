import React from "react";
import "../../App.css";
import Button from "../../components/button";
import Patient from "./scenes/Patient";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import LinkButton from "../Sign/scenes/LinkButton";
import { NavBar } from "../../components/NavBar";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  componentDidMount() {}

  click() {
    //  this.props.history.push("/patient")
    this.props.dispatch({ type: "LOGOUT" });
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar
            title="DigProntuário"
            color="navbar-light"
            bg="bg-white"
            shadow="shadow-sm"
          />

          <div className="container-fluid">
            <div className="row">
              <main
                role="main"
                className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
              >
                <Button onClick={this.click} name="logout" />
                <LinkButton color="text-muted" url="/patient">
                  Esqueceu a senha?
                </LinkButton>
                <Route path="/patient" component={Patient} />
              </main>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashBoard;
