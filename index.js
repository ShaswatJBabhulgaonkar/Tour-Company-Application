import React from "react";
import ReactDOM from "react-dom";
import GuestApp from "/guest/GuestApp.js";
import AdminApp from "/admin/AdminApp.js";
import CustomerApp from "/customer/CustomerApp.js";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      role : "guest",
      userInfo : ""
    };
  }

  handleLogin(role, userInfo){
    console.log("logging in...");
    this.setState({
      role : role,
      userInfo : userInfo
    });
  }

  handleLogout(){
    console.log("logging out...");
    this.setState({
      role: "guest",
      userInfo: ""
    });
  }

  render(){

    let navigation;
    if(this.state.role === "guest"){
      navigation = <GuestApp handleLogin={this.handleLogin.bind(this)} />;
    }
    else if((this.state.role === "customer")){
      navigation = <CustomerApp handleLogout={this.handleLogout.bind(this)} />;
    }
    else if(this.state.role === "admin"){
      navigation = <AdminApp handleLogout={this.handleLogout.bind(this)} />;
    }

    return <div>
            {navigation}
          </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
