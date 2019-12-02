import React from "react";

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.HandleEmailChange = this.HandleEmailChange.bind(this);
    this.HandlePasswordChange = this.HandlePasswordChange.bind(this);
  }

  Login(){
    if("admin@email.org" === this.state.email){
      this.props.handleSuccessfulAuth("admin", {name: "shaswat_admin", netId:"xk4839"});
    }
    else if("cust@email.org" === this.state.email){
      this.props.handleSuccessfulAuth("customer", {name: "shaswat_customer", netId:"xk4839"});
    }
    else{
      this.props.handleSuccessfulAuth("guest", {});
