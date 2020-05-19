import React, { Component } from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Alert from "./components/alert/Alert";
import Nav from "./components/layout/nav/Nav";
import setAuthToken from "./utils/setAuthToken";
import Footer from "./components/layout/Footer";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
};

export default App;
