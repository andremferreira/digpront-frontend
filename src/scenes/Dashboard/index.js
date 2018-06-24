import React, { Component } from "react";
import "../../App.css";
import Button from "../../components/button";

class DashBoard extends Component {

  constructor(props){
    super(props)
    this.click = this.clik.bind(this);
  }

 componentDidMount(){
   //
  }

  clik(){
    localStorage.removeItem("data");
  }

  render() {
    return (
      <div>
        <nav className="navbar top-navbar navbar-expand-md navbar-light bg-white shadow-sm ">
          <a className="navbar-brand col-md-2" href="#">
            Empresa
          </a>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
            >
              <h3>DigPront</h3>
             <Button onClick={this.clik} color="warning" name="remove"/>
              {/* <Route path="/dashboard" component={DashBoard} />
              <Route path="/customer" component={Customer} />
              <Route path="/provider" component={Provider} />
              <Route path="/stock" component={Stock} /> */}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
