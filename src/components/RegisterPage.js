import React from "react"
import ReactDOM from "react-dom"

class RegisterPage extends React.Component{
    render(){
        const style={
            backgroundColor: "red",
            marginTop: "200px",
            marginLeft: "550px",
            textAlign: "Center",
            width: "300px",
            height: "300px",
            paddingTop: "80px",
            borderRadius: "20px",
        }
        const inp1={
            lineHeight: "30px",
            fontSize: "20px",
        }
        return(
            <div>
                <div style={style}> 
                    <form>
                        <input style={inp1} type="text" placeholder="username"></input><br/><br/>
                        <input style={inp1} type="text" placeholder="email"></input><br/><br/>
                        <input style={inp1} type="text" placeholder="password1"></input><br/><br/>
                        <input style={inp1} type="text" placeholder="password2"></input><br/><br/>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterPage;