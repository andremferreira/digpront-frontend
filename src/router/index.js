import React from "react";
import Login from "../scenes/Sign/scenes/Login";
import Register from "../scenes/Sign/scenes/Register";
import Recovery from "../scenes/Sign/scenes/Recovery";
import DashBoard from "../scenes/Dashboard";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Auth from "../auth";

const RouteApp = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/recovery" component={Recovery} />
          <Route path="/dashboard" component={Auth(DashBoard)} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default RouteApp;
