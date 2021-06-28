import React from "react"
import ReactDOM from "react-dom"

class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <div className="loginform"> 
                    <form>
                        <h4 className="heading">Login</h4>
                        <input className="inp" type="text" placeholder="Username"></input><br/><br/>
                        <input className="inp" type="text" placeholder="Password"></input><br/><br/>
                        <input type="submit" className="btn btn-dark"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;