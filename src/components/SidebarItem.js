import React from "react"
import ReactDOM from "react-dom"

function SidebarItem(props){
    return(
       <li key={props.id} className="sidebarItem" >
           <div id="icon">{props.icon}</div>
           <div id="title">{props.title}</div>
       </li>
    )
}

export default SidebarItem;