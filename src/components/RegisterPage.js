import React from "react"
import ReactDOM from "react-dom"


class RegisterPage extends React.Component{
    render(){
        return(
            <div>
                <div className="registerform"> 
                    <form>
                        <input className="inp" type="text" placeholder="username"></input><br/><br/>
                        <input className="inp" type="text" placeholder="email"></input><br/><br/>
                        <input className="inp" type="text" placeholder="password1"></input><br/><br/>
                        <input className="inp" type="text" placeholder="password2"></input><br/><br/>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterPage;