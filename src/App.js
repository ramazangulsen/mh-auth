import React from "react";

import { connect } from "react-redux";

import { Routes, Route, Link, NavLink } from "react-router-dom";
import SignUp from "./components/sign_up";
import Login from "./components/sign_in";
import LoginQue from "./components/login-que";
const App = (props) => {
  console.log(props.isDarkTheme);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login-que" element={<LoginQue />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};

const mapStateToProps = (state) => {
  return {
    isDarkTheme: state.isDarkTheme,
  };
};

export default connect(mapStateToProps)(App);
