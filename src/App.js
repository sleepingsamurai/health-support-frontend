import { Component } from "react";
import AuthType from "./components/AuthType.js";
import Dashboard from "./components/Dashboard.js";
import { addRSAMissing } from "sshpk";

 function App(){
 
    return(
        <div>
          <Dashboard />
        </div>
    )
  }

export default App;
