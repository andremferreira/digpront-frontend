import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

import Login from "./scenes/Sign/scenes/Login";
import Register from "./scenes/Sign/scenes/Register";

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    // reduxDevTools
  )
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
