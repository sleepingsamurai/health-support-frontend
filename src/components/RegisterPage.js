import React from "react"
import ReactDOM from "react-dom"
import {useState, useEffect} from 'react'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'



function RegisterPage() {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [confpassword, setconfpassword] = useState('')
    const [token, settoken] =useCookies(['mytoken'])
    let history = useHistory()

    useEffect(() => {
        if(token['mytoken']){
            setusername('')
            setemail('')
            setpassword('')
            setconfpassword('')
            history.push('/dashboard')
        }
    },[token])


    const loginbtn = () => {
        fetch('http://127.0.0.1:8000/auth/',{
            'method' : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({username,password})
        })
        .then(response => response.json())
        .then(response => settoken('mytoken', response.token))
        .catch(error => console.log(error))
    }

    const registerbtn = () => {
        if(password && password == confpassword){
            fetch('http://127.0.0.1:8000/api/user-register/',{
                'method' : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body:JSON.stringify({username, email, password})
            })
            .then(response => response.json())
            .then(() => loginbtn())
            .catch(error => console.log(error))
        }
    }

    return(
        <div>
            <div className="registerform"> 
                <h4 className="headingauth">Register</h4>
                <input className="inp" type="text" placeholder="Username" value={username}
                onChange={e => setusername(e.target.value)}></input><br/><br/>
                <input className="inp" type="text" placeholder="E-mail" value={email}
                    onChange={e => setemail(e.target.value)}></input><br/><br/>
                <input className="inp" type="password" placeholder="Password" value={password}
                    onChange={e => setpassword(e.target.value)}></input><br/><br/>
                <input className="inp" type="password" placeholder="Confirm Password" value={confpassword}
                    onChange={e => setconfpassword(e.target.value)}></input><br/><br/>
                <input type="submit" className="btn btn-dark" value="Register" onClick={registerbtn}></input>
            </div>
        </div>
    )
}

export default RegisterPage;