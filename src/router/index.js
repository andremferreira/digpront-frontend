import React from "react";
import Login from "../scenes/Sign/scenes/Login";
import Register from "../scenes/Sign/scenes/Register";
import Recovery from "../scenes/Sign/scenes/Recovery";
import DashBoard from "../scenes/Dashboard";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

const Auth = Component => {
  return class App extends Component {
    componentWillMount() {
      const token = localStorage.getItem("data");
      if (token) {
        this.props.history.replace({ pathname: "/" });
      } else {
        this.props.history.replace({ pathname: "/login" });
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  };
};

const RouteApp = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Auth(DashBoard)} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/recovery" component={Recovery} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default RouteApp;
