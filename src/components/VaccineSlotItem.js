import React from "react"
import ReactDOM from "react-dom"
import Sidebar from "./Sidebar";
import {useState, useEffect} from "react"
import {useCookies} from 'react-cookie'

function VaccineSlotItem(props){

    const [type, setType] = useState()
    const [token, settoken] =useCookies(['mytoken'])

    useEffect(() => {
        var id = props.data.type
        console.log(id)
        fetch(`http://127.0.0.1:8000/api/vaccine-type/${id}/`,{
            'method' : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token['mytoken']}`
            }
        }).then(response => response.json())
        .then(response => setType(response.name))
        .catch(error => console.log(error))
    })

    return(
        <div>
            <div className="hospitalitem">
                <div className="vacname">{type}</div><div>{props.data.quantity}</div>
                <button className="btn btn-dark">book</button>
            </div>
        </div>       
    )
}

export default VaccineSlotItem;