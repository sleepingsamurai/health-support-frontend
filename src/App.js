import { Component } from "react";
import AuthType from "./components/AuthType.js";
import DashboardUser from "./components/DashboardUser.js";
import DashboardAdmin from "./components/DashboardAdmin.js";
import { addRSAMissing } from "sshpk";

class App extends Component{
  constructor(){
    super();
    this.state = {
      loggedIn: true,
      auth: "user",
    }
  }
  render(){
    return(
        <div>
          {this.state.loggedIn?(this.state.auth=="admin"?<DashboardAdmin />:<DashboardUser />):<AuthType/>}
        </div>
    )
  }
    
}

export default App;
