import React from "react"
import ReactDOM from "react-dom"


class RegisterPage extends React.Component{
    render(){
        return(
            <div>
                <div className="registerform"> 
                    <form>
                        <h4 className="heading">Register</h4>
                        <input className="inp" type="text" placeholder="Username"></input><br/><br/>
                        <input className="inp" type="text" placeholder="E-mail"></input><br/><br/>
                        <input className="inp" type="text" placeholder="Password"></input><br/><br/>
                        <input className="inp" type="text" placeholder="Confirm Password"></input><br/><br/>
                        <input type="submit" className="btn btn-dark"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterPage;