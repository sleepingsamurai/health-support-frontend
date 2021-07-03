import React from "react"
import ReactDOM from "react-dom"

function SidebarItem(props){
    return(
       <li key={props.id}>
           <div>{props.icon}</div>
           <div>{props.title}</div>
       </li>
    )
}

export default SidebarItem;