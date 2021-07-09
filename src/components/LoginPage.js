import React from "react"
import ReactDOM from "react-dom"
import {useState, useEffect} from 'react'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'

function LoginPage() { 

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [token, settoken] =useCookies(['mytoken'])
    let history = useHistory()

    useEffect(() => {
        if(token['mytoken']){
            history.push('/dashboard')
        }
    },[token])

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    function loginbtn(e) {
        e.preventDefault()
        const csrftoken = getCookie('csrftoken');
        fetch('http://127.0.0.1:8000/auth/',{
            'method' : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'X-CSRFToken' : csrftoken,
            },
            body:JSON.stringify({username,password})
        })
        .then(response => response.json())
        .then(response => settoken('mytoken',response.token))
        .catch(error => console.log(error))
        setusername('')
        setpassword('')
    }

    return(
        <div>
            <div className="loginform"> 
                <form onSubmit={loginbtn}>
                    <h4 className="headingauth">Login</h4>
                    <input className="inp" type="text" placeholder="Username" value={username} onChange={e => setusername(e.target.value)}></input><br/><br/>
                    <input className="inp" type="password" placeholder="Password" value={password} onChange={e => setpassword(e.target.value)}></input><br/><br/>
                    <input type="submit" className="btn btn-dark" value="Login"></input>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;