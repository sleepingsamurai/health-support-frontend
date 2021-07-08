import React from "react"
import ReactDOM from "react-dom"
import Sidebar from "./Sidebar";
import InfoCards from "./InfoCards"

class Dashboard extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="sidebardiv">
                    <Sidebar />
                </div>
                <div className="displaycardsdiv">
                    <InfoCards />
                </div>
            </div>       
        )
    }
}

export default Dashboard;