import React from "react";
import Login from "../scenes/Sign/scenes/Login";
import Register from "../scenes/Sign/scenes/Register";
import Recovery from "../scenes/Sign/scenes/Recovery";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Auth from "../auth";
import Main from "../scenes/main";

const RouteApp = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Auth(Login)} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/recovery" component={Recovery} />
          <Route path="/" component={Auth(Main)} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default RouteApp;
