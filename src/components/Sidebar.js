import React from "react"
import ReactDOM from "react-dom"
import { SidebarData } from "./SidebarDate"
import SidebarItem from "./SidebarItem"
import user from "../images/user.jpg"

class Sidebar extends React.Component{
    render(){
        const sidebarItemComponent = SidebarData.map(
            function(item){
                return(
                    <SidebarItem key={item.id} title={item.title} icon={item.icon} />
                )
            }
        )
        return(
            <div className="sidebar">
                <img id="user" src={user}></img>
                <h4 class="welcomeText">Welcome User</h4>
                <ul className="sidebarList">
                {sidebarItemComponent}
                </ul>
            </div>
        )
    }
}

export default Sidebar;