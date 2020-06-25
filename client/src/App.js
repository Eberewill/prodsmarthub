import React, { Component, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Alert from "./components/alert/Alert";
import AddProject from "./components/project/ProjectAdd";
import Nav from "./components/layout/nav/Nav";
import MainNav from "./components/layout/nav/MainNav";
import Footer from "./components/layout/Footer";
import PrivateRoute from "./components/routing/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import PrjectList from "./components/project/ProjectList";
import AddBug from "./components/project/Forms/AddBug";
//redux
import { Provider } from "react-redux";
import store from "./store/index";
import { loadUser, register } from "./store/actions/auth";
import SingleProject from "./components/project/SingleProject";
import setAuthToken from "./utils/setAuthToken";
import Project from "./components/project/Project";
import Profile from "./components/profile/Profile";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
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

                <PrivateRoute
                  exact
                  path="/singleproject"
                  component={SingleProject}
                />

                <PrivateRoute
                  exact
                  path="/projectlist"
                  component={PrjectList}
                />
                <PrivateRoute path="/project/:id" component={Project} />

                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/projectbug/:id" component={AddBug} />

                <PrivateRoute exact path="/addproject" component={AddProject} />
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
