import React, { Component, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Alert from "./components/alert/Alert";
import Nav from "./components/layout/nav/Nav";
import MainNav from "./components/layout/nav/MainNav";
import Embed from "./components/embed/Embed";

import Footer from "./components/layout/Footer";
import PrivateRoute from "./components/routing/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

//redux
import { Provider } from "react-redux";
import store from "./store/index";
import { loadUser, register } from "./store/actions/auth";
import setAuthToken from "./utils/setAuthToken";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="wrapper">
            <Nav />
            <div className="main">
              <MainNav />
              <Alert />
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />

                <PrivateRoute exact path="/video" component={Embed} />
              </Switch>

              <Footer />
            </div>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
