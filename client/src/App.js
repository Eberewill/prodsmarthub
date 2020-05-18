import React, { Component } from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Alert from "./components/alert/Alert";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SignUp />
      </Provider>
    );
  }
}

export default App;
