import React from "react"
import ReactDOM from "react-dom"

class LoginPage extends React.Component{
    render(){
        const style={
            backgroundColor: "red",
            marginTop: "200px",
            marginLeft: "550px",
            textAlign: "Center",
            width: "300px",
            height: "200px",
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
                        <input style={inp1} type="text" placeholder="password"></input><br/><br/>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;