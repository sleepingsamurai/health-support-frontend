import React from "react"
import ReactDOM from "react-dom"
import { SidebarData } from "./SidebarDate"
import SidebarItem from "./SidebarItem"
import user from "../images/user.jpg"
import {useState, useEffect} from 'react'
import {useCookies} from 'react-cookie'

function Sidebar(){
    const sidebarItemComponent = SidebarData.map(
        function(item){
            return(
                <SidebarItem key={item.id} title={item.title} icon={item.icon} link={item.link} />
            )
        }
    )

    const [username,setusername] = useState()
    const [token, settoken] =useCookies(['mytoken'])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/user/', {
            'method' : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token['mytoken']}`
            }
        }).then(response => response.json())
        .then(response => setusername(response.username))
        .catch(error => console.log(error))
    })

    return(
        <div className="sidebar">
            <img id="user" src={user}></img>
            <h4 class="welcomeText">Welcome {username}</h4>
            <ul className="sidebarList">
            {sidebarItemComponent}
            </ul>
        </div>
    )
}

export default Sidebar;