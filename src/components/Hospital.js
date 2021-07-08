import React from "react"
import ReactDOM from "react-dom"
import Sidebar from "./Sidebar";
import HospitalItem from "./HospitalItem";
import {useState, useEffect} from "react"

function Hospital(){

    const [arr, setarr] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/hospital-list/',{
            'method' : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Token 3d12146fd1fcd94ccdd96f2b13ddcb3c4bbfb49f'
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