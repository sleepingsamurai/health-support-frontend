import React from "react"
import ReactDOM from "react-dom"
import Sidebar from "./Sidebar";
import HospitalItem from "./HospitalItem";
import {useState, useEffect} from "react"
import {useCookies} from 'react-cookie'

function Hospital(){

    const [arr, setarr] = useState([])
    const [token, settoken] =useCookies(['mytoken'])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/hospital-list/',{
            'method' : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token['mytoken']}`
            }
        }).then(response => response.json())
        .then(response => setarr(response))
        .catch(error => console.log(error))
    })

    return(
        <div className="row">
            <div className="sidebardiv">
                <Sidebar />
            </div>
            <div className="displaycardsdiv">
                <h1 className="heading">Hospitals</h1>
                {arr.map(i => (
                    <HospitalItem name={i.name}/>
                ))}
            </div>
        </div>       
    )
}

export default Hospital;