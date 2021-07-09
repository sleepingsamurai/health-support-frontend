import React from "react"
import ReactDOM from "react-dom"
import {useState, useEffect} from 'react'
import {useCookies} from 'react-cookie'

function SidebarItem(props){

    const [token, settoken, removetoken] =useCookies(['mytoken'])

    useEffect(() => {
        if(!token['mytoken']){
            window.location.href = '/'
        }
    })

    const logout = () => {
        removetoken(['mytoken'])
    }

    return(
       <li key={props.id} className="sidebarItem" onClick={props.title == 'Logout'? () => logout() :() => {window.location.pathname = props.link}}>
           <div id="icon">{props.icon}</div>
           <div id="title">{props.title}</div>
       </li>
    )
}

export default SidebarItem;