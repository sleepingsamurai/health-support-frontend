import React from "react"
import ReactDOM from "react-dom"
import { SidebarData } from "./SidebarDate"
import SidebarItem from "./SidebarItem"

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
                {sidebarItemComponent}
            </div>
        )
    }
}

export default Sidebar;