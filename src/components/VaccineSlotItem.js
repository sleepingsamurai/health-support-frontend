import React from "react"
import ReactDOM from "react-dom"
import Sidebar from "./Sidebar";
import {useState, useEffect} from "react"

function VaccineSlotItem(props){

    return(
        <div>
             <div className="hospitalitem">
                <h2>{props.data.type}</h2><span>{props.data.quantity}</span>
            </div>
        </div>       
    )
}

export default VaccineSlotItem;