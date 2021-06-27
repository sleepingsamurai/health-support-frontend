import React from "react"
import ReactDOM from "react-dom"
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"

class AuthType extends React.Component{
    constructor(){
        super();
        this.state = {
            loginSelect: "login",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <diV>
                <form>
                    <label><input type="radio" name="loginSelect" value="login" onChange={this.handleChange}></input>Login</label>
                    <label><input type="radio" name="loginSelect" value="register" onChange={this.handleChange}></input>Register</label>
                    {this.state.loginSelect=="login"?<LoginPage/>:<RegisterPage/>}
                </form>
            </diV>
        )
    }
} 

export default AuthType;