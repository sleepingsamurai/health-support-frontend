import React from "react"
import ReactDOM from "react-dom"

class AuthType extends React.Component{
    render(){
        return(
            <diV>
                <form>
                    <label><input type="radio" name="type"></input>Login</label>
                    <label><input type="radio" name="type"></input>Register</label>
                </form>
            </diV>
        )
    }
} 

export default AuthType;