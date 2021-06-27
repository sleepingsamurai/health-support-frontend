import React from "react"
import ReactDOM from "react-dom"

class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <div className="loginform"> 
                    <form>
                        <input className="inp" type="text" placeholder="username"></input><br/><br/>
                        <input className="inp" type="text" placeholder="password"></input><br/><br/>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;