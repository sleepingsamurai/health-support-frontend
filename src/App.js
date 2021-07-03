import { Component } from "react";
import AuthType from "./components/AuthType.js";
import Dashboard from "./components/Dashboard.js";

class App extends Component{
  constructor(){
    super();
    this.state = {
      loggedIn: true,
    }
  }
  render(){
    return(
        <div>
          {this.state.loggedIn?<Dashboard />:<AuthType/>}
        </div>
    )
  }
    
}

export default App;
