import React from "react"
import ReactDOM from "react-dom"
import Sidebar from "./Sidebar";
import {useState, useEffect} from "react"

function VaccineSlotItem(props){

    const [type, setType] = useState()

    useEffect(() => {
        var id = props.data.type
        console.log(id)
        fetch(`http://127.0.0.1:8000/api/vaccine-type/${id}/`,{
            'method' : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Token 3d12146fd1fcd94ccdd96f2b13ddcb3c4bbfb49f'
            }
        }).then(response => response.json())
        .then(response => setType(response.name))
        .catch(error => console.log(error))
    })

    return(
        <div>
            <div className="hospitalitem">
                <div className="vacname">{type}</div><div>{props.data.quantity}</div>
            </div>
        </div>       
    )
}

export default VaccineSlotItem;