import React from "react";
import {  connect } from "react-redux";

const Auth = Component => {
  class App extends Component {
    componentDidMount() {
      if (!this.props.logged) this.redirect();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.logged !== this.props.logged) {
      }
    }

    redirect = () => this.props.history.push("/");

    render() {
      return <Component {...this.props} />;
    }
  }
  const mapStateToProps = state => ({
    logged: state.login.logged
  });

  return connect(
    mapStateToProps,
    null
  )(App);
};

export default Auth;
