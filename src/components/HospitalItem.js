import React from "react"
import ReactDOM from "react-dom"

function HospitalItem(props){
    return(
        <div className="hospitalitem">
            <h2>{props.name}</h2>
        </div>
    )
}

export default HospitalItem;