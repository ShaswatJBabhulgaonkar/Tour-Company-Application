import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home.js";
import About from "./About.js";
import Login from "./Login.js";
import Tours from "./Tours.js";
import NotImplemented from "./NotImplemented.js";

class GuestApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {showing : "home"};
  }

  changeShow(state){
      this.setState({
        showing: state
      });
  }

  handleSuccessfulAuth(role, userInfo){
    this.props.handleLogin(role, userInfo);
  }
