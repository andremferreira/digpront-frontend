import React from "react";
import { connect } from "react-redux";

const Auth = Component => {
  class App extends Component {
    componentDidMount() {
      const { verifyAuthenticated, logged, history } = this.props;
      if (!logged) {
        verifyAuthenticated(history);
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.logged !== this.props.logged) {
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    logged: state.login.logged
  });

  const mapDispatchToProps = dispatch => {
    return {
      verifyAuthenticated: history =>
        dispatch({ type: "AUTHENTICATED", history })
    };
  };
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
};

export default Auth;
